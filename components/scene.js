import * as THREE from 'three';
import FPC from './FirstPersonControls';

const artworks = require('./ratioclubartworks.json');

const loadArtwork = ({ dimensions, textureURL, name, rotation, position }, i) => {
  const geometry = new THREE.PlaneGeometry(...dimensions);

  const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(`/static/ratioclub/showcase/${textureURL}`),
    color: 0xffffff,
    side: THREE.DoubleSide
  });

  let mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation.map(ang => ang * Math.PI));
  mesh.scale.set(0.1, 0.1, 0.1);
  mesh.name = name;
  return mesh;
}

const getRoom = (img) => {
  const roomGeometry = new THREE.SphereGeometry(200, 200, 200);

  const roomMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(img),
    color: 0xffffff,
    side: THREE.DoubleSide
  });

  let room = new THREE.Mesh(roomGeometry, roomMaterial);
  room.scale.x = -1;
  return room;
}

const getControls = (camera) => {
  if (!camera) return;
  let controls = new FPC(camera);
  controls.activeLook = false;
  controls.mouseDragOn = true;
  controls.movementSpeed = 300.0;
  controls.lookSpeed = 0.07;
  return controls;
}

const runThreeScene = (container, menu) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }

  const roomSphereBackgroundImg = '/static/ratioclub/showcase/maker.jpg';
  const width = window.innerWidth * 0.65;
  const height = window.innerHeight;
  
  /* listen for mouse interaction */
  window.addEventListener('click', updateMenu);
  
  let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  let scene = new THREE.Scene();
  let renderer = new THREE.WebGLRenderer();
  let clock = new THREE.Clock();
  
  // camera.rotate.y = 90 * Math.PI / 180;
  
  scene.background = new THREE.Color(0xffffff);

  renderer.setSize(width, height);
  container.current.appendChild(renderer.domElement);

  let controls = getControls(camera);

  const room = getRoom(roomSphereBackgroundImg);
  scene.add(room);

  artworks.map(loadArtwork).forEach(mesh => scene.add(mesh));

  (function animate() {
    requestAnimationFrame(animate);
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
  })();

  function updateMenu(event) {
    const mouse = new THREE.Vector2(
      (event.clientX / width) * 2 - 1,
      (event.clientY / height) * -2 + 1,
    );

    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const [{ object: { name: intersect } }] = raycaster
      .intersectObjects(scene.children);

    const works = artworks
      .filter(({ name }) => name === intersect);

    if (!works.length) return;

    const [{ name, title, description, url }] = works;

    [name, title, description, '[ link ]']
      .forEach((item, i) => menu.current.children[i].innerText = item);

    menu.current.children[3].href = url;
  }
}

export default runThreeScene;
