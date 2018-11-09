const KConsumer = require('./KConsumer');

const topics = [
    {
        topic: "webevents.dev"
    }
];

const kConsumer = new KConsumer(topics);
kConsumer.start();


process.on("SIGINT", function () {
    kConsumer.instance.close(true, function () {
        process.exit();
    });
});