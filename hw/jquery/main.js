$ (document).ready(function(){
console.log ("page loaded");

$ ("#title").click(function(){
$("#title"). html ("Italy in the heat of the summer");
});
$("#venice").mouseover(function(){
  //change background color to pale aqua

  $("body").css("background-color","#BFD7EA");
});
});
