import React from 'react';
import Head from 'next/head';

import './rt_workshops.css';

const Week0 = () => (
  <>
<Head>
  <title>RATIO CLUB WEEK 0</title>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/88/three.min.js"></script>
</Head>
    {/* <!-- KEY CONCEPTS --> */}
<div class="title">
      <h1>WELCOME TO RATIO CLUB</h1>
    </div>
    <div class="title" id="subtitle">
      <h2>Week 0:
    <h3>
          HTML & JavaScript
    </h3>
      </h2>
    </div>
    <div class="border">
      <ul>
        <h3>Key Concepts:</h3>
        <li>Elements</li>
        <li>Tags</li>
        <li>Variables</li>
      </ul>
    </div>

    {/* <!-- HTML --> */}
<div class="title">
      <h2>
        What is HTML?
  </h2>
    </div>
    <p>
      HTML is the code that almost every website is made in.
</p>
    <p>
      It works a lot like a collage on paper,
  <br />with lots of little items that can be moved around and placed in different places.
</p>
      <p>
        These are called <strong>ELEMENTS</strong>
        <br /> and each one has a <strong>HTML TAG</strong> that you can write to make it appear.
  <br /> HTML Tags have an opening tag
</p>
          <div class="codeBlock">
            <p class="keyItem">
              &emsp;&lt;&emsp;>
  </p>
          </div>
          <p>
            and a closing tag
</p>
          <div class="codeBlock">
            <p class="keyItem">
              &lt;/&emsp;>
  </p>
          </div>
          <p>
            and they are read from top to bottom by your Browser.
</p>
          <p>
            There are tags to draw boxes,
</p>
          <div id="box"></div>
          <p>
            tags to play sounds
</p>
<audio controls>
              <source src="https://www.orangefreesounds.com/wp-content/uploads/2016/09/Sad-cat.mp3" type="audio/mpeg" />
</audio>
<p>
              and even tags to display other websites
</p>
            <iframe src="https://www.freewifi.fyi"></iframe>
            <div></div>
            {/* <!-- JAVASCRIPT --> */}
<div class="title">
              <h2>
                So Why JavaScript?
  </h2>
            </div>
            <p>
              JavaScript (JS) was designed to bring true interactivity to websites.
</p>
            <p>
              It allows you to make actual computer programmes that run online.
</p>
            <p>
              It takes the flat webpage and makes it come alive.
</p>
            <div></div>
            <div></div>
            <div class="exercise">
              <button type="button" id="fish">
                For example, click here
  </button>
            </div>

            {/* <!-- FISHES --> */}
<canvas id="c"></canvas>
            {/* <script>{(function () {
              // all credit goes to Matthieu Sylvain for these awesome Boid fishes!
              // https://codepen.io/masyl/pen/Gpxdz?editors=1111
              var b = document.body;
              var c = document.getElementsByTagName('canvas')[0];
              var a = c.getContext('2d');
              document.body.clientWidth; // fix bug in webkit: https://qfox.nl/weblog/218
              })()
              }
</script>
           <script type="text/javascript">{
              document.getElementById('fish').addEventListener('click', function (event) {
                (function () {
                  var mode;
                  var bee
                  var bees = [];
                  var colors = ["#F33", "#820", "#F84", "rgba(80,80,255,.2)"]; // Aliases
                  var M = Math;
                  var pow = M.pow;
                  var random = M.random; // Configuration
                  var turnRateChangeOccurence = 0.5;
                  var tempMaxTurnRate;
                  var maxTurnRate = 0.10;
                  var maxTurnRateChange = 0.9;
                  var stageSize = c.width = c.height = window.innerWidth;
                  var beeWidth = 34;
                  var speed = 3; // Distance run on each step
                  var beeLength = 22;
                  var beeTarget;
                  var beeCount = 18;
                  var i = beeCount; // First iteration will be on BeeCount
                  var isTargetRepulsing = 0;
                  var repulseCycles = 1200;
                  var repulseStrengh = 2; // bee = [positions, direction, speed, turnrate, health] // position is an array of [posX, posY] // Speed is units per cycle // Turn rate is how much the direction shifts at every cycle /* Bee .c = coordinates .d = direction .t = turn rate .h = health 
                  onmousemove = onclick = polyFunc;
                  
                  function polyFunc(mode, a, b, c, value) { // mode = event
                    if (mode.x) {
                      beeTarget = polyFunc(4, mode.x, mode.y); // onclick event
                      if (mode.which) {
                        isTargetRepulsing = repulseCycles;
                      }
                    } // function distanceToTarget (x1, y1) {
                      if (mode == 1) {
                        value = M.sqrt(pow(beeTarget.x - a, 2) + pow(beeTarget.y - b, 2));
                      } //function forwardPos(angle, length, pos) {
                        if (mode == 2) { // polyFunc = Coord
                          value = polyFunc(4, c.x + M.cos(a) * b, c.y + M.sin(a) * b);
                        } //function Bee() {
                          if (mode == 3) {
                            value = { // polyFunc = Coord
                              c: [polyFunc(4, stageSize * random(), stageSize * random())],
                              d: 0.5,
                              t: 0,
                              h: 0.5 + random()
                            }
                          } //function Coord (x, y);
                          if (mode == 4) {
                            value = {
                              x: a,
                              y: b
                            }
                          }
                          return value;
                        }; // Spawn X ammount of bees // polyFunc = Bee
                        for (; i--;) bees[i] = polyFunc(3);
                        (function loop() { // Shorthands for Bee attributes
                          var health;
                          var turnRate;
                          var direction;
                          var positions;
                          var posIndex;
                          var positions; // Fill the canvas with green
                          a.fillStyle = colors[3];
                          a.fillRect(0, 0, stageSize, stageSize);
                          for (i = beeCount; i--;) {
                            bee = bees[i];
                            turnRate = bee.t;
                            direction = bee.d;
                            health = bee.h;
                            positions = bee.c;
                            for (posIndex = 0; posIndex <
                              (beeLength * health) && posIndex <
                              positions.length - 1; posIndex++) {
                                a.beginPath();
                                a.lineWidth = beeWidth * health * (1 - (posIndex / beeLength)); // According to health
                                a.lineCap = (posIndex == 0) ? "round" : "butt";
                                a.quadraticCurveTo(positions[posIndex].x, positions[posIndex].y,
                                  positions[posIndex + 1].x, positions[posIndex + 1].y);
                                  a.strokeStyle = colors[posIndex % 3];
                                  a.stroke();
                                } /* MOVE ROUTINE 
                                var pos2;
                                var distA;
                                var distB;
                                var change; // Speed is according to health // polyFunc=f orwardPos
                                var pos = polyFunc(2,
                                  direction,
                                  (isTargetRepulsing ? speed * repulseStrengh : speed) * health,
                                  positions[0]);
                                  positions.unshift(pos);
                                  direction += turnRate; // One in a while, the turn rate changes // Force turn change if a target is in sight
                                  if (random() < turnRateChangeOccurence || isTargetRepulsing || !beeTarget %
                                  80) {
                                    change = (random() - 0.5) * 2 * maxTurnRateChange * (isTargetRepulsing ?
                                      repulseStrengh : 1);
                        turnRate += change; // Test future position with both angles
                        if (beeTarget) { // polyFunc=f orwardPos
                          pos2 = polyFunc(2, direction + change, speed * health, pos); // polyFunc=d istanceToTarget
                          distA = polyFunc(1, pos2.x, pos2.y); // polyFunc=f orwardPos
                          pos2 = polyFunc(2, direction - change, speed * health, pos); // polyFunc=d istanceToTarget
                          distB = polyFunc(1, pos2.x, pos2.y);
                        } // If the directon change takes the bee 's angle of attack away from the tarket
                        // inverse the adjustment
                        if (distA > distB && beeTarget) {
                          turnRate += (isTargetRepulsing ? change : -change) * 2;
                        }
                        
                        tempMaxTurnRate = maxTurnRate * (isTargetRepulsing ? repulseStrengh : 1);
                        // Enforce maxTurnRate
                        if (turnRate > tempMaxTurnRate) turnRate = tempMaxTurnRate;
                        if (turnRate < -tempMaxTurnRate) turnRate = -tempMaxTurnRate;
                        // Decrement repulse if not already at 0
                        isTargetRepulsing && isTargetRepulsing--;
                        
                        // Reeasing shortcut vars to bee object
                        bee.t = turnRate;
                        bee.d = direction;
                      }
                    }
                    requestAnimationFrame(loop);
                  })();
                })();
              })
            }</script> */}
            <div class="title">
              <h2>
                What else?
  </h2>
            </div>
            <p>
              JavaScript can be written directly into a HTML file by using the <strong>Script</strong> tag.
</p>
            <div class="codeBlock">
              <p class="keyItem">
                &lt;script&gt;
  </p>
            </div>
            <p>
              If you see this tag in a website's HTML, it was made with JavaScript.
</p>
            <p>
              <span>(unless stated otherwise)</span>
            </p>
            <p>
              However, it can also be run without the internet, and without a browser using <strong>node.js</strong>
            </p>
            <div class="codeBlock">
              <p class="keyItem">
                <strong>Node.js</strong>.
  </p>
            </div>
            <p>
              With this you can put JavaScript on a Raspberry Pi, or run it as part of a gallery installation. We'll be covering Node in
              a future workshop.
</p>
            <p>
              JavaScript is super popular and extremely modular - there are thousands of <strong>Libraries</strong> available to do any task you can think of, and lots of people and forums to ask for help.
</p>
            {/* <!-- VARIABLES --> */}
<div class="title">
              <h2>
                Variables
  </h2>
            </div>
            <p>
              Variables are what we use to store information within our JavaScript programme or website.
</p>
            <p>
              They are declared with the keyword <strong>var</strong>
            </p>
            <div class="codeBlock">
              <p class="keyItem">
                var
  </p>
            </div>
            <p>
              and we choose a unique name for them so we can reuse them later.
</p>
            <p>
              This name begins with a lowercase letter, and can be anything at all - just try to make it something that will you tell you
              what it's holding.
</p>
            <p>
              This looks like this:
</p>
            <div class="codeBlock">
              <p class="codeSnippet">
                var myName = "Howard";
    <br />
                  <br />var phoneNumber = 0436072424;
  </p>
</div>
                <p>
                  All statements in JavaScript must end with a semi-colon.
</p>
                <div class="codeBlock">
                  <p class="keyItem">
                    <strong>;</strong>
                  </p>
                </div>
                <div></div>
                <div class="title">
                  <h2>
                    Types of Variable
  </h2>
                </div>
                <p>
                  A variable can hold lots of different
  <strong>types</strong> of information.
</p>
                <p>
                  Here are the most common types:
</p>
                <div class="border">
                  <ul>
                    <li>
                      <strong>Int</strong> (integer) - a whole number
      <br />0, 1, 2, 3, 4
    </li>
                      <li>
                        <strong>Float</strong> (floating point) - a decimal
      <br />0.4, 6.222, 7.5267, 3.141592
    </li>
                        <li>
                          <strong>String</strong> - a word or sentence
      <br />"hello", "world", "vote yes", "62567"
      <br />
                              <span>(These are always contained in apostrophes)</span>
    </li>
                            <li>
                              <strong>Boolean</strong> - true / false
    </li>
  </ul>
</div>
                        <p>variables can also contain sets of other variables:</p>
                        <div class="border">
                          <ul>
                            <li>
                              <strong>Array</strong> - set of items
      <br />[0,4,5,2],
      <br />["hi", "hey", "what?", "635"],
      <br />[4.5, 5, 6, "good"]
      <br />
                                      <span>(these are always contained between square brackets)</span>
    </li>
                                    <li>
                                      <strong>
                                        Object
      </strong> - a key:value pair
    </li>
  </ul>
</div>


                                <p>
                                  Objects are a
  <strong>HUGE</strong> and important topic in JavaScript and programming as a whole.
</p>
                                <p>
                                  They are always contained in {'{ }'}.
</p>
                                <div class="codeBlock">
                                  <p class="keyItem">{'{ }'}</p>
                                </div>
                                <p>
                                  <span>( although this is not the only use for {'{ }'} )</span>
                                </p>
                                <p>
                                  we will go into them in more detail in future weeks,
  <br />but if you would like to read up on them in advance please do.
</p>
                                  <p>
                                    <a href="https://www.json.org/">More on Object Notation (JSON)</a>
                                  </p>
                                  <div></div>
                                  <div class="title">
                                    <h2>Next Week</h2>
                                  </div>
                                  <div class="border">
                                    <ul>
                                      <li>
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">
                                          <strong>Functions</strong>
                                        </a> - how to make things change
                                  
    </li>
                                      <li>
                                        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics">
                                          <strong>Objects</strong>
                                        </a> - the principles of Object Oriented Programming
                                  
    </li>
                                      <li>
                                        <a href="https://p5js.org/">
                                          <strong>p5.js</strong>
                                        </a> - drawing and animating with JS
    </li>
                                    </ul>
                                  </div>
                                  <div class="title">
                                    <h2>
                                      Fun Links & Further Reading:
    <br />What's been made with JS?
  </h2>
</div>
                                    <p>
                                      <strong>The Boat</strong>:
  <br />An interactive story that won awards at writing and film festivals.
  <br />It is built entirely in JavaScript.
</p>
                                        <a href="https://www.sbs.com.au/theboat/">
                                          <img src="https://www.sbs.com.au/theboat/images/fb-image.jpg" />
</a>
                                          <div></div>
                                          <p>
                                            <strong>On Broadway</strong>:
  <br />an interactive installation that takes you down New York's Broadway at different scales.
  <br />It uses real-time information with photos from instagram and taxi statistics.
  <br />
                                                  <br />The installation was exhibited at various shows around the world,
  <br />but because it's in JavaScript,
  <a href="https://www.on-broadway.nyc/">it's also available online.</a>
</p>
                                                    <iframe class="video" src="https://player.vimeo.com/video/118247767?color=4effaf&title=0&byline=0&portrait=0" frameborder="0"
                                                      webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                                    <div></div>
                                                    <p>
                                                      <strong>Introduction to p5</strong>:
  <br />this is what we will be looking at next week.
</p>
                                                      <iframe class="video" src="https://www.youtube.com/embed/8j0UDiN7my4" frameborder="0" webkitallowfullscreen mozallowfullscreen
                                                        allowfullscreen></iframe>
                                                      <div></div>
                                                      <p>
                                                        <strong>More (mostly) JavaScript websites</strong>:
  <br />click the big pink "please".</p>
                                                        <iframe src="https://www.theuselessweb.com/"></iframe>
                                                        <div></div>
                                                        <hr />
                                                          <footer>
                                                            <h6 class='serif'>
                                                              This project has been assisted by the Australian Government through the Australia Council for the Arts, its arts funding
                                                              and advisory body.
    <br />
                                                                <br /> Ratio Club is a partnership between Free Wifi and the always awesome Maker + Co.
  </h6>
                                                                <img src="/static/ratioclub/maker-logo.png" class="maker" />

</footer>
                                                                {/* <!--==================================================================================================================================
                                                                   ___                     __                                                                                                           
                                                                 /'___\                   /\ \__    __                                                                            __                    
                                                                /\ \__/  __  __    ___    \ \ ,_\  /\_\     ___ ___       __                 __    __  _     __    _ __    ___   /\_\     ____     __   
                                                                \ \ ,__\/\ \/\ \ /' _ `\   \ \ \/  \/\ \  /' __` __`\   /'__`\             /'__`\ /\ \/'\  /'__`\ /\`'__\ /'___\ \/\ \   /',__\  /'__`\ 
 \ \ \_/\ \ \_\ \/\ \/\ \   \ \ \_  \ \ \ /\ \/\ \/\ \ /\  __/            /\  __/ \/>  </ /\  __/ \ \ \/ /\ \__/  \ \ \ /\__, `\/\  __/
                                                               \ \_\  \ \____/\ \_\ \_\   \ \__\  \ \_\\ \_\ \_\ \_\\ \____\           \ \____\ /\_/\_\\ \____\ \ \_\ \ \____\  \ \_\\/\____/\ \____\
                                                                \/_/   \/___/  \/_/\/_/    \/__/   \/_/ \/_/\/_/\/_/ \/____/            \/____/ \//\/_/ \/____/  \/_/  \/____/   \/_/ \/___/  \/____/
                                                             
                                                                 ======================================================================================================================================-->
                                                              */}
{/* <script>{
  (function () {

    ///////////////////// MESSING WITH VARIABLES /////////////////////////////////
    Have a go at changing the variables declared below.
    Look in your console to see if what you have put is valid for the type of variable.
    See if you can break them all, and see if you can fix them all again.

                                                                // CHANGE THE VALUES TO WHATEVER YOU WANT TO TRY, BUT DON'T CHANGE THE NAME.
                                                                var int = 6;
                                                                var float = 0.5;
                                                                var string = "winner winner, chicken dinner!";
                                                                var boolean = true;
                                                                var array = [24, 56];
                                                                -------------------------------------------------------------
                                                                
                                                                
                                                                
                                                                DON'T CHANGE THESE, THEY'RE HERE TO TELL YOU HOW YOU'RE DOING
                                                                
                                                               console.log("Int:- ", (int === parseInt(int, 10) ? int : "sorry, that's not an integer"));
                                                                console.log("Float:- ", ((!isNaN(float) && float.toString().indexOf('.') != -1) ? float :
                                                                "sorry, I don't think that's a float"));
                                                                console.log("String:- ", (typeof string === 'string' ? string : "that's not a string"));
                                                                console.log("Boolean:- ", (typeof boolean === 'boolean' ? boolean :
                                                                "oops, remember a boolean can only be true or false"));
                                                                console.log("Array:- ", (Array.isArray(array) ? array : "sorry, that's not an array, but keep trying!"));
                                                                /////////////////////////////////////////////////////////////////////////////
                                                              })
}
</script> 
*/}
</>
);

export default Week0;
