class Cloud {
    constructor(x,y,width,height) {
      var cloud = createSprite(x, y, width, height)
      cloud.addImage(cloudImage);
    }
  };

  function createCloud(x,y,width,height){
      var cloud = new Cloud(x,y,width,height);
      return cloud;
  }