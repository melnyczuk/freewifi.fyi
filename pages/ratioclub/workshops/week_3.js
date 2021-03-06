import React from 'react';
import Head from 'next/head';

import './rt_workshops.css';

const Week3 = () => (
  <>
  <Head>
    <title>RATIO CLUB WEEK 3</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
</Head>
    <div class="title">
        <h1>WELCOME TO RATIO CLUB</h1>
    </div>
    <div class="title" id="subtitle">
        <h2>
            Week 3:
            <h3>
                Hark! Event Listeners
            </h3>
        </h2>
    </div>
    <div class="border">
        <ul>
            <h3>Key Concepts:</h3>
            <li>Event Listeners</li>
            <li>Callback Functions</li>
            <li>Event Target</li>
        </ul>
    </div>
    <div class="title">
        <h2>
            Event Listeners
        </h2>
    </div>
    <p>
        JavaScript was originally made to provide interaction to static webpages made in HTML.
        <br />This means that JavaScript has a rather idiosyncratic approach to processing interaction.
    </p>
    <p>We use the term <strong>Events</strong> to talk about interaction in JavaScript.<br />When a user does something to a webpage (be it clicking, scrolling, or anything else you can think of), an <strong>Event</strong> is triggered.</p>
    <p>We need to tell our JavaScript to be ready to make sense of any number of different events that may happen at any time anywhere on the webpage.</p>
    <p>To do this, we use <strong>Event Listeners</strong>.</p>
    <p>An <strong>Event Listener</strong> can be added to our JavaScript so that it knows what to do when we click the mouse, resize the browser window, or hover over a picture.</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            addEventListener(type, funcName);
            <br />
            <br /><i>eg:</i>
            <br />
            <br />addEventListener("click", redraw);
        </p>
    </div>
    <p>The event type is a <strong>String</strong> and a list of them can be found on the MDN reference page.</p>
    <div class="codeBlock" style={{border: '5px solid #000000;'}}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Events">
            <button type="button">
     Event Reference
    </button>
        </a>
    </div>
    <p>Event Listeners can be added to our webpage as a whole, or to individual elements on the page like a piece of text or a photograph.</p>
    {/* <!-- CALLBACK --> */}
    <div class="title">
        <h2>Callback Functions</h2>
    </div>
    <p>When a webpage loads, all the HTML and JavaScript will be be recieved by your browser, which knows how to turn everything into what you see on the screen.</p>
    <p>Usually, thats where the story ends: the page remains the same, or perhaps any animations you have made continue to play.</p>
    <p>But if we have set up an Event Listener, we can get a new bit of code to run when that event is triggered.</p>
    <p>This new bit of code is contained in a <strong>Callback Function</strong>, which is a function we <strong>pass</strong> to the Event Listener.</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            addEventListener("click", sayHi);
            <br />
            <br />function sayHi() {'{'}
            <br />&emsp;alert("hello");
            <br />{'}'}
        </p>
    </div>
    <p>What if we want/need to pass arguments to our callback function?</p>
    <p>To do this we need to call the function inside an <strong>Anonymous Function</strong>.</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            addEventListener("click",
            <br />&emsp;function() {'{'}
            <br />&emsp;&emsp;ellipse(20, 20, 100, 100);
            <br />&emsp;{'}'}
            <br />);
            {/* <!-- <br />
            <br />//<i>Named Function</i>
            <br />function drawCircle(width) {'{'}
            <br />&emsp;ellipse(20, 20, width, width);
            <br />{'}'} --> */}
        </p>
    </div>
    <p>An <strong>Anonymous Function</strong> is a function that we do not give a name to.</p>
    <p>It is called where it is written and cannot be reused elsewhere.</p>
    <div class="title">
        <h2>EXERCISE</h2>
    </div>
    <p>Using only addEventListener(), see if you can do the following:</p>
    <div class="border">
        <ul>
            <h3>What to do:</h3>
            <li>1. Make a cat appear when you 'click' on the page</li>
            <li>2. Make the cat become a dog when you 'drag' the image</li>
            <li>3. Make the images switch when you 'resize' the window</li>
            <li>4. Using an Anonymous Function, add a new turtle when you 'scroll'</li>
        </ul>
    </div>
    <div class="exercise">
        <a href="./event_listener_exercise.html" download>
            <button type="button">
            GET THE EXERCISE
          </button>
        </a>
    </div>
    {/* <!-- Event Object --> */}
    <div class="title">
        <h2>Event Objects</h2>
    </div>
    <p>Events are powerful. Even a single click of the mouse can contain a lot of information.</p>
    <p>All of this information is stored in an <strong>Object</strong>.</p>
    <p>To make use of the information stored in the <strong>Event Object</strong> there are a number of ways to unpack it.</p>
    {/* <!-- Event Target --> */}
    <div class="title">
        <h2>How to Use the Event Object</h2>
    </div>
    <p>So how do we access the Event Object?</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            addEventListener("click",
            <br />&emsp;function(event) {'{'}
            <br />&emsp;&emsp;event //<i>This is the Event Object</i>
            <br />&emsp;{'}'}
            <br />)
        </p>
    </div>
    <p>By making an Anonymous Function and passing it the argument <strong>event</strong>,<br />this then becomes a variable containing the Event Object.</p>
    <p>We can then unpack any information from this that we may want.</p>
    <p>For example, this gives the id attribute of the target element:</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            addEventListener("click",
            <br />&emsp;function(event) {'{'}
            <br />&emsp;&emsp;event.target.id;
            <br />&emsp;{'}'}
            <br />);
        </p>
    </div>
    <p>And this gives the x coordinate of the event:</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            <br />addEventListener("click",
            <br />&emsp;function(event) {'{'}
            <br />&emsp;&emsp;event.screenX;
            <br />&emsp;{'}'}
            <br />);

        </p>
    </div>
    <div></div>
    <div class="title">
        <h2>event.target</h2>
    </div>
    <p>The <strong>Target</strong> of an Event refers to the <strong>HTML Element</strong> that the event has happened to.</p>
    <p>So if you click on an image, that <strong>Image Element</strong> is the Event Target.</p>
    <p>If you highlight some text, that <strong>Paragraph Element</strong> is the Event Target.</p>
    <p>If you scroll down the page, the <strong>whole Document</strong> is the Event Target.</p>
    <p>So how can we check that we are getting the right information out of the Event Object?</p>
    <div class="title">
        <h2>console.log();</h2>
    </div>
    <p>Whenever you are writing JavaScript, you may want to see what is going on inside your code.</p>
    <p>How do we know what a variable holds?<br />How can we quickly see where our code is making a mistake?</p>
    <p>The best tool to help us figure out what's happening is <strong>console.log();</strong></p>
    <p>This allows us to send ourselves messages through the <strong>Browser Console</strong>.</p>
    <p>The <strong>Browser Console</strong> can be found in Chrome's Dev Tools<br />(<i>Right Click + Inspect</i>)</p>
    <p>for example:</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            addEventListener('click',
            <br />&emsp;function(event) {'{'}
            <br />&emsp;&emsp;console.log(event);
            <br />&emsp;{'}'}
            <br />);
        </p>
    </div>
    <p>This will output the entire Event Object so we can see all the information it contains as a drop-down menu in the Browser Console.</p>

    <div class="title">
        <h2>Homework:</h2>
    </div>
    <div class="exercise">
        <a href="https://clickclickclick.click">
            <button type="button">
     Play with this fun website!
    </button>
        </a>
    </div>
    <p>It makes good use of Event Listeners.</p>
    <div class="border">
        <ul>
            <h3>Next Week: DOM manipulation</h3>
            <li>Creating, Removing, and Altering Structure</li>
            <li>Loading Resources</li>
            <li>Using AJAX</li>
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
    {/* <script>
        {document.addEventListener('click', function(event) {
            console.log(event)
        })}
    </script> */}
</>);

export default Week3;
