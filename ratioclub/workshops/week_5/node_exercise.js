var message = doP5("background(0,0,255); fill(255,0,0); ellipse(100,100,100,100);"); //buildDOM("img", ["src", "swiss-1.jpg"]);
// var message = buildDOM("img", ["src", "swiss-1.jpg"]);
/*-------------------------------------------------------------*/
function buildDOM(tag, attributes) {
    return { address: "/buildDOM", args: [tag, attributes] };
}

function doP5(func) {
    return { address: "/doP5", args: ["" + func] };
}
/*-------------------------------------------------------------*/
var osc = require('osc');

var oscPort = new osc.UDPPort({
    localAddress: "localhost",
    localPort: 57121
});

oscPort.on("ready", function() {
    console.log(message);
    oscPort.send(message, "localhost", 57110);
    setTimeout(function() { oscPort.close(); }, 200);
    console.log("sent!");
});
oscPort.open();