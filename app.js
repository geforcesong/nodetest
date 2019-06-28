const express = require('./node_modules/express')
const config = require('./express-site/appsettings/app.config');
const RouteManager = require('./express-site/routes/RouteManager');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const path = require('path');
const minimist = require('minimist');
const fs = require('fs');
const https = require('https');

// const csrfProtection = csurf({
//   cookie: true
// });

const inputOpts = minimist(process.argv.slice(2));

const app = express()
const routeManager = new RouteManager(app);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'express-site', 'public')));
// app.use(csrfProtection);

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

if (inputOpts.https) {
  const certOptions = {
    key: fs.readFileSync(path.resolve('./httpscerts/server.key')),
    cert: fs.readFileSync(path.resolve('./httpscerts/server.crt'))
  }
  https.createServer(certOptions, app).listen(config.https_port, function () {
    console.log(`App listening on Go to https://localhost:${config.https_port}/`);
  })
} else {
  app.listen(config.port, () => console.log(`App listening on Go to http://localhost:${config.port}/`))
}
