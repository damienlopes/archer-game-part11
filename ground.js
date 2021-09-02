class Floor {
    constructor(x,y,w,h){
        var gp = { isStatic: true };
        this.ground = Bodies.rectangle(x, y, w, h, gp);
        World.add(world, this.ground);
       this.w = w
       this.h = h
    }
    display() {
        rectMode (CENTER)
        rect(this.ground.position.x, this.ground.position.y, this.w, this.h);     
    }
    }