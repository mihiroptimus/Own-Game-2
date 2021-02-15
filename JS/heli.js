class Heli {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.img1 = loadImage("images/helicopter1.png")
      this.img2 = loadImage("images/helicopter2.png");
      this.rand = Math.round(random(1,2));

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var rand = Math.round(random(1,2));
      imageMode(CENTER);
      if(this.rand === 1){
        image(this.img1, pos.x, pos.y);
      }
      else{
        image(this.img2, pos.x, pos.y);
      }

    }
  };
  function drawHeli(){
    helicopters.forEach(element => {
        element.display();
    });
}
  function createHeli(x,y,width,height){
      var heli = new Heli(x,y,width,height);
      helicopters.push(heli);
      return heli;
  }