var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
global.mongoose = require('mongoose');
global.config = require('./config/config');

var bodyParser = require('body-parser')
var env = require('dotenv').config()

//router
var indexrouter = require('./routes/index')


// create express app
const app = express();



app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

// parse application/json
app.use(bodyParser.json())

//index router
app.use("/", indexrouter);





// app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port " + process.env.PORT || 3000);
});

module.exports = app;