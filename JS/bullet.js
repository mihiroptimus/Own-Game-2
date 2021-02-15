class Bullet {
    constructor(x, y, width, height) {
      var bullet = createSprite(x, y, width, height);
      bullet.addImage(bulletImg);
      bullet.scale = 0.02;
      bullet.velocityY = 5;
      bulletGroup.add(bullet);
      bullet.lifetime = windowHeight;
      }
    };

    function createBullet(x,y, width, height){
        var bullet = new Bullet(x,y,width,height);
        return bullet;
    }