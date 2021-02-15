class Troop{
    constructor(x,y,width,height,image) {
      
      var troop = createSprite(x, y, width, height);
      troop.addImage(image);
      troopGroup1.add(troop);
      troop.velocityY = 1;
      troop.lifetime = windowHeight + 50;
    }
  };

  function createTroop1(x,y,width,height,image){
      var troop = new Troop(x,y,width,height,image);
      return troop;
  }