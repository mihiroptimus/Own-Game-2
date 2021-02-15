class Troop2{
    constructor(x,y,width,height,image) {
      
      var troop = createSprite(x, y, width, height);
      troop.addImage(image);
      troopGroup2.add(troop);
      troop.velocityY = 1;
      troop.lifetime = windowHeight + 50; 
    }
  };

  function createTroop2(x,y,width,height,image){
      var troop = new Troop(x,y,width,height,image);
      return troop;
  }