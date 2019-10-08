import React from 'react';
import Head from "next/head";

const Showcase = () => (
  <>
<Head>
  <title>Ratio Club Showcase</title>
  {/* <meta charset="UTF-8">
  <meta name="description" content="Ratio Club was a free ten-week workshop program exploring computation as creative practice.">
  <meta name="author" content="HPM">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet"> */}
  <link href='/static/styles/rt_showcase.css' rel='stylesheet' />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.module.js"></script>
  <script src="./FirstPersonControls.js" />
</Head>
  <div id="three"></div>
  <div id="menu">
    <h2></h2>
    <h2></h2>
    <p></p>
    <a></a>
  </div>
  <script>
    var container = document.getElementById('three'); // get div
    var w = window.innerWidth * 0.65;                 // store div width
    var scene, camera, renderer, room, artworks, controls, clock;      // global variables
    var roomImg = 'maker.jpg';                                 // picsphere of room background

    window.addEventListener('click', changeMenu);    // listen for mouse interaction

    (function loadArtJSON() {                         // load json with artwork details
      var req = new XMLHttpRequest();
      req.open('GET', 'ratioclubartworks.json', true);
      req.send();
      req.addEventListener("load", function () {
        console.log(req.status);                      // to check if error
        artworks = JSON.parse(req.responseText);      // parse json file
        init();
        animate();
      });
    })();

    // document.addEventListener("ready", init);
    function init() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      camera = new THREE.PerspectiveCamera(75, w / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(w, window.innerHeight);
      container.appendChild(renderer.domElement);

      controls = new THREE.FirstPersonControls(camera);
      controls.activeLook = false;
      controls.mouseDragOn = true;
      controls.movementSpeed = 500.0;
      controls.lookSpeed = 0.1;
      clock = new THREE.Clock();
      // scene.add(controls);

      // controls = new THREE.PointerLockControls(camera);

      /* Code for background image ball */
      roomGeometry = new THREE.SphereGeometry(200, 200, 200);
      roomTexture = new THREE.TextureLoader().load(roomImg);
      roomMaterial = new THREE.MeshBasicMaterial({ map: roomTexture, color: 0xffffff, side: THREE.DoubleSide });
      room = new THREE.Mesh(roomGeometry, roomMaterial);
      room.scale.x = -1;
      scene.add(room);

      /* load artworks */
      for (var a in artworks) {
        loadArtwork(artworks[a]);
      }

      render();
    }

    function animate() {
      requestAnimationFrame(animate);
      controls.update(clock.getDelta());
      render();
    }

    function render() {
      renderer.render(scene, camera);
    }

    function loadArtwork(art) {
      var geometry = new THREE.PlaneGeometry(art.dimensions[0], art.dimensions[1]);
      var texture = new THREE.TextureLoader().load(art.textureURL, function () {
        texture.wrapS = THREE.ClampToEdgeWrapping; // set horizontal wrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping; // set vertical wrapping;
        texture.needsUpdate = true; // update texture (vital);
      });
      material = new THREE.MeshBasicMaterial({ map: texture, color: 0xFFFFFF });
      mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(art.position[0], art.position[1], art.position[2]);
      mesh.rotation.set(art.rotation[0] * Math.PI, art.rotation[1] * Math.PI, art.rotation[2] * Math.PI);
      mesh.scale.set(0.1, 0.1, 0.1);
      mesh.name = art.name;
      console.log(mesh.name);
      scene.add(mesh);
      console.log(scene.children);
    }

    function changeMenu(event) {
      var raycaster = new THREE.Raycaster();
      var mouse = new THREE.Vector2();
      mouse.x = (event.clientX / w) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      var intersects = raycaster.intersectObjects(scene.children);
      console.log(intersects[0].object.name);
      var menu = document.getElementById("menu");
      menu.children[0].innerText = artworks[intersects[0].object.name].name;
      menu.children[1].innerText = artworks[intersects[0].object.name].title;
      menu.children[2].innerText = artworks[intersects[0].object.name].description;
      menu.children[3].innerText = "[ link ]";
      menu.children[3].href = artworks[intersects[0].object.name].url;
    }

  </script>