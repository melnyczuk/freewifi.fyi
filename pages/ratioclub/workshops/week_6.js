import React from 'react';
import Head from 'next/head';

import './rt_workshops.css';

const Week6 = () => (
  <>
    <Head>
      <title>RATIO CLUB WEEK 6</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js"></script>
    </Head>
  <div class="title">
    <h1>WELCOME TO RATIO CLUB</h1>
  </div>
  <div class="title" id="subtitle">
    <h2>Week 6
      <h3>3D</h3>
    </h2>
  </div>
  <div class="border">
    <ul>
      <h3>Key Topics:</h3>
      <li>Three.js</li>
      <li>3D modelling</li>
    </ul>
  </div>

  <div class="title">
    <h2>Three.js</h2>
  </div>
  <p>Three.js is a javascript library designed to build interactive 3D scenes directly inside the browser. Everything is rendered
    on the
    <strong>client side</strong>. It allows us to make really complicated, fully interactive 3D animations that load on the audiences'
    computer almost instantly.</p>
  <p>Like P5, everything is drawn inside a canvas element that Three creates for you.</p>
  <p>Also like P5 we do all our coding in two functions: </p>
  <div class="codeBlock">
    <p class="keyItem">init()
      <br />animate()</p>
  </div>
  <p>However, unlike P5 we must remember to call both of these ourselves to run our animation.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      init();
      <br />animate();
      <br />
      <br />function init() {'{'}
      <br />&emsp;&emsp;
      <span class="codeComment">// Our setup code goes here</span>
      <br />{'}'}
      <br />
      <br />function animate() {'{'}
      <br />&emsp;&emsp;requestAnimationFrame(animate);
      <br />&emsp;&emsp;
      <span class="codeComment">// Our animation code goes here.</span>
      <br />&emsp;&emsp;renderer.render(scene, camera);
      <br />{'}'}
    </p>
  </div>
  <p>The mechanics of Three.js has a distinct structure that we have to build up with our code. At first it may seem complicated
    but it makes a lot of sense and is the way most 3D graphics are made.</p>
  <img width="100%" src="/static/ratioclub/workshops/node-map.png" />
  <div></div>
  <div class="title">
    <h2>Camera, Scene & Renderer</h2>
  </div>
  <p>To draw anything in Three.js you need to use 3 types of object: a camera, a scene and a renderer.</p>
  <p>The
    <strong>renderer</strong> translates all your beautiful code into what you see,
    <br />using
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL">WebGL (Web Graphics Language)</a>
  </p>
  <p>You set the size of the canvas element using
    <strong>renderer.setSize( width, height );</strong>
  </p>
  <div class="codeBlock">
    <p class="codeSnippet">
      var renderer = new THREE.WebGLRenderer();
      <br /> renderer.setSize( window.innerWidth, window.innerHeight );
      <br /> document.body.appendChild( renderer.domElement );
    </p>
  </div>
  <p>The
    <strong>camera</strong> object determines what will be shown on screen.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      var camera = new THREE.PerspectiveCamera(
      <br />&emsp;&emsp;75,&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span class="codeComment">//
        <strong>FOV</strong> (Field of View in deg)</span>
      <br />&emsp;&emsp;width / height,
      <span class="codeComment">//
        <strong>Aspect-Ratio</strong>
      </span>
      <br />&emsp;&emsp;0.1,&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span class="codeComment">//
        <strong>Near Frustum</strong> (close limit)</span>
      <br />&emsp;&emsp;1000&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span class="codeComment">//
        <strong>Far Frustum</strong> (far limit)</span>
      <br />&emsp;);
    </p>
  </div>
  <p>By default, the camera is placed in the center of our 3D world (0,0,0) so we must move back along the Z axis:</p>
  <div class="codeBlock">
    <p class="codeSnippet">&emsp;&emsp;camera.position.z = 5;</p>
  </div>
  <p>The
    <strong>scene</strong> is the object where the fun happens. This is the object to which we
    <strong>add</strong> all the shapes we want to see.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      var scene = new THREE.Scene();
    </p>
  </div>
  <p>Finally, we must use the Renderer to
    <strong>render</strong> the scene, using the camera.</p>
  <div class="codeBlock">
    <p class="codeSnippet">renderer.render( scene, camera );</p>
  </div>
  <div></div>
  <div class="title">
    <h2>Mesh: Geometry & Material</h2>
  </div>
  <p>In 3D computer graphics, all shapes, no matter how intricate, can be made of a
    <strong>mesh</strong> of triangles.</p>
  <div class="codeBlock">
    <p class="keyItem">Triangles are the fabric of the universe.</p>
  </div>
  <p>In Three.js we use a
    <strong>Mesh Object</strong> for every shape we want to draw. Each Mesh is made of two parts: a
    <strong>Geometry</strong> and a
    <strong>Material</strong>
  </p>
  <p>The
    <strong>Geometry</strong>
    holds all the vectors and all the geometric arrangement of our shape.</p>
  <p>We can build our own shape by
    <strong>pushing</strong> vectors to our Geometry. These vectors are special arrays that contain the
    <strong>vertices</strong> of our shape. The space between each vertex of our shape are the
    <strong>faces</strong> of our shape:
  </p>
  <div class="codeBlock">
    <p class="codeSnippet">
      var geometry = new THREE.Geometry();
      <br />
      <br /> geometry.vertices.push( new THREE.Vector3( 10, 0, 0 ) );
      <br /> geometry.vertices.push( new THREE.Vector3( 0, 10, 0 ) );
      <br /> geometry.vertices.push( new THREE.Vector3( 0, 0, 10 ) );
      <br /> geometry.vertices.push( new THREE.Vector3( 10, 0, 0 ) );
    </p>
  </div>
  <p>There are also a whole host of premade Geometry objects that will do the maths of drawing a Cube, Sphere, Cylinder or Torus
    (Donut/Mug)
  </p>
  <p>If the Geometry is the skeleton of our shape, the
    <strong>Material</strong> object is the skin we wrap around it.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      var material = new THREE.MeshBasicMaterial();
      <br />
      <br />material.color = new THREE.Color( 0x00FF00 );
      <br />material.color = new THREE.Color( "#00FF00" );
      <br />material.color = new THREE.Color( "rgb(255, 0, 125)" );
      <br />material.color = new THREE.Color( "hsl(5, 100%, 50%)" );
      <br />material.color = new THREE.Color( 1.0, 0.8, 0.0 );
    </p>
  </div>
  <p>
    <strong>Materials</strong> come in a number of types each with different properties.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      THREE.MeshBasicMaterial();
      <span class="codeComment">// uniform color/shading</span>
      <br />THREE.MeshLambertMaterial();
      <span class="codeComment">// Matt finish</span>
      <br />THREE.MeshPhongMaterial();
      <span class="codeComment">// Glossy finish</span>
      <br />THREE.MeshNormalMaterial();
      <span class="codeComment">// multicolour (RGB)</span>
    </p>
  </div>
  <p>
    Each of these control how
    <strong>light</strong> bounces off the surface of our shapes. For Lambert and Phong materials to be visible,
    <a href="https://threejs.org/docs/index.html#api/lights/Light">you must add your own light</a>.
  </p>
  <img src="/static/ratioclub/workshops/materials.png" />
  <p>The Geometry and Material are added to the Mesh Object, and the Mesh is added to the Scene.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      var mesh = new THREE.Mesh( geometry, material );
      <br />scene.add( mesh );
    </p>
  </div>
  <div>
  </div>
  <div class="title">
    <h2>Textures and UV coordinates</h2>
  </div>
  <p>The Material Object also controls how colours blend on different parts of our shape, and how
    <strong>textures</strong> are
    <strong>mapped</strong> and stetched over the surface of our shape.</p>
  <p>
    <strong>Textures</strong> are patterns or images that are imported and mapped around the shapes we want to draw.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      var texture = new THREE.TextureLoader();
    </p>
  </div>
  <p>Textures must be loaded using the
    <strong>load</strong> function of the texture object.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      texture.load( "textures/water.jpg" );
    </p>
  </div>
  <p>The texture is added to the Material object using the key term
    <strong>map</strong>, and by default the texture will be mapped onto every triangle in the Geometry.
  </p>
  <div class="codeBlock">
    <p class="codeSnippet">
      material.map = texture;
    </p>
  </div>
  <img src="/static/ratioclub/workshops/TextureBasics-3.jpg" />
  <p>However, this can be changed by setting the
    <strong>wrapS</strong> and
    <strong>wrapT</strong> attributes of the texture object.</p>
  <div class="codeBlock">
    <p class="codeSnippet">
      tex.wrapS = THREE.ClampToEdgeWrapping;
      <br />tex.wrapT = THREE.ClampToEdgeWrapping;
    </p>
  </div>
  <img src="/static/ratioclub/workshops/wrap.png" />
  <p>What is happening here is
    <strong>UV mapping</strong>.</p>
  <p>
    <strong>U</strong> is the horizontal coordinate using for texture mapping, and
    <strong>V</strong> is the vertical coordinate.</p>
  <div></div>
  <img src="/static/ratioclub/workshops/tex.png" />
  <img src="/static/ratioclub/workshops/ture.png" />
  <p>"The UV mapping process involves assigning pixels in the image to surface mappings on the polygon, usually done by "programmatically"
    copying a triangular piece of the image map and pasting it onto a triangle on the object."
    <a href="https://en.wikipedia.org/wiki/UV_mapping">Wikipedia</a>
  </p>
  <p>Essentially what's happening here is the
    <strong>UV coordinates</strong> are being matched with the vertices of the Geometry. Luckily, Three.js will often be able to
    calculate the UV mapping for us,
    <a href="https://threejs.org/examples/misc_uv_tests.html">based on proportions</a>.</p>

  <div class="title">
    <h2>Transformations</h2>
  </div>
  <p>We can move all our shapes around by performing
    <strong>transformations</strong> on the
    <strong>Mesh</strong>.</p>
  <div class="codeBlock">
    <p class="keyItem">Translation</p>
    <p class="codeSnippet">
      mesh.position.x = 100;
      <span class="codeComment">// Move 100 pixels right</span>
    </p>
    <p class="codeSnippet">mesh.position.z = -250;
      <span class="codeComment">// Move 250 pixels away</span>
    </p>
    <p class="codeSnippet">mesh.position.y += 25;
      <span class="codeComment">// Move up 25 pixels every frame</span>
    </p>
    <p class="codeSnippet">mesh.position.set( 10, 20, 5 );
      <span class="codeComment">// Move on all axes at the same time.</span>
    </p>
  </div>
  <div></div>
  <div class="codeBlock">
    <p class="keyItem">Scale</p>
    <p class="codeSnippet">mesh.scale.set( 2, 2, 2 );
      <span class="codeComment">// Double in size uniformly</span>
    </p>
    <p class="codeSnippet">mesh.scale.set( 0.75, 0.75, 0.75 );
      <span class="codeComment">// Reduce size by a quarter</span>
    </p>
    <p class="codeSnippet">mesh.scale.set( 0.5, 6.0, 1.0 );
      <br />
      <span class="codeComment">// Make half as wide along the X axis, six times taller on the Y axis, an keep the Z axis depth the same</span>
    </p>
  </div>
  <div>
  </div>
  <div class="codeBlock">
    <p class="keyItem">Rotation</p>
    <p class="codeSnippet">mesh.rotation.x = Math.PI * 4 / 3;
      <br />
      <span class="codeComment">// Rotate by four thirds PI Radians (120&#176;) around the X axis</span>
    </p>
    <p class="codeSnippet">mesh.rotation.y = 0.5;
      <br />
      <span class="codeComment">// Rotate by Half PI Radians (90&#176;) around the Y axis</span>
    </p>
    <p class="codeSnippet">mesh.rotation.z = THREE.Math.degToRad(45);
      <br />
      <span class="codeComment">// Rotate by Quarter PI Radians (45&#176;) around the Z axis</span>
    </p>
  </div>
  <p>Rotation in Three.js is measured in <strong>Radians</strong> which are all fractions of <strong>Pi</strong>.</p>
  <p>The function
    <strong>THREE.Math.degToRad()</strong> will convert Degrees to Radians.</p>
  <img src="https://davidscottlyons.com/threejs/presentations/frontporch14/images/unit-circle-radians.png" />
  <p>( <span style={{color: 'red'}}>Radians in red</span> )</p>
  <div class="title">
    <h2>Recap</h2>
  </div>
  <p>So to recap all that:</p>
  <img width="100%" src="/static/ratioclub/workshops/node-map.png" />
  <div class="codeBlock">
    <p class="codeSnippet" style={{fontSize: '16pt'}}>
      var camera, scene, renderer, mesh;
      <br />
      <br />init();
      <br />animate();
      <br />
      <br />function init() {'{'}
      <br />&emsp;&emsp;scene = new THREE.Scene();
      <br />
      <br />&emsp;&emsp;camera = new THREE.PerspectiveCamera(
      <br />&emsp;&emsp;&emsp;&emsp;75,
      <br />&emsp;&emsp;&emsp;&emsp;window.innerWidth/window.innerHeight,
      <br />&emsp;&emsp;&emsp;&emsp;0.1,
      <br />&emsp;&emsp;&emsp;&emsp;1000 );
      <br />&emsp;&emsp;camera.position.z = 5;
      <br />
      <br />&emsp;&emsp;renderer = new THREE.WebGLRenderer();
      <br />&emsp;&emsp;document.body.appendChild( renderer.domElement );
      <br />
      <br />&emsp;&emsp;var geometry = new THREE.SphereGeometry( 5, 32, 32 );
      <br />
      <br />&emsp;&emsp;var texture = new THREE.TextureLoader().load("img.jpg");
      <br />
      <br />&emsp;&emsp;var material = new THREE.MeshBasicMaterial();
      <br />&emsp;&emsp;material.map = texture;
      <br />
      <br />&emsp;&emsp;mesh = new THREE.Mesh( geometry, material );
      <br />
      <br />&emsp;&emsp;scene.add( mesh );
      <br />
      <br />&emsp;&emsp;renderer.render( scene, camera );
      <br />{'}'}
      <br />
      <br />function animate() {'{'}
      <br />&emsp;&emsp;requestAnimationFrame(animate);
      <br />
      <br />&emsp;&emsp;mesh.rotation.y += Math.PI * 0.1;
      <br />
      <br />&emsp;&emsp;renderer.render(scene, camera);
      <br />{'}'}
    </p>
  </div>
  <p>PHEEEEEEW!</p>
  <p>Much credit due to
    <a href="https://davidscottlyons.com/threejs/presentations/frontporch14/#slide-0">David Scott Lyons</a>
  </p>

  <div class="title">
    <h2>EXERCISE</h2>
  </div>
  <p>Let's get making some 3D fun.</p>

  <div class="codeBlock">
    <p class="keyItem">
      <a href="https://threejs.org/docs/">
        <strong>Three.js Documentation</strong>
      </a>
    </p>
  </div>
  <p>I've put together some bootstrap code. Read the Three.js docs and have a go at drawing some geometries and materials, adding
    them to meshes and then showing them in your scene!</p>
  <div class="exercise">
    <a href="three.html" download>
      <button type="button">
        TAKE IT UP TO ANOTHER DIMENSION
      </button>
    </a>
  </div>
  <div class="title">
    <h2>Homework</h2>
  </div>
  <p>This week I want you to plan the steps you think you need to take to make your project a reality.</p>
  <p>Next week I'll help everyone with their step-by-step plan to fill in what some of the steps might be, and to figure out
    what libraries/modules/technologies you may need to look at.</p>
  <div class="border">
    <ul>
      <h3>Next Week:</h3>
      <li>Git & Github</li>
      <li>Projects</li>
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

export default Week6;
