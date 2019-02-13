import ForeColorPlugIn from './forecolor';
import BackColorPlugIn from './backcolor';
class PluginFactory {
    constructor() {
        this.plugins = {};
    }

    register(plugin) {
        this.plugins[plugin.pluginName] = plugin;
    }

    createPlugin(name, options) {
        var cls = this.plugins[name];
        if (!cls) {
            throw new Error('Plugin not exists');
        }
        return new cls(options);
    }

    identifyPlugins(jqNode) {
        let plugins = [];
        if (jqNode && jqNode[0] && jqNode[0].attributes && jqNode[0].attributes.length) {
            $.each(jqNode[0].attributes, function (attr) {
                let name = this.value
                if (this.specified && name.includes('cui-')) {
                    var pluginNames = name.replace('cui-', '').split(',');
                    for (var pluginName of pluginNames) {
                        plugins.push({
                            name: pluginName,
                            node: jqNode,
                            data: jqNode.data()
                        })
                    }
                }
            })
        }
        return plugins;
    }
}

const factory = new PluginFactory();
factory.register(ForeColorPlugIn);
factory.register(BackColorPlugIn);

export default factory;