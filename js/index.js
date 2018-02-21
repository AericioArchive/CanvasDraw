var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Button Choices

// Box-Object

function drawObject() {
  var getObjX = document.getElementById('inputObjX').value;
  var getObjY = document.getElementById('inputObjY').value;
  var getObjH = document.getElementById('inputObjH').value;
  var getObjW = document.getElementById('inputObjW').value;  
  ctx.strokeRect(getObjX, getObjY, getObjH, getObjW);
}

function drawCircleObject() {
  var getCObjX = document.getElementById('inputCObjX').value;
  var getCObjY = document.getElementById('inputCObjY').value;
  var getCObjR = document.getElementById('inputCObjR').value;
  var getCObjSA = document.getElementById('inputCObjSA').value;  
  var getCObjEA = document.getElementById('inputCObjEA').value;
  ctx.strokeRect(getCObjX, getCObjY, getCObjR, getCObjSA, getCObjEA);
}

// Canvas Reset

function clearCanvas() {
  var print;
  if (confirm('Are you sure you want to clear your canvas?')) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    print = 'Canvas cleared by user.';
  } else {
    print = 'Canvas clear canceled by user.';
  }
  document.getElementById('functionOutput').innerHTML = print;
}