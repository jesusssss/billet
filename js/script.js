//// Create a Paper.js Path to draw a line into it:
var path = new Path();

//// Give the stroke a color
path.strokeColor = 'black';
path.selected = true;
//var start = new Point(100, 100);

//// Move to start and draw a line from there
//path.moveTo(start);

//// Note the plus operator on Point objects.
//// PaperScript does that for us, and much more!
//path.lineTo(start + [ 100, -50 ]);

var canvas = $("#canvas");
var canvasY;
var canvasX;
var starting = false;
var points = 10;

function initializePath() {
    center = view.center;
    width = view.size.width;
    height = view.size.height / 2;

    path.fullySelected = true;
}

//canvas.on( "mousemove", function( event ) {
//    canvasX = event.pageX;
//    canvasY = event.pageY;
//    $(".current").html("X: " + canvasX + "<br/>Y: " + canvasY + "<hr/>");
//});

function onMouseMove(event) {
    mousePos = event.point;
    canvasX = mousePos.x;
    canvasY = mousePos.y;
    $(".current").html("X: " + mousePos.x + "<br/>Y: " + mousePos.y + "<hr/>");
}

var i = 0;
canvas.on("click", function() {
    i = i + 1;
    $(".last").append(i + " X: " + canvasX + "<br/>" + i + " Y:" + canvasY + "<br/><hr/>");
    if(starting == false) {
        var start = new Point(canvasX, canvasY);
        path.moveTo(start);
        starting = true;
        return;
    }
    var drawTo = new Point(canvasX, canvasY);
    path.lineTo(drawTo);
});

function onResize(event) {
    initializePath();
}

$(function() {

    $("#close").click(function() {

        path.closed = true;
        path.fillColor = 'black';

    });

    $("#getPath").click(function() {
        console.log(path.segments);

    });

});