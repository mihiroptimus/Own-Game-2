class Troop3{
    constructor(x,y,width,height,image) {
      
      var troop = createSprite(x, y, width, height);
      troop.addImage(image);
      //troop.scale = 0.3;
      troopGroup3.add(troop);
      troop.velocityY = 1; 
      troop.lifetime = windowHeight + 50;
    }
  };

  function createTroop3(x,y,width,height,image){
      var troop = new Troop(x,y,width,height,image);
      return troop;
  }