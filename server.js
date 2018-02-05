let port = process.env.port || 3000;

const express = require('express'),
      bodyParser = require('body-parser'),
      actuator = require('express-actuator'),
      constants = require('./config/constants.config'),
      app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(actuator());

require('./app/routes')(app);

if(constants.test){
	port = 3001;
}

app.listen(port, function() {
    console.log('Listening on port:' + port);
});

module.exports = app;