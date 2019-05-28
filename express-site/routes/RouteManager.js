const HomeController = require('../controllers/HomeController');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

function bindController(Controller, view) {
    return function (req, res) {
        let ctr = new Controller();
        return ctr[view].bind(ctr)(req, res);
    };
}

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
    message: () => 'Hello World!'
};

class RouteManager{
    constructor(app){
        this.app = app;
    }

    register(){
        this.registerOne('get', '/', HomeController);
        this.registerOne('get', '/about', HomeController, 'loadAbout');
        this.registerOne('post', '/entry', HomeController, 'loadEntry');
        this.app.use('/graphql', express_graphql({
            schema: schema,
            rootValue: root,
            graphiql: true
        }));
    }

    registerOne(method, path, Controller, view = 'loadView') {
        this.app[method](path, bindController(Controller, view));
    }
}




module.exports = RouteManager;