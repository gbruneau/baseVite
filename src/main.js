import $ from "jquery";
import './style.css';
import '../node_modules/jquery-ui-bundle/jquery-ui.min.css'

import APPbuild from "./version.json";

(async () => {
    window.jQuery=$;
    await import("jquery-ui-bundle");
 
   /* Main code start here */  
   
    $( "#tabsContainer" ).tabs();  
    $(".toolbar button").button();
   
    
    $("#btSave").on('click',function(){
      alert("Save me");
    });


})();
