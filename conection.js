class Conecter {
    constructor(p, b) {
      var conp = {
        pointA: p,
        bodyB: b,
        stiffness: 0.01,
        length: 150,
      };
      this.line = Constraint.create (conp)
      World.add (myWorld, this.line)
    }
    display() {
    var a = this.line.pointA
    var b = this.line.bodyB
    line (a.x, a.y, b.position.x, b.position.y)
    
    }
  }
  
  