import React from 'react';
import Head from 'next/head';

import './rt_workshops.css';

const Week5 = () => (
  <>
    <Head>
      <title>RATIO CLUB WEEK 5</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
    </Head>
  <div class="title">
    <h1>WELCOME TO RATIO CLUB</h1>
  </div>
  <div class="title" id="subtitle">
    <h2>Week 5
      <h3>Nodes and Node.js: Small Parts & Modular Designs</h3>
    </h2>
  </div>
  <div class="border">
    <ul>
      <h3>Key Topics:</h3>
      <li>Node.js</li>
      <li>Generative Art</li>
      <li>Creating Algorithms</li>
    </ul>
  </div>
  {/* <!-- NODE --> */}
  <div class="title">
    <h2>node.js</h2>
  </div>
  <p>JavaScript is an interpreted language, not a compiled language.</p>
  <p>When we load a webpage that uses JavaScript, the server sends the JavaScript file to our computer (the client) and our
    webbrowser acts as the interpreter - it knows how to use the JavaScript code to make the magic happen.</p>
  <p>JavaScript works by taking control of the browser itself. But what if you want to control more than just the browser? What
    if you want to use JavaScript to use other parts of your computer?</p>
  <p>Node.js is another form of JavaScript interpreter. It allows you to run JavaScript without a browser, and it let's you
    get around the limitations of a web-browser. This means you can do far more complicated things.</p>
  <p>Originally created to build web-servers, Node has exploded in popularity since it was created in 2009 because it allows
    anyone who knows JavaScript to make local programmes.</p>
  <div class="title">
    <h2>Using the Command Line</h2>
  </div>
  <p>We use Node from the Command Line, which we access through a Terminal.</p>
  <p>At first, the Command Line can seem really alien and weird. It's just another interface, another way of navigating through
    folders and talking to your computer.</p>
  <p>Visual Studio Code has an
    <strong>Integrated Terminal</strong> (in the top menu under 'View').</p>
  <p>Here are some super useful Command Line commands:</p>
  <div class="codeBlock">
    <p class="keyItem">cd &mdash; Change Directory</p>
    <p class="codeSnippet">cd "name of folder" --&emsp;
      <i>moves down into a folder</i>
      <br />cd ../ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;--&emsp;
      <i>moves up one folder</i>
    </p>
    <p class="keyItem">dir / ls &mdash; List Directory</p>
    <p class="codeSnippet">dir --&emsp;
      <i>lists files and folders below (Windows)</i>
      <br />ls&emsp;&emsp;--&emsp;
      <i>lists files and folders below (Mac)</i>
    </p>
    <p class="keyItem">cls &mdash; Clear the Terminal</p>
    <p class="codeSnippet">
      <i>gets rid of all the old Terminal text</i>
    </p>
    <p class="keyItem">Ctrl-C / Cmd-C &mdash; Abort</p>
    <p class="codeSnippet">
      <i>tell the Terminal to stop doing what it's doing</i>
    </p>
  </div>
  <p>To run a JavaScript file in Node, we navigate to the folder that containst the file and use the keyword
    <strong>node</strong> followed by the name of the file.</p>
  <p>Any time we have used
    <strong>console.log()</strong> it will print out in the Terminal which is handy.</p>
  <div class="title">
    <h2>require</h2>
  </div>
  <p>We can use JavaScript in Node really easily. Variables, Functions, Objects and For Loops all behave the same way in Node.</p>
  <p>We can also use
    <strong>packages</strong>, which are libraries for Node. These are sometimes also called modules.</p>
  <p>To use them, we have to
    <strong>require</strong> them, and store them in a variable.</p>
  <div class="codeBlock">
    <p class="codeSnippet">var osc = require("osc");</p>
  </div>
  <p>This variable is an
    <strong>Object</strong> that holds all the functionality of that package.
    <br />This means we can console.log it to see whats inside - however this can get messy with big packages. Instead, check the
    <strong>package documentation</strong>!</p>
  <div class="title">
    <h2>npm</h2>
  </div>
  <p>But how do we find, install and read about packages?</p>
  <p>The answer to all these questions and a few more is
    <a href="https://www.npmjs.com/">
      <strong>npmjs.com</strong>
    </a>
  </p>
  <p>This is the website for
    <strong>npm</strong> - Node Package Manager. This comes with Node and installs packages for you.</p>
  <p>Once you find a package you want to use, open a Terminal and navigate to where your Node programme is. Then use
    <strong>npm install</strong> followed by the name of the package:</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      npm install osc
    </p>
  </div>
  <div></div>
  <div class="title">
    <h2>EXERCISE</h2>
  </div>
  <p>This week we're all gonna collaborate to make a website on the projector.</p>
  <p>We'll have to use all the JavaScript we have learned to tell my computer what to do using Node on our individual computers.</p>
  <p>We'll do this by requiring a packaged called
    <strong>OSC</strong> that allows computers to communicate easily.</p>
  <p>Don't worry too much about what OSC is - let's learn by doing. But if you wanna read more about it after,
    <a href="https://www.youtube.com/watch?v=0uOR2idKvrM">look here</a>
  </p>
  <div class="exercise">
    <a href="node_exercise.js" download>
      <button type="button">
        GET THE EXERCISE
      </button>
    </a>
  </div>
  <div class="title">
    <h2>What is Generative Art?</h2>
  </div>
  <p>Generative Art is a broad term that gets applied often to art made with code.</p>
  <p>To define it losely, it's art where the artist has created a situation or an algorithm where the art then makes itself.</p>
  <p>These can be vast and complicated, involving machine learning, data anaylsis and masses of sensors.</p>
  <p>It can also be remarkably simple, clean and beautiful.</p>
  <div class="title">
    <h2>Generative Art</h2>
  </div>
  <div></div>
  <img src="https://jamesbridle.com/content/1-works/81-a-ship-adrift/1_shipadrift.png" />
  <p class="keyItem">A Ship Adrift by James Bridle</p>
  <p>James Bridle is a British writer and artist who makes a lot of brilliant work analysing computers and technology.</p>
  <p>He runs/ran a blog called
    <i>The New Aesthetic</i> that reported on the weirdness of modern culture.</p>
  <p>His work
    <i>A Ship Adrift</i> uses real-time weather data from the wind direction in London, to move a virtual ship around the a
    map of the world.</p>
  <img src="https://booktwo.org/wp-content/uploads/2012/02/roomforlondon.jpg" />
  <p>
    <a href="https://jamesbridle.com/works/a-ship-adrift">More Info on James Bridle</a>
  </p>
  <div></div>
  <img src="https://2104310a1da50059d9c5-d1823d6f516b5299e7df5375e9cf45d2.ssl.cf2.rackcdn.com/nmbx/2014/10/roomtone.jpg" />
  <p class="keyItem">Roomtone Variations by Nicolas Collins</p>
  <p>Nicolas Collins is an American composer and hacker, who's work mainly focusses on how the technology we use to record and
    replay music is now part and parcel of the music itself.</p>
  <p>In the 90s he began hacking CD Players to make generative music.</p>
  <p>
    <i>Roomtone Variations</i> is a composition that is different everytime it is performed. This is because it uses the natural
    size and ambience of the room it is performed in to decide what tone to play next.</p>
  <p>By letting a microphone feedback in the room, a dominant tone is produced. Collins then removes this tone, letting the
    next dominant tone come through. He repeats this until every tone in the room has been played.</p>
  <p>He then gets a number of players to improvise on this score structure.</p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/JrqMmY8ikuA" frameborder="0" gesture="media" allow="encrypted-media"
    allowfullscreen></iframe>
  <p>
    <a href="https://youtu.be/YZLnFICwBUo?t=31s">Some CD music by Nicolas Collins</a>
  </p>
  <img src="https://78.media.tumblr.com/d97f28071ef04d25d90a12cd0140e456/tumblr_oe8cn7VbDX1qbgdnxo1_540.gif" />
  <p class="keyItem">Saskia Freeke</p>
  <p>Saskia Freeke is a Dutch designer, coder and artist. Every day for the past 2 years she has been making geometric gifs
    with code.</p>
  <p>She also wrote a handy guide to making similar things for yourself!</p>
  <p>
    <a href="https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/">Saskia's guide to making generative art with P5</a>
  </p>
  <img src="https://78.media.tumblr.com/b089c454faa3573d3f2125dd0cfdfe77/tumblr_o5ya5obnvD1qbgdnxo1_1280.png" />
  <p>
    <a href="https://sasj.tumblr.com">Saskia's blog of daily work.</a>
  </p>
  {/* <!-- CREATING ALGORITHMS --> */}
  <div class="title">
    <h2>Turning Ideas into Algorithms</h2>
  </div>
  <p>By now, you know pretty much everything you need to know to programme websites and make local programmes on your own computer.</p>
  <p>You have learnt the very basics of how to code.
    <br />All you need do now is practice.</p>
  <p>There is always so much more to learn, and every new project will probably involved learning something new.</p>
  <p>So how do we turn creative ideas into codeable problems we can research and make?</p>
  <p>It's important to know how to break the whole project down into smallest individual steps, so that line by line you can
    tell your computer what to do.</p>
  <p>This is what an
    <strong>Algorithm</strong> is: a complicated problem broken down in to each of the smallest steps possible, and written up into
    code.</p>
  <div class="title">
    <h2>Algorithmic Planning</h2>
  </div>
  <div></div>
  <img src="https://78.media.tumblr.com/3857b34c02f31b51ba79982018d9a4d7/tumblr_o3sce9MsiC1qbgdnxo1_540.gif" />
  <p>Making an idea into an algorithm is the hardest part of writing code. But if you get it right, the rest is easy.</p>
  <p>The best coders are those who can analyse a problem and see it step by step. The best way to write code is to make each
    step as small as possible.</p>
  <p>Planning everything out on paper is a great way to visualise the problem. Making a long step-by-step to-do list shows you
    what needs to happen next and tells you what needs to be broken down further.</p>
  <div class="title">
    <h2>Modular Design and Functions</h2>
  </div>
  <p>It is generally better to put each step into it's own function, so you can reuse any parts that are the same.</p>
  <p>Think carefully what needs to go in and what needs to come out.</p>
  <p>You can often copy and paste useful functions into future projects.</p>
  <div class="title">
    <h2>Keeping Code Organised</h2>
  </div>
  <p>You can also import JavaScript files into any HTML file using the
    <strong>script</strong> tag and the
    <strong>src</strong> attribute:</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      &lt;script src="myFile.js"&gt;&lt;/script&gt;
    </p>
  </div>
  <p>You can import as many JavaScript files as you need/want to.</p>
  <p>This allows you to reuse old code, and also to break parts of your code up into sensible sections.</p>
  <p>Be aware that the order you import JavaScript files will be the order the JavaScript is run in.</p>
  <p>You can do the same with Node by using
    <a href="https://www.sitepoint.com/understanding-module-exports-exports-node-js/">
      <strong>Exports</strong>
    </a>
  </p>
  <div class="title">
    <h2>Algorithmic Checklist</h2>
  </div>
  <p>When trying to figure out a problem and make anything with code, refer to this handy checklist!</p>
  <div class="border">
    <ol>
      <li>State the project as explicitly as possible</li>
      <li>Break it all down into steps from start to finish</li>
      <li>Break each of these steps down into smaller steps</li>
      <li>Use console.log() as often as possible to check the right thing is happening.</li>
      <li>If one part is working, move it into it's own function.</li>
      <li>Don't cut corners.</li>
    </ol>
  </div>
  <div class="title">
    <h2>Homework</h2>
  </div>
  <p>Please read through Saskia Freeke's guide to
    <a href="https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/">making things in P5.js</a>
  </p>
  <p>Then think about what you want to make for you Christmas Project.</p>
  <p>When you have the beginning of an idea, start to write down what it is and do this as
    <strong>explicitly as possible.</strong>
  </p>
  <div class="border">
    <ul>
      <h3>Next Week:</h3>
      <li>three.js</li>
      <li>Constructing Projects</li>
    </ul>
  </div>
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

export default Week5;
