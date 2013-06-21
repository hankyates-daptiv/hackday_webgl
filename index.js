var makeCanvas = function (txt) {
        var textCanvas = document.createElement('canvas'),
            ctx = textCanvas.getContext('2d');

        textCanvas.width = 1200;
        textCanvas.height = 600;

        ctx.font = 'bold 160px Helvetica';
        ctx.fillStyle = '#fff';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(txt, ctx.canvas.width/2, ctx.canvas.height/2);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.strokeText(txt, ctx.canvas.width/2, ctx.canvas.height/2);

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
        useSpecialText: false,
        useWaveEffect: false,
        bgMultiplier: 0.0
    },
    update: function (time, delta) {
        this.set("time", time);
    }
})

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

document.getElementById("waveModeButton")
.addEventListener("click", function () {
    glsl.variables.useWaveEffect = !glsl.variables.useWaveEffect;
    glsl.sync("useWaveEffect");
  }, false);

glsl.start();

$( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 20,
      value: 0,
      slide: function( event, ui ) {
        glsl.variables.bgMultiplier = $(this).slider('value')/10;
        glsl.sync("bgMultiplier");
      }
    });
