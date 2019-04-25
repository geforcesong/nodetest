const express = require('./node_modules/express')
const config = require('./express-site/appsettings/app.config');
const RouteManager = require('./express-site/routes/RouteManager');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express()
const routeManager = new RouteManager(app);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csurf({
  cookie: true
}));

app.use(function(err, req, res, next) {
  if (err) {
    if (!res.headersSent && err.name === 'ForbiddenError') {
      res.status(403);
      return res.send('err............you are not allowed');
    }
    throw err;
  }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'express-site', 'views'));

routeManager.register();

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))