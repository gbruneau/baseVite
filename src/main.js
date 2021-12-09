import './style.css'

function calcResult() {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var r = parseFloat(a) + parseFloat(b);
  document.getElementById("r").innerHTML =  r;
}


document.getElementById('a').addEventListener("change",function(){
  calcResult();
});

document.getElementById('b').addEventListener("change",function(){
  calcResult();
});

calcResult();