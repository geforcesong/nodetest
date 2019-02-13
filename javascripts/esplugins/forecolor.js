import PluginBase from './plugin-base'

class ForeColorPlugIn extends PluginBase{
    constructor(){
        super(ForeColorPlugIn.pluginName)
    }

    before_process(options){
        console.log('before process');
    }

    process(options){
        let colorName = options.data.forecolor;
        var color = colorName || 'yellow';
        return options.node.css('color', color);
    }
}

ForeColorPlugIn.pluginName = 'forecolor';

export default ForeColorPlugIn;