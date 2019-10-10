import React from 'react';
import Head from 'next/head';

const Week4 = () => (
  <>
    <Head>
      <title>RATIO CLUB WEEK 4</title>
      <link rel="stylesheet" type="text/css" href="/static/ratioclub/rt_workshops.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
    </Head>
    <div class="title">
      <h1>WELCOME TO RATIO CLUB</h1>
    </div>
    <div class="title" id="subtitle">
      <h2>Week 4:
            <h3>Experiments in Structure
            </h3>
      </h2>
    </div>
    <div class="border">
      <ul>
        <h3>Key Concepts:</h3>
        <li>DOM Manipulation</li>
        <li>Using AJAX & Asynchronicity</li>
        <li>Installing Node & Local Servers</li>

      </ul>
    </div>
    {/* <!-- DOM --> */}
    <div class="title">
      <h2>The Document Object Model</h2>
    </div>
    <p>The Document Object Model, or DOM, refers to the tree-like structure of a HTML document.</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/440px-DOM-model.svg.png" alt="DOM structure" id="DOM pic" />
    <p>Elements can be <strong>nested</strong> inside other Elements, creating a hierarchy.</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        &lt;body&gt;
            <br />&emsp;&emsp;&lt;div&gt;
            <br />&emsp;&emsp;&emsp;&emsp;&lt;p&gt;
            <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;this is a paragraph of text,
            <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nested within a divider,
            <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nested inside the body.
            <br />&emsp;&emsp;&emsp;&emsp;&lt;/p&gt;
            <br />&emsp;&emsp;&lt;/div&gt;
            <br />&lt;/body&gt;
        </p>
    </div>

    <p>Elements nested within others are called <strong>Children</strong>,<br />and the Elements they are nested in are called <strong>Parents</strong>.</p>
    <div class="title">
      <h2>Element Attributes</h2>
    </div>
    <p>Elements can be given <strong>attributes</strong>, which hold <strong>values</strong>.</p>
    <p>These include the <strong>style</strong> attribute for applying CSS styling,<br />the <strong>class</strong> attribute for grouping similar elements,<br />and the <strong>id</strong> attribute which is used to identify specific individual tags.</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        &lt;div style="width:100px" class="box" id="box101"&gt;
        </p>
    </div>
    <p>These can be applied within the HTML Tag.<br />Certain Tags have their own unique attributes,<br />but other attributes are applicable to all types of Tag.</p>
    <p>Any <strong>id</strong> attribute should be given a unique value.</p>
    <div class="title">
      <h2>DOM Manipulation</h2>
    </div>
    <p>So how do we manipulate the DOM using JavaScript?</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        document.getElementById('uniqueId');
        </p>
    </div>
    <p>This will <strong>return</strong> the Element as an <strong>Object</strong> that we can store in a variable.</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        var el = document.getElementById('uniqueId');
        </p>
    </div>
    <div></div>
    <div class="title">
      <h2>Altering Attributes</h2>
    </div>
    <p>We can use <strong>dot notation</strong> to alter attributes in the same way we would change any <strong>Object variable</strong>.</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        var el = document.getElementById('uniqueId');
            <br />
        <br />el.width = 500;
            <br />el.color = "rgb(255, 200, 0)";
            <br />el.fontSize = "24pt";
        </p>
    </div>
    <div></div>
    <div class="title">
      <h2>Creating Elements</h2>
    </div>
    <p>You can also create a new element using JavaScript</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        var el = document.createElement("tagType");
            <br />document.body.appendChild(el);
        </p>
    </div>
    <p>This creates a new element of whatever type you specify.</p>
    <p>You must then <strong>append</strong> this to the DOM.</p>
    <p>It is important to <strong>nest</strong> the new element in the right place.</p>
    {/* <!-- AJAX --> */}
    <div class="title">
      <h2>Asynchronicity</h2>
    </div>
    <p>The reason this all is possible is something that makes JavaScript special.</p>
    <p>JavaScript allows for <strong>Asynchronous</strong> requests and callbacks.</p>
    <p>This means that things can be done in the background whilst we continue doing what we were doing on the page.</p>
    <p>For example, if you need to get an image from an external URL somewhere else of the internet, our JavaScript code can ask for this image and then rather than having to wait for it to be returned and loaded, our code can carry on running and then present
        the image when it is ready.</p>
    <div class="title">
      <h2>Requests: Server & Client</h2>
    </div>
    <p>It is important to understand that when working with the internet, there is a <strong>client</strong> and a <strong>server</strong>.</p>
    <p>The client makes a <strong>HTTP request</strong> to the server, asking for a <strong>resource</strong>.</p>
    <p>A resource is any form of data that you may want to use. This could be a webpage, an image, or the contents of a database amongst other things.</p>
    <p>The server then delivers a <strong>HTTP response</strong>, sending the resource back to the client.</p>
    <div></div>
    <img src="https://www.w3schools.com/xml/ajax.gif" />
    <div></div>
    {/* <!-- EXERCISE --> */}
    <div class="title">
      <h2>EXERCISE</h2>
    </div>
    <p>Let's manipulate some DOM!</p>

    <div class="exercise">
      <a href="./DOM_exercise.html" download>
        <button type="button">
          GET THE EXERCISE
          </button>
      </a>
    </div>
    {/* <!-- RESOURCES --> */}
    <div class="title">
      <h2>Running A Local Server</h2>
    </div>
    <p>Whenever you want to use a resource in your programme or webpage you will need to <strong>load</strong> it.</p>
    <p>However, due to security reasons, JavaScript tries to prevent <strong>cross-origin requests</strong> that may be malicious in nature.</p>
    <p>What this means for us is that, when writing our webpage locally on our computer, we cannot load local resources without requesting them from a <strong>local server</strong>.</p>
    <p>To do this, we can use Node.js</p>
    <div class="title">
      <h2>Node.js</h2>
    </div>
    <p>Node.js is a way of running JavaScript locally on your computer. It allows your computer to interpret JavaScript without need to use a browser.</p>
    <p>It is a powerful tool that has a huge range of uses. With it you can build programmes to run on Raspberry Pi's in installations, twitterbots to tweet fun things, or put together an app for a mobile phone.</p>
    <p>To run a Node.js script, we use the command line.</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        node nameOfFile.js
        </p>
    </div>
    <p>This will ask node to run the script we have written. (more on this next week)</p>
    <div class="title">
      <h2>The Command Line</h2>
    </div>
    <p>The command line or <strong>terminal</strong> is a way of talking directly to your computer.</p>
    <p>It is a quick and useful way to access certain computer applications such as Node.js</p>
    <p>Visual Studio has an <strong>Integrated Terminal</strong> that can be accessed under "view" or by pressing <strong>ctrl + '</strong> (mac: <strong>cmd + '</strong> )</p>
    <div class="title">
      <h2>npm and http-server</h2>
    </div>
    <p>We can also use it to run a simple HTTP Server right from our own computer.</p>
    <p>In the same way that we have been using libraries to load prebuilt code into our webpages, Node.js uses <strong>packages</strong>.</p>
    <p>There are packages for pretty much anything. Just try doing a google search for the name of a food along with "js" and you will almost always find a node package.</p>
    <p>To install packages for Node.js to use, we use <strong>npm - Node Package Manager</strong>.</p>
    <p>When installing Node.js, npm is included.</p>
    <p>With npm we can install any node package using the <strong>command line</strong>.</p>
    <div class="codeBlock">
      <p class="codeSnippet">
        npm install http-server -g
        </p>
    </div>
    <p>When we use the above command in the command line, it will ask npm to search for an install a package called "http-server".</p>
    {/* <!-- HOMEWORK --> */}
    <div class="title">
      <h2>Homework</h2>
    </div>
    <a href="https://nodejs.org/en/">
      <p>Install Node.js on your computer, along with npm.</p>
    </a>
    <p>Then install the http-server package.</p>
    <div class="border">
      <ul>
        <h3>Next Week: Making Generative Art</h3>
        <li>Constructing Algorithms</li>
        <li>Node.js</li>
        <li>Running Local Applications</li>
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

export default Week4;
