(function () {
    'use strict';
    require("./components"); //To set up all the app/XXXX modules
    var server = require("app/server");
    server.start();
}());