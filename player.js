
class Player {
    constructor(x,y,w,h){
        var gp = { isStatic: true };
        this.ground = Bodies.rectangle(x, y, w, h, gp);
        World.add(world, this.ground);
       this.w = w
       this.h = h
       this.player1 = loadImage("assets/player.png")
    }
    display() {
        imageMode (CENTER)
        image(this.player1,this.ground.position.x, this.ground.position.y, this.w, this.h);     
    }
    }