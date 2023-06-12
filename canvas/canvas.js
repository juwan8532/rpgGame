var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d')

var mapArray = [

  [0,0,0,0,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,1,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,0,0,0],
];

var grass = new Image();
var sand = new Image();

grass.src='/assets/grass.png';
sand.src='/assets/sand.png';

var posX = 0
var posY = 0

for(i = 0; i < mapArray.length; i++){
    for(j = 0; j < mapArray[i].length; j++){

        if(mapArray[i][j] == 0){
            context.drawImage(grass, posX, posY, 32,32)
            console.log('grass at ' + mapArray[i][j])
        }
        if(mapArray[i][j] == 1){
            context.drawImage(sand, posX, posY, 32,32)
            console.log('sand at ' + mapArray[i][j])
        }
        posX+=32;

    }
    posX = 0;
    posY+=32;
}