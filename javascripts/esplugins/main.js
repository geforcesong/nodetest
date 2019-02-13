import pluginFactory from './plugin-factory';

$(document).ready(function () {
    $('[plugin^="cui-"]').each(function () {
        var $item = $(this);
        var plugins = pluginFactory.identifyPlugins($item);
        for (var plugin of plugins) {
            $item.removeAttr(plugin.name);
            var pluginObj = pluginFactory.createPlugin(plugin.name)
            pluginObj.run(plugin);
        }
    });
});