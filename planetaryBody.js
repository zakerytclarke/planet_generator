function PlanetaryObject(settings){
  noiseSeed(settings.seed);
  var sphere_geometry = new THREE.SphereGeometry(1, 128, 128);

  //Settings
  var noiseScale=settings.detail;//0-Infinity (Hight number = Higher Detail)
  var height=settings.height;//0-1

  //Set Geometry
  console.log(sphere_geometry.vertices[0]);
  for (var i=0;i<sphere_geometry.vertices.length;i++) {
    var p=sphere_geometry.vertices[i];
    //var normalVector=p.normal;
    var increasedHeight=noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale)

    p.x+=normalVector.x*increasedHeight;
    //p.y+=normalVector.y*increasedHeight;
    //p.z+=normalVector.z*increasedHeight;
    //p.y*=noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale);
    //p.z*=noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale);
    //p.normalize().multiplyScalar(1+height*noise(p.x*noiseScale,p.y*noiseScale,p.z*noiseScale));
  }

  for (var i=0;i<sphere_geometry.faces.length;i++) {
    var normalVector=sphere_geometry.faces[i].normal;
    var magnitudeNormalVector=Math.sqrt(Math.pow(normalVector.x,2)+Math.pow(normalVector.y,2)+Math.pow(normalVector.z,2));
    var scaledColor=magnitudeNormalVector*0.2;
    sphere_geometry.faces[i].color=new THREE.Color(0.5-normalVector.x*0.5,0.2851-normalVector.y*0.2851,0.1875-normalVector.z*0.1875);

  }


  var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });

  var sphere = new THREE.Mesh(sphere_geometry, material);

  //Normalize all the points to look more spherical
  for (var i=0;i<sphere.geometry.vertices.length;i++) {
    var p=sphere.geometry.vertices[i];
    //p.normalize();
  }



  //Set Colors
  /*
  for (var i=0;i<sphere.geometry.faces.length;i++) {
    sphere.geometry.faces[i].vertexColors[0]=0xff000;
    sphere.geometry.faces[i].vertexColors[1]=0xff000;
    sphere.geometry.faces[i].vertexColors[2]=0xff000;
  }
  */


  sphere.geometry.computeVertexNormals();
  sphere.geometry.normalsNeedUpdate = true;
  sphere.geometry.verticesNeedUpdate = true;

  return sphere;
}





function Moon(){

}



function Planet(){

}




function Sun(){

}
