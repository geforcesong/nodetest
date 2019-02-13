import PluginBase from './plugin-base'

class BackColorPlugIn extends PluginBase{
    constructor(){
        super(BackColorPlugIn.pluginName)
    }

    before_process(options){
        console.log('BackColorPlugIn before process');
    }

    process(options){
        let colorName = options.data.backcolor;
        var color = colorName || 'blue';
        return options.node.css('background-color', color);
    }
}

BackColorPlugIn.pluginName = 'backcolor';

export default BackColorPlugIn;