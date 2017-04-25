var canvas = document.createElement('canvas');
var width = 800;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

windows.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};

var step = function() {
    render();
    animate(step);
};

var render = function() {
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, width, height);
};
