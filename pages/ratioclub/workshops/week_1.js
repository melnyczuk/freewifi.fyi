import React from 'react';
import Head from "next/head";


import './rt_workshops.css';

const Week1 = () => (
  <>
<Head>
    <title>RATIO CLUB WEEK 1</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
</Head>
    <div class="title">
        <h1>WELCOME TO RATIO CLUB</h1>
    </div>
    <div class="title" id="subtitle">
        <h2>Week 1:
            <h3>
                [ Shapes, Colours, Properties, Functions ]
            </h3>
        </h2>
    </div>
    <div class="border">
        <ul>
            <h3>Key Concepts:</h3>
            <li>Functions</li>
            <li>p5.js</li>
            <li>Objects</li>
        </ul>
    </div>
    {/* <!-- FUNCTIONS --> */}
    <div class="title">
        <h2>
            What are Functions?
        </h2>
    </div>
    <p>
        Functions are what make all the magic of coding happen by allowing you to make things change.<br />They make things dynamic.
    </p>
    <p>
        They also allow you to quickly <strong>reuse</strong> code again and again.
    </p>
    <p>
        A Function is declared with the key word <strong>function</strong><br />and given a <strong>name</strong>.
    </p>
    <p>
        Functions are <strong>passed</strong> arguments and <strong>return</strong> a value.
    </p>
    <div class="codeBlock">
        <p class="codeSnippet">
            function name( arguments ) {'{'}
            <br />&emsp;return value;
            <br />{'}'};
        </p>
    </div>
    <p>
        Like variables, they must be given a unique name - but they can also be stored in variables:
    </p>
    <div class="codeBlock">
        <p class="codeSnippet">
            var name = function( arguments ) {'{'}
            <br />&emsp;return value;
            <br />{'}'};
        </p>
    </div>
    <p>
        Both of these formats are valid and while the second is very useful,<br />it is less commonly used, being more useful for certain situations.
    </p>
    <p>Finally, in order to run and execute, a function must be called:</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            name(arguments);
        </p>
    </div>
    <div></div>
    {/* <!-- ARGUMENTS --> */}
    <div class="title">
        <h2>Arguments</h2>
    </div>
    <p>
        Arguments are variables that you pass into a function to use inside.
        <br />The can be anything you want, and confusingly, can also be other functions.
    </p>
    <p>
        Here is an example of a variable being passed into a function:
    </p>
    <div class="codeBlock">
        <p class="codeSnippet">
            function addEnthusiasm( message ) {'{'}
            <br />&emsp;return message + "!";
            <br />{'}'}
        </p>
    </div>
    <p>
        Functions <strong>return</strong> a value:
    </p>
    <div class="codeBlock">
        <p class="codeSnippet">
            function multiply( x, y ) {'{'}
            <br />&emsp;return x * y;
            <br />{'}'}
        </p>
    </div>
    <p>
        Functions can also take no arguments:
    </p>
    <div class="codeBlock">
        <p class="codeSnippet">
            function sayHello() {'{'}
            <br />&emsp;console.log("hello");
            <br />{'}'}
        </p>
    </div>
    <p>
        These are simple, but functions can become very complicated,
        <br />so it is good to try to break things up into multiple functions.
    </p>
    {/* <!-- P5 --> */}
    <div class="title">
        <h2>p5.js: a library</h2>
    </div>
    <p>
        p5 is a <strong>library</strong> made to try and make coding fun and easy for artists and visually minded people.
    </p>
    <p>
        The people behind p5 have tried to take care of as much of the things that can be tricky early on, so you can get on with making art whilst learning to code.
    </p>
    <p>
        A Library is a whole bunch of premade functions and objects that has been made to make your life quicker and easier.
    </p>
    <p>
        They mean that you don't have to keep reinventing the wheel, and luckily there are libraries for almost anything!
    </p>
    <div class="title">
        <h2>A p5 Sketch</h2>
    </div>
    <p>
        In p5, the drawings you can make are called <strong>sketches</strong>.
    </p>
    <p>
        Every p5 sketch has two essential functions.
        <br />You write these yourself and then the library looks for them in order to make the sketch run.
    </p>
    <p>The two functions must be named <strong>setup</strong> and <strong>draw</strong>.</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            function setup() {'{'}
            <br />
            <br />{'}'}
            <br />
            <br />function draw(){'{'}
            <br />
            <br />{'}'}
        </p>
    </div>
    <p>When the library finds either of these, they get called for you.</p>
    {/* <!-- REFERENCE --> */}
    <div class="title">
        <h2>
            The p5 Reference Page
        </h2>
    </div>
    <p>
        When learning to code, and once you've learnt to code, it's important to know how to find answers when you get stuck.
    </p>
    <div class="exercise">
        <a href="https://p5js.org/reference/">
            <button type="button">
            View
            </button>
        </a>
    </div>
    <div class="exercise">
        <a href="p5-reference.zip" download>
            <button type="button">
            Download
          </button>
        </a>
    </div>
    <p>
        Above is the documentation for p5.js<br />It tells you how to use functions and gives descriptions of each.
    </p>
    <div class="border">
        <ul>
            <h3 style={{fontSize: '20pt'}}>
                Here are some other useful links for Javascript<br />and for coding in general:
            </h3>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <li>MDN - Mozilla Develop Network Web Docs</li>
            </a>
            <a href="https://www.w3schools.com/js/default.asp">
                <li>w3School</li>
            </a>
            <a href="https://stackoverflow.com/">
                <li>Stack Overflow</li>
            <h3 style={{fontSize: '20pt'}}>Also,</h3>
                <li>
                    p5 Guide to Debugging
                </li>
            </a>
        </ul>
    </div>

    {/* <!-- EXERCISE --> */}
    <div class="title">
        <h2>Exercise:</h2>
    </div>
    <div class="exercise">
            <button type="button">
                DOWNLOAD EXERCISE
          </button>
    </div>
    <div></div>
    <div class="title">
        <h2>Objects</h2>
    </div>
    <p>
        Objects are a way of storing properties and functions together.
    </p>
    <p>
        This means that something that has a size and a colour and multiple parts, it can be held together in one place and used quickly.
    </p>
    <p>
        Object Notation consists of name:value pairs
    </p>
    <div class="codeBlock">
        <p class="codeSnippet">var obj = {'{'}<br />&emsp;firstName: value1,<br />&emsp;secondName: value2<br /> {'}'};</p>
    </div>
    <p>
        and the value can be accessed in two ways
    </p>
    <div class="codeBlock">
        <p class="keyItem">obj.firstName</p>
    </div>

    <p>or</p>
    <div class="codeBlock">
        <p class="keyItem">obj[firstName]</p>
    </div>
    <p>a stored function can also be accessed using the dot notation</p>
    <div class="codeBlock">
        <p class="codeSnippet">obj.nameOfFunction(arguments);</p>
    </div>
    <div></div>
    <p>Here is an example of a kettle object written in code:</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            var kettle = {'{'}
            <br />&emsp;waterLevel: 0.3,
            <br />&emsp;temp: 10,
            <br />&emsp;boil: function() {'{'}
            <br />&emsp;&emsp;while (this.temp &lt; 100) {'{'} <br />&emsp;&emsp;&emsp;this.temp++;
                <br />&emsp;&emsp;{'}'}
                <br />&emsp;&emsp;if ( this.temp >= 100) {'{'}
                <br />&emsp;&emsp;&emsp;return boiledWater;
                <br />&emsp;&emsp;{'}'}
                <br />&emsp;{'}'}
                <br />{'}'};
                <br />
                <br />kettle.waterLevel = 0.7;
                <br />kettle.boil();
        </p>
    </div>
    <div></div>
    {/* <!-- SCOPE --> */}
    <div class="title">
        <h2>Scope</h2>
    </div>
    <p>
        When making functions and objects, it is important to think about <strong>scope</strong>.
    </p>
    <p>
        If you use multiple versions of the same Object, each will have the same sets of variables with the same names.
    </p>
    <p>
        How do we get around this problem? By keeping in mind scope.
    </p>
    <div class="codeBlock">
        <p class="keyItem">{'{ }'}</p>
    </div>
    <p>Curly Brackets separate the different levels of scope.</p>
    <p></p>
    <p>The most basic principle is that there are two basic levels of scope:</p>
    <div class="codeBlock">
        <p class="keyItem">Global and Local</p>
    </div>
    <p><strong>Global variables</strong> can be accessed anywhere in your programme.
        <br />To do this, they must be declared outside all functions and Objects,
    </p>
    <p>ie: outside all sets of curly brackets.
    </p>
    <p>
        <strong>Local variables</strong> can only be used with the function or Object they are declared in.
    </p>
    <p>
        They will work inside the outermost set of curly brackets they were declared in.
    </p>
    <div class="codeBlock">
        <p class="keyItem">this.variable</p>
    </div>
    <p>
        The keyword <strong>this</strong> is used to make sure an object or function refers to only its own version of a local variable.
    </p>

    <p>to summerise:</p>
    <div class="codeBlock">
        <p class="codeSnippet">
            &lt;script&gt;
            <br />&emsp;var global;
            <br />
            <br />&emsp;function globalFunction(argument) {'{'}
            <br />&emsp;&emsp;<s>var argument;</s>
            <br />&emsp;&emsp;argument;
            <br />&emsp;&emsp;var functionLocal;
            <br />&emsp;&emsp;global = 10;
            <br />&emsp;{'}'}
            <br />
            <br />&emsp;var obj = {'{'}
            <br />&emsp;&emsp;objectLocal: "value",
            <br />&emsp;&emsp;function objectFunction() {'{'}
            <br />&emsp;&emsp;&emsp;var functionLocal;
            <br />&emsp;&emsp;&emsp;<s>objectLocal;</s>
            <br />&emsp;&emsp;&emsp;<s>functionLocal;</s>
            <br />&emsp;&emsp;&emsp;this.objectLocal;
            <br />&emsp;&emsp;&emsp;<s>this.functionLocal;</s>
            <br />&emsp;&emsp;&emsp;global;
            <br />&emsp;&emsp;{'}'}
            <br />&emsp;{'}'};
            <br />
            <br />
            <br />&emsp;<s>functionLocal;</s>
            <br />&emsp;<s>globalFucntion.functionLocal;</s>
            <br />&emsp;<s>objectLocal;</s>
            <br />&emsp;<s>this.objectLocal;</s>
            <br />&emsp;<s>objectFunction();</s>
            <br />&emsp;<s>this.objectFunction();</s>
            <br />&emsp;obj.objectLocal;
            <br />&emsp;obj.objectFunction();
            <br />&emsp;global;
            <br /> &lt;\script&gt;
        </p>
    </div>
    <div></div>
    {/* <!-- HMWK --> */}
    <div class="title">
        <h2>
            Homework:
        </h2>
    </div>
    <p class="keyItem">
        See if you can move your sketch into an object so we can reuse it next week.
    </p>
    <div class="border">
        <ul>
            <h3>Next Week:</h3>
            <li>Animation</li>
            <li>Loops</li>
            <li>Interaction</li>
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

export default Week1;
