/* 
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
|
|  --- WELCOME TO THE RATIO CLUB NODE JS GROUP WEBPAGE CHALLENGE! ---
|
|  - Your challenge this week is to send all your code to my computer using this Node.js script
|
|  - Do this by adding code, be it P5 or DOM manipulation, 
|     into a list inside the "send_code" function.
|
|  - This function will build an OSC Message Object for you.
|
|  - This will be sent to me when you run the script in your terminal.
|
|  - However, just to make things trickier, 
|     all your commands must be made into strings inside an array!
|
|  - Do this by wrapping each line of code in apostrophes,
|    and ending each line with a comma (except the last line as this is array syntax).
|
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/
/*-----------------------------------------------------------*/

// WORK YOUR MAGIC HERE!

// Start by getting your IPv4 Address:
// Do this in your terminal by typing
//   ipconfig (on windows)
//   ipconfig getifaddr en0 (on a mac)
// 

var your_ip = "192.168.1.151"; // put your IPv4 Address here (it should be 4 numbers seperated by full-stops)

var message = send_code(
  ["fill(255,0,0);", "ellipse(100,100, 50, 50);"]
  /* 
  | Put all your commands here! 
  | Remember to make each of them strings and to use array syntax ["",""] 
  */
);


/*-------------------------------------------------------------*/
// DON'T CHANGE THE STUFF BELOW HERE UNLESS YOURE FEELING EDGY!
/*-------------------------------------------------------------*/

// THIS FUNCTION TURNS YOUR COMMANDS INTO THE OSC MESSAGE:

function send_code(code) {
  var codeAsString = ""; // First we make all the commands into one long string to preserve scope.
  for (var i = 0; i < code.length; i++) { // We do this by looping through all the commands,
    codeAsString += code[i]; // and adding them onto the string.
  }
  return { address: "/", args: [codeAsString] }; // Then we format everything into and OSC Message Object.
}

/*-------------------------------------------------------------*/

// THIS SENDS THE OSC MESSAGE TO MY COMPUTER:

var osc = require('osc'); // First we require OSC.

var oscPort = new osc.UDPPort({ // Then we build our port to send the message.
  localAddress: your_ip,
  localPort: 57121
});

oscPort.on("ready", function () { // Then when the message is ready:
  console.log(message);
  oscPort.send(message, "192.168.1.151", 57110); // Send the the message
  setTimeout(function () { oscPort.close(); }, 200); // Wait to let my computer recieve it.
  console.log("sent!");
});

oscPort.open(); // This opens the port on your computer to send the message to mine.

/*-------------------------------------------------------------*/