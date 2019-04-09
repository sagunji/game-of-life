// Box width
var bw = 500;
// Box height
var bh = 500;
// Padding
// var p = 1;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
function drawBoard() {
    for (var x = 0; x < bw; x += 50) {
        for (var y = 0; y < bh; y += 50) {
            context.strokeRect(x, y, 50, 50);
        }
    }
}

drawBoard();