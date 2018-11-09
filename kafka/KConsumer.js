const KClient = require('./KClient');
const kafka = require("kafka-node");

class KConsumer {
    constructor(topics, options) {
        this.kClient = new KClient();
        const tmpOpts = options || {};
        const consumerOpts = {
            autoCommit: tmpOpts.autoCommit || true,
            fetchMaxWaitMs: tmpOpts.fetchMaxWaitMs || 1000,
            fetchMaxBytes: tmpOpts.fetchMaxBytes || 1024 * 1024,
            encoding: tmpOpts.encoding || "buffer"
        };
        this.instance = new kafka.HighLevelConsumer(this.kClient.instance, topics, consumerOpts);
    }

    start() {
        this.instance.on("message", (message) => {
            // Read string into a buffer.
            var buf = new Buffer.from(message.value, "binary");
            var decodedMessage = JSON.parse(buf.toString());
            console.log(decodedMessage);
        });

        this.instance.on("error", (err) => {
            console.log("error", err);
        });
    }
}

module.exports = KConsumer;