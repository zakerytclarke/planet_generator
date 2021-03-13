function PlanetaryObject(settings){
  noiseSeed(settings.seed);

  //Settings
  var noiseScale=settings.detail;//0-Infinity (Hight number = Higher Detail)
  var height=settings.height;//0-1
  var size=settings.size;
  console.log(settings);

  var sphere_geometry = new THREE.SphereGeometry(size, 128, 128);

  //Set Geometry
  for (var i=0;i<sphere_geometry.vertices.length;i++) {
    var p=sphere_geometry.vertices[i];
    var increasedHeight=noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale);
    var increasedHeight1=noise(p.x*noiseScale+10,p.y*noiseScale+10,p.z*noiseScale+10);
    var increasedHeight2=noise(p.x*noiseScale+20,p.y*noiseScale+20,p.z*noiseScale+20);

    //p.x+=increasedHeight;
    //p.y+=increasedHeight;
    //p.z+=increasedHeight;
    //p.y+=normalVector.y*increasedHeight;
    //p.z+=normalVector.z*increasedHeight;
    //p.y*=noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale);
    //p.z*=noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale);

    p.x*=1+height*increasedHeight;
    p.y*=1+height*increasedHeight1;
    p.z*=1+height*increasedHeight2;

    //Generate Craters
    // if(noise(p.x)>0.45){
    //   p.x-=p.x*0.3;
    //   p.y-=p.y*0.3;
    //   p.z-=p.z*0.3;
    // }


    var vectorMagnitude=Math.sqrt(Math.pow(p.x,2)+Math.pow(p.y,2)+Math.pow(p.z,2));

    //p.x/=vectorMagnitude;
    //p.y/=vectorMagnitude;
    //p.z/=vectorMagnitude;

    // /p.normalize();
    //p.normalize().multiplyScalar(height*noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale));
  }


  for (var i=0;i<sphere_geometry.faces.length;i++) {
    var normalVector=sphere_geometry.faces[i].normal;
    var magnitudeNormalVector=Math.sqrt(Math.pow(normalVector.x,2)+Math.pow(normalVector.y,2)+Math.pow(normalVector.z,2));
    var scaledColor=magnitudeNormalVector*0.2;
    sphere_geometry.faces[i].color=new THREE.Color(0.5-normalVector.x*0.5,0.2851-normalVector.y*0.2851,0.1875-normalVector.z*0.1875);

  }


  //var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
  var material = new THREE.MeshNormalMaterial();
  var sphere = new THREE.Mesh(sphere_geometry, material);

  sphere.geometry.computeVertexNormals();
  sphere.geometry.normalsNeedUpdate = true;
  sphere.geometry.verticesNeedUpdate = true;


/*
  var sphereBSP = new ThreeBSP( sphere)

  console.log(sphereBSP);

  var cubeGeometry = new THREE.CubeGeometry( 100, 100, 100, 1, 1, 1 );
  var cubeMesh = new THREE.Mesh( cubeGeometry );
  var cubeBSP = new ThreeBSP( cubeMesh );

  var newBSP = cubeBSP.subtract( sphereBSP );
  var planet = newBSP.toMesh(new THREE.MeshNormalMaterial());
*/




  //Set Colors
  /*
  for (var i=0;i<sphere.geometry.faces.length;i++) {
  sphere.geometry.faces[i].vertexColors[0]=0xff000;
  sphere.geometry.faces[i].vertexColors[1]=0xff000;
  sphere.geometry.faces[i].vertexColors[2]=0xff000;
}
*/


// sphere.geometry.computeVertexNormals();
// sphere.geometry.normalsNeedUpdate = true;
// sphere.geometry.verticesNeedUpdate = true;

  return sphere;
}





function Moon(){

}



function Planet(){

}




function Sun(){

}
