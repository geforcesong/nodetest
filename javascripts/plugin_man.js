import "./plugins/forecolor";
import "./plugins/backcolor";


getPluginInfo

$(document).ready(function () {
    $('[cui-forecolor], [cui-backcolor]').each(function () {
        var $item = $(this);
        $.each($item[0].attributes, function (attr) {
            let name = this.name;
            if (this.specified && name.includes('cui-')) {
                let methodName = this.name.replace('cui-', '');
                $item.removeAttr(name);
                $item[methodName]();
            }
        })
    });
});

