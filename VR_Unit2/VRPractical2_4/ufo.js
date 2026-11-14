class UFO{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1,5) / 100;   

    this.obj = document.createElement("a-entity");

    let top = document.createElement("a-sphere");
    top.setAttribute("position", {x:0, y:0.5, z:0});
    top.setAttribute("radius", 0.8);
    top.setAttribute("color", "green");
    this.obj.append(top);

    let bod = document.createElement("a-sphere");
    bod.setAttribute("radius", 2);
    bod.setAttribute("scale", {x:1, y:0.3, z:1});
    bod.setAttribute("color", "gray");
    this.obj.append(bod);


    
    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
  }

  invade(){
    if(this.y > 0.6){
      this.y -= this.dy;
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
  }
}