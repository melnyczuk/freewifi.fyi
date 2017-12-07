var osc = require("osc");
var http = require("http");
var WebSocket = require("ws");
var express = require("express");
var app = express();
var server = app.listen(8081);



app.use("/", express.static(__dirname));
// app.use(express.static('public'));

var wss = new WebSocket.Server({
    server: server
});
console.log("express server online");
// Listen for Web Socket connections.
wss.on("connection", function(socket) {
    var socketPort = new osc.WebSocketPort({
        socket: socket,
        metadata: false
    });
    console.log("connected to browser!");

    var msg = '';
    var udpPort = new osc.UDPPort({
        localAddress: "192.168.1.151",
        localPort: 57110
    });

    udpPort.on("ready", function() {
        udpPort.on("message", function(oscMessage) {
            console.log("got msg: ", oscMessage);
            // socketPort.on("ready", function() {
            console.log("Sending to browser");
            socketPort.send(oscMessage);
            console.log('sent!');
            // });
            socketPort.open();
        });
    });

    udpPort.on("error", function(err) {
        console.log(err);
    });

    udpPort.open();
});