const HomeController = require('../controllers/HomeController');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

function bindController(Controller, view) {
    return function (req, res) {
        let ctr = new Controller();
        return ctr[view].bind(ctr)(req, res);
    };
}

// original https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
// GraphQL schema
const schema = buildSchema(`
type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
},
type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
}
`);

const coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

var getCourse = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}
var getCourses = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

// Root resolver
const root = {
    course: getCourse,
    courses: getCourses
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