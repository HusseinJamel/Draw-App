const canvas = document.getElementById('canvas');
const range = document.getElementById('range');
const color = document.getElementById('color');

const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight -300;

ctx.fillStyle = '#fff'
ctx.fillRect(0, 0, innerWidth -50, innerHeight -300)

let lineColor = '#000';

function pen(){
  lineColor = color.value;
}
function eraser(){
  lineColor = '#fff';
  
}
function incolor(){
  lineColor = color.value;
}
function clearCanvas(){
  ctx.clearRect(0,0,innerWidth-50,innerHeight-300)
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, innerWidth - 50, innerHeight - 300)
}

canvas.addEventListener('touchstart',()=>{
  isDrawing = true;
  let lineWIDTH = range.value;
  ctx.beginPath();
  ctx.lineWidth = lineWIDTH;
})

canvas.addEventListener('touchmove',e => {
  [...e.changedTouches].forEach(touch => {
    if(!isDrawing) return;
    ctx.lineTo(touch.pageX,touch.pageY);
    ctx.strokeStyle = lineColor;
    ctx.stroke()
    ctx.fillStyle = lineColor;
  })
})

canvas.addEventListener('touchend',()=>{
  isDrawing = false;
})

download = document.getElementById('download');
download.onclick = function() {
  download.href = canvas.toDataURL('image/jpeg');
}

