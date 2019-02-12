class ForeColor {
    constructor() {
        $.fn.forecolor = function (colorName) {
            var color = colorName || 'yellow';
            return this.css('color', color);
        }
    }
}

export default new ForeColor();