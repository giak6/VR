class Rocket{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = rnd(1,5) / 100;   

    this.obj = document.createElement("a-entity");

    let bod = document.createElement("a-cylinder");
    bod.setAttribute("radius", 0.5);
    bod.setAttribute("height", 2);
    bod.setAttribute("color", "black");
    this.obj.append(bod);

    let head = document.createElement("a-cone");
    head.setAttribute("position", {x:0, y:1.5, z:0});
    head.setAttribute("radius-bottom", 0.5);
    head.setAttribute("radius-top", 0);
    head.setAttribute("height", 1);
    head.setAttribute("color", "red");
    this.obj.append(head);

    let dot = document.createElement("a-sphere");
    dot.setAttribute("position", {x:0, y:0.4, z:0.4});
    dot.setAttribute("radius", 0.2);
    dot.setAttribute("color", "lightblue");
    this.obj.append(dot);




    let fire = document.createElement("a-cone");
    fire.setAttribute("position", {x:0, y:-1.5, z:0});
    fire.setAttribute("radius-bottom", 0);
    fire.setAttribute("radius-top", 0.4);
    fire.setAttribute("height", 3);
    fire.setAttribute("color", "orange");
    this.obj.append(fire);

    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
  }

  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
  }
}