var textCanvas = document.getElementById("textCanvas"),
    text = document.getElementById("text"),
    ctx = textCanvas.getContext("2d");

ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
ctx.font = "bold 80px Helvetica";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "#000";
ctx.fillText("whatever", ctx.canvas.width / 2, ctx.canvas.height / 2);

Glsl({  
    canvas: document.getElementById("viewport"),
    fragment: document.getElementById("fragment").textContent,
    variables: {  
        text: textCanvas  
    }
}).start();
