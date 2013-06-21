var makeCanvas = function (txt) {
        var textCanvas = document.createElement('canvas'),
            ctx = textCanvas.getContext('2d');

        ctx.font = 'bold 40px Helvetica';
        ctx.fillStyle = '#000';
        ctx.fillText(txt, 50, 100);

        return textCanvas;
    },
    text = 'whatever',
    tmpTxt = new makeCanvas(text),
    textArr = [];

for (var i = 0; i < text.length; i++) {
    textArr[i] = new makeCanvas(text[i]);
}

Glsl({  
    canvas: document.getElementById('viewport'),
    fragment: document.getElementById('fragment').textContent,
    variables: {  
        time: 0,
        text: tmpTxt
    },
    update: function (time, delta) {
        this.set("time", time);
    }
}).start();
