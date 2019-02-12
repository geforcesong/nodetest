class BackColor {
    constructor() {
        $.fn.backcolor = function () {
            return this.css('background-color', 'blue');
        }
    }
}

export default new BackColor();