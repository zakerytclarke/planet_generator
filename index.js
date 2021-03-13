
var renderer = new THREE.WebGLRenderer({ canvas : document.getElementById('canvas'), antialias:true});
renderer.setClearColor("black");
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var planet;
var scene;
var camera;

function setup(){
  console.log("Loading Universe Simulator");
  noiseSeed(0);
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;

  var ambient = new THREE.AmbientLight( 0xffffff );
  scene.add( ambient );

  pointLight = new THREE.PointLight( 0xffffff, 2 );
  scene.add( pointLight );

  var controls = new THREE.OrbitControls( camera,document.getElementById("canvas"));
  planet=new PlanetaryObject(settings);
  scene.add(planet);
  function animate() {
    update();
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
  renderPlanet();

}

function renderPlanet(){
  var settings=getSettings();
  settings.seed=document.getElementById("seed").value;
  settings.height=document.getElementById("height").value;
  scene.remove(planet);
  var tplanet=new PlanetaryObject(settings);
  planet=tplanet;
  scene.add(tplanet);
}


function getSettings(){
  var settings={};
  var settingsDOM=document.getElementById("settings").getElementsByTagName("input");
  for(var i=0;i<settingsDOM.length;i++){
    settings[settingsDOM[i].id]=settingsDOM[i].value;
  }
  return settings;
}


function update(){
  //planet.rotation.y-=0.002;
}
