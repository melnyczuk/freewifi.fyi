function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0, 0, 255);
  var port = new osc.WebSocketPort({
    url: "ws://localhost:8081",
    metadata: true
  });
  port.on("message", function (oscMsg) {
    translate_code(oscMsg)
  });
  port.open();
}

function translate_code(msg) {
  msg.args.forEach(function (el) {
    console.log(el.value);
  });
  msg.args.forEach(function (el) {
    var func = new Function(el.value);
    func();
  });
}

function buildDOM(oscMsg) {
  console.log("DOM");
  var el = document.createElement("" + oscMsg.args[0].value);
  console.log(oscMsg.args[1][0].value);
  for (var i = 1; i < oscMsg.args.length; i++) {
    el.setAttribute(oscMsg.args[i][0].value, oscMsg.args[i][1].value);
  }
  document.body.appendChild(el);
}