const kafka = require("kafka-node");

class KClient {
    constructor() {
        this.instance = new kafka.Client("localhost:2181");
    }
}

module.exports = KClient;