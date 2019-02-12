class ForeColor {
    constructor() {
        $.fn.forecolor = function () {
            return this.css('color', 'yellow');
        }
    }
}

export default new ForeColor();