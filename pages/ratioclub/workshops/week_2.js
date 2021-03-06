import React from 'react';
import Head from 'next/head';

import './rt_workshops.css';

const Week2 = () => (
  <>
    <Head>
      <title>RATIO CLUB WEEK 2</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
    </Head>
    <div class="title">
        <h1>WELCOME TO RATIO CLUB</h1>
    </div>
    <div class="title" id="subtitle">
        <h2>
            Week 2:
      <h3>Animation & Repetition,<br />Interaction & Repetition</h3>
      </h2>
    </div>
    <div class="border">
      <ul>
        <h3>Key Concepts:</h3>
        <li>Basics of Animation</li>
        <li>If Statements & For Loops</li>
        <li>Basics of Interaction</li>
      </ul>
    </div>
    <div class="title">
      <h2>
        Introducing Movement
    </h2>
    </div>
    <p>
      How do we make things move?<br />By changing something <strong>incrementally</strong> from one frame to the next.
</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        x++;
        <br />
        <br /><i>~ aka ~</i>
        <br />
        <br />x += 1;
        <br />
        <br /><i>~ aka ~</i>
        <br />
        <br />x = x + 1;
    </p>
    </div>
    <p>But what does this mean and what does it do?</p>
    <p>
      All three of these lines do the same thing:
</p>
    <div class="border">
      <ul>
        <li>They take the value of variable <i>x</i></li>
        <li>add 1 to whatever it was</li>
        <li>then save this new value back into in variable <i>x</i>.</li>
      </ul>
    </div>
    <p>if you do this every <strong>frame</strong>,<br />you have animation.</p>
    <p>for example:</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        var x;
        <br />
        <br />function setup() {'{'}
        <br />&emsp;createCanvas(960, 720);
        <br />&emsp;x = 0;
        <br />{'}'}
        <br />
        <br />function draw() {'{'}
        <br />&emsp;background(0, 0, 255);
        <br />&emsp;fill(255, 0, 0);
        <br />&emsp;ellipse(x, 360, 300, 300);
        <br />&emsp;x++;
        <br />{'}'}
      </p>
    </div>
    <p>
      This is the exact same code as last week,
    <br />except now the circle moves horizontally to the right.
</p>
    <p>
      By increasing or decreasing the size that we increment x by,
    <br />we can speed up or slow down the circle:
</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        x = x + 5;
        <br />
        <br /><i>~ or ~</i>
        <br />
        <br /> x += 0.2;
    </p>
    </div>
    <p>or, better yet:</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        var x;
        <br />var velocity;
        <br />
        <br />function setup() {'{'}
        <br />&emsp;x = 0;
        <br />&emsp;velocity = 3;
        <br />{'}'}
        <br />
        <br />function draw() {'{'}
        <br />&emsp;x += velocity;
        <br />{'}'}
      </p>
    </div>
    <p>However, if you try this code you will see there is a problem...</p>
    <div class="title">
      <h2>if / else if / else</h2>
    </div>
    <p>
      Under what conditions do we want the circle to move right,
    <br /> and when do we want it to move left instead?
</p>
    <p>
      To make the circle bounce off the edge of the screen,
    <br />we must reverse the direction when the ball is <strong>at</strong> the edge of the screen.
</p>
    <p>
      We can do this with an <strong>'if / else' statement</strong>:
</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        if ( x &gt; width ) {'{'}
        <br />&emsp;velocity *= -1;
        <br />{'}'}
        <br />else if ( x &lt; 0 ) {'{'}
        <br />&emsp;velocity *= -1;
        <br />{'}'}
      </p>
    </div>
    <p>This allows us to give the circle logical rules to follow.<br />These are called Conditional Statements.</p>
    <p>Conditional Statements operate <strong>in order</strong>:</p>
    <img src="https://2.bp.blogspot.com/-RztMkL0ZO_c/Uuyh1tV6fKI/AAAAAAAAAl4/LQCQ8PgRvqI/s1600/perl-if-elsif-else.png" />
    <p>Like so.</p>
    <div class="title">
      <h2>For Loops</h2>
    </div>
    <p>
      What if we want to draw 6 circles?
</p>
    <p>We could call 6 ellipses:</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        fill(0, 255, 0);
        <br />ellipse(0, 0, 50, 50);
        <br />ellipse(100, 100, 50, 50);
        <br />ellipse(200, 200, 50, 50);
        <br />ellipse(300, 300, 50, 50);
        <br />ellipse(400, 400, 50, 50);
        <br />ellipse(500, 500, 50, 50);
    </p>
    </div>
    <p>but this is laborious and we are lazy.</p>
    <p>Instead, we use a <strong>for loop</strong>:</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        fill(0, 255, 0);
        <br />
        <br />for (var i = 0; i &lt; 6; i++) {'{'}
        <br />ellipse(100 * i, 100 * i, 50, 50);
        <br />{'}'}
      </p>
    </div>
    <p>But what is actually happening here?<br />Let's break it down:</p>
    <div class="border">
      <ul>
        <h3>using the keyword <strong>for</strong></h3>
        <li>
          first we make a new variable called <strong>i</strong> and make it equal to 0
            <br />&emsp;&emsp;<span class="codeSnippet">var i = 0;</span>
        </li>
        <li>
          then we create a condition for when the end the loop
            <br />&emsp;&emsp;<span class="codeSnippet">i {'<'} 6;</span>
        </li>
        <li>
          then we say what should happen at the end of every time we run through the loop
            <br />&emsp;&emsp;<span class="codeSnippet">i++;</span>
        </li>
        <li>the code in {'{ }'} is the code that is executed during the loop.</li>
      </ul>
    </div>
    <div></div>
    <div class="title">
      <h2>Exercise:</h2>
    </div>

    <p>In this weeks exercise, we've got a red circle that's bouncing all over the place.</p>
    <div class="border">
      <ul>
        <li>First, see if you can change the behaviour of the circle as it moves around.</li>
        <li>Try to copy your drawing from last week into this weeks exercise,
            <br />then make it bounce, wiggle, change colour or change size.</li>
        <li>
          Try repeating shapes using some for loops.
            <br /><span style={{ fontSize: '80%' }}>But remember, if you don't make any variation between each run of the loop,<br />all the shapes will be drawn on top of each other.</span>
        </li>
      </ul>
    </div>
    <p>
      You can make anything happen.
    <br />Just work out how to do it step by step.
</p>

    <div class="exercise">
      <a href="./wk2_exercise.html" download>
        <button type="button">
          GET THE EXERCISE
          </button>
      </a>
    </div>
    <div class="title">
      <h2>Events: Introducing Interaction</h2>
    </div>
    <p>In JavaScript, ways of interacting with your programme are called <strong>Events</strong>.</p>
    <p>p5.js has a lot of great built-in variables and functions to monitor events and make interaction easy.</p>
    <p>On the <a href="https://p5js.org/reference/#group-Events"><strong>Reference Page</strong></a> you find details about all of them.</p>
    <div class="title">
      <h2>The Keyboard</h2>
    </div>
    <p>
      If you just want something to happen anytime any old key is pressed,
    <br />use <strong>keyIsPressed</strong>.
</p>
    <p>
      keyIsPressed is a p5.js <strong>Boolean</strong> variable that is <strong>true</strong> if a key is being pressed,
    <br />and <strong>false</strong> if there isn't.
</p>
    <div class="codeBlock">
      <p class="keyItem">keyIsPressed</p>
      <p class="codeSnippet">
        if (keyIsPressed === true) {'{'}
        <br />&emsp;fill(0, 0, 0);
        <br />{'} else {'}
        <br />&emsp;fill(255, 0, 0);
        <br />{'}'}
        <br />
        <br />rect(25, 25, 50, 50);
    </p>
    </div>
    <p>
      But if you want to be more specific, you can tell p5.js which key (or keys) to listen for:
</p>
    <div class="codeBlock">
      <p class="keyItem">key === "value"</p>
      <p class="codeSnippet">
        if (key === "s") {'{'}
        <br />&emsp;x += 0;
        <br />{'} else {'}
        <br />&emsp;x += velocity;
        <br />{'}'}
        <br />
        <br />rect(x, 25, 50 50);
    </p>
    </div>
    <div></div>
    <div class="title">
      <h2>The Mouse</h2>
    </div>
    <p>p5.js also allows you to monitor the position of the mouse cursor and the mouse buttons.</p>
    <p>
      These are seperated up by the X and Y position (the horiontal and vertical position).
</p>
    <div class="codeBlock">
      <p class="keyItem">mouseX & mouseY</p>
      <p class="codeSnippet">
        ellipse(mouseX, mouseY, 50, 50);
    </p>
    </div>
    <p>These are the X and Y position of the cursor <strong>relative to the Canvas</strong>.</p>
    <p>What's more, there's <strong>pmouseX</strong> and <strong>pmouseY</strong>, that give the position of the mouse <strong>from the previous frame</strong>.</p>
    <p>With these, you can work out if there's been a big, quick, movement of the mouse:</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        if (mouseX - pmouseX > 50) {'{'}
        <br />&emsp;background(255, 255, 0);
        <br />{'} else {'}
        <br />&emsp;background(0, 0, 255);
        <br />{'}'}
      </p>
    </div>
    <p>Have a read of the <a href="https://p5js.org/reference/#group-Events"><strong>Reference Page</strong></a> for more information.</p>
    <div class="title">
      <h2>Homework:</h2>
    </div>
    <p class="keyItem">See if you can make your animation interactive using the keyboard or the mouse.</p>
    <div class="border">
      <ul>
        <h3>Next Week: More Interactivity</h3>
        <li>Event Listeners</li>
        <li>Event Target</li>
        <li>Callback Functions</li>
      </ul>
    </div>

    <div></div>
    <hr />
    <footer>
      <h6 class='serif'>
        This project has been assisted by the Australian Government through the Australia Council for the Arts, its arts funding and advisory body.
        <br />
        <br /> Ratio Club is a partnership between Free Wifi and the always awesome Maker + Co.
    </h6>
      <img src="/static/ratioclub/maker-logo.png" class="maker" />
    </footer>
  </>);

export default Week2;
