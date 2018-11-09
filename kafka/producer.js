const KProducer = require('./KProducer');

(async _=>{
    const producer = new KProducer('webevents.dev');
    await producer.init();
    producer.run();


    process.on("SIGINT", function () {
        producer.instance.close(function () {
            process.exit();
        });
    });
})();

