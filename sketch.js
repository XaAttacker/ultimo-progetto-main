/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function preload() {
  treeModel = loadAsset("albero.glb");
}

function setup() {
  createCanvas3D(600, 400);
  background3D("#000000");
  var albero = beginGroup()
  diffuse("#4CAF50"); 
  sphere(0,1,0,1)
  diffuse("#795548")
  cylinder(0,0,0,0.5,1)
  endGroup();
  var lato = 20;
  var numeroAlberi = 50;
  for(var i=0;i<numeroAlberi;i++)
    {
      var x=random(-lato/2,lato/2);
      var y=0;
      var z=random(-lato/2,lato/2);
          clone(albero,x,y,z)
    }
}
    
function draw() {
  
}