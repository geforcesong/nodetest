const kafka = require('kafka-node');
const uuid = require("uuid");
const KClient = require('./KClient');

class KProducer {
    constructor(topicName) {
        this.kClient = new KClient();
        this.topicName = topicName;
    }

    async init() {
        const self = this;
        return new Promise((resolve, reject) => {
            self.instance = new kafka.HighLevelProducer(self.kClient.instance);
            self.instance.on("ready", function () {
                console.log("Kafka Producer is connected and ready.");
                return resolve(null);
            });

            self.instance.on("error", function (error) {
                reject(error);
            });
        })
    }

    run() {
        setInterval(()=>{
            this.send({
                type: 'whatsapp',
                userId: 'auserid',
                sessionId: 'asessionId',
                data: {
                    name: 'andy',
                    sex: 'M'
                }
            });
        }, 1000)
        
    }

    send({ type, userId, sessionId, data }, callback = () => { }) {
        const event = {
            id: uuid.v4(),
            timestamp: Date.now(),
            userId: userId,
            sessionId: sessionId,
            type: type,
            data: data
        };

        const buffer = new Buffer.from(JSON.stringify(event));

        const record = [
            {
                topic: this.topicName,
                messages: buffer,
                attributes: 1 /* Use GZip compression for the payload */
            }
        ];

        this.instance.send(record, callback);
    }
}

module.exports = KProducer;
