import "./plugins/forecolor";
import "./plugins/backcolor";


function getPlugins(jqNode){
    let plugins = [];
    if(jqNode && jqNode[0] && jqNode[0].attributes && jqNode[0].attributes.length){
        $.each(jqNode[0].attributes, function (attr) {
            let name = this.name
            if(this.specified && name.includes('cui-')){
                plugins.push({
                    name: name,
                    value: this.value,
                    pluginFunc: name.replace('cui-', ''),
                    node: jqNode
                })
            }
        })
    }
    return plugins;
}

$(document).ready(function () {
    $('[cui-forecolor], [cui-backcolor]').each(function () {
        var $item = $(this);
        var plugins = getPlugins($item);
        for(var plugin of plugins){
            $item.removeAttr(plugin.name);
            $item[plugin.pluginFunc](plugin.value);
        }
    });
});

