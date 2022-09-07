import $ from "jquery";
import './style.css'
import APPbuild from "./version.json";

function calcResult() {
  var a = $("#a").val();
  var b =  $("#b").val();
  var r = parseFloat(a) + parseFloat(b);
  $("#r").text(r);
}

$("#a,#b").on("change",function(){
  calcResult();
});


$("#buildNo").text(APPbuild);

calcResult();
