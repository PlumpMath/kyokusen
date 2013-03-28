var canvas = document.getElementById('context')
var context = canvas.getContext('2d');
console.log('running with context', context);

context.beginPath();
context.arc(100, 100, 7, 0, 2 * Math.PI, false);
context.fillStyle = '#DE516B';
context.fill();
/*var canvas = document.getElementById('context');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();
*/
