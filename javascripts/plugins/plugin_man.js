import "./forecolor";
import "./backcolor";


$.getCuiPlugins = function(jqNode){
    let plugins = [];
    if(jqNode && jqNode[0] && jqNode[0].attributes && jqNode[0].attributes.length){
        $.each(jqNode[0].attributes, function (attr) {
            let name = this.value
            if(this.specified && name.includes('cui-')){
                var pluginNames = name.replace('cui-', '').split(',');
                for(var pluginName of pluginNames){
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

$(document).ready(function () {
    $('[plugin^="cui-"]').each(function () {
        var $item = $(this);
        var plugins = $.getCuiPlugins($item);
        for(var plugin of plugins){
            $item.removeAttr(plugin.name);
            $item[plugin.name](plugin);
        }
    });
});

