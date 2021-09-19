class Divisions {
    constructor(x, y, w, h, angle,this.color=color(random(0, 255), random(0, 255), random(0,255))) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

        display(){
        
        }