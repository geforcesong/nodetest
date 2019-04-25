const express = require('./node_modules/express')
const config = require('./express-site/appsettings/app.config');
const RouteManager = require('./express-site/routes/RouteManager');

const app = express()
const path = require('path');
const routeManager = new RouteManager(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'express-site', 'views'));

routeManager.register();

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))