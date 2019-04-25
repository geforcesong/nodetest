const HomeController = require('../controllers/HomeController');
// const ApiController = require('../controllers/apiController');

function bindController(Controller, view) {
    return function (req, res) {
        let ctr = new Controller();
        return ctr[view].bind(ctr)(req, res);
    };
}

class RouteManager{
    constructor(app){
        this.app = app;
    }

    register(){
        this.registerOne('get', '/', HomeController);
        this.registerOne('get', '/about', HomeController, 'loadAbout');
    }

    registerOne(method, path, Controller, view = 'loadView') {
        this.app[method](path, bindController(Controller, view));
    }
}




module.exports = RouteManager;