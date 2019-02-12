class ForeColor {
    constructor() {
        $.fn.forecolor = function (plugin) {
            let colorName = plugin.data.forecolor;
            var color = colorName || 'yellow';
            return this.css('color', color);
        }
    }
}

export default new ForeColor();