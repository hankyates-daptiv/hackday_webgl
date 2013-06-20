function Circle(x, y, radius) {  
    this.center = { x: x, y: y };  
    this.radius = radius;  
    this.originalRadius = radius; // not visible by GLSL  
}  

Circle.prototype.update = function () {  
    this.radius = this.originalRadius * Math.sin(Date.now() / 100);
};

var c1 = new Circle(0.5, 0.5, 0.1);  

Glsl({  
    canvas: document.getElementById("viewport"),
    fragment: document.getElementById("fragment").textContent,
    variables: {  
        c1: c1  
    },  
    update: function (time, delta) {  
        c1.update();  
        this.sync("c1");  
    }  
}).start();
