var makeCanvas = function (txt) {
        var textCanvas = document.createElement('canvas'),
            ctx = textCanvas.getContext('2d');

        ctx.font = 'bold 40px Helvetica';
        ctx.fillStyle = '#000';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(txt, ctx.canvas.width/2, ctx.canvas.height/2);


        return textCanvas;
    },
    text = 'whatever',
    tmpTxt = new makeCanvas(text),
    textArr = [];

for (var i = 0; i < text.length; i++) {
    textArr[i] = new makeCanvas(text[i]);
}

var glsl = Glsl({  
    canvas: document.getElementById('viewport'),
    fragment: document.getElementById('fragment').textContent,
    variables: {  
        time: 0,
        text: tmpTxt,
        useSpecialText: false
    },
    update: function (time, delta) {
        this.set("time", time);
    }
})

function rerenderCanvas() {

}

 document.getElementById("textInput")
    .addEventListener("keyup", function () {
        var ctx = tmpTxt.getContext('2d');
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.value,ctx.canvas.width/2, ctx.canvas.height/2);
        glsl.sync("text");
      }, false);

document.getElementById("rainbowModeButton")
    .addEventListener("click", function () {
        glsl.variables.useSpecialText = !glsl.variables.useSpecialText;
        glsl.sync("useSpecialText");
      }, false);

glsl.start();
