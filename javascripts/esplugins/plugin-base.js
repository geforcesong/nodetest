class PluginBase{
    constructor(name){
        this.name = name;
    }

    process(options){}
    before_process(options){}
    after_process(options){}

    run(options){
        this.before_process(options);
        this.process(options);
        this.after_process(options);
    }
}

export default PluginBase;