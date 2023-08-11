"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var auth_1 = require("./auth");
var auth0_1 = require("./auth0");
// @ts-ignore
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middleware = jsonServer.defaults();
// set default middleware (logger, static, cors and no-cache)
server.use(middleware);
server.use(jsonServer.bodyParser);
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', auth0_1.handleAuthorization);
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
https.createServer(options, server).listen(3001, function () {
    console.log("JSON Server is running on http://localhost:3001");
});
