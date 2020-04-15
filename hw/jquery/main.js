$(document).ready(function(){
console.log ("page loaded");

$("#title").mouseup(function(){
$("#title").html("Italy in the heat of the summer");

});
$("#test").mouseover(function(){
  //change background color to tuscany
  $("body").css("background-color","#F7D488");
});
$("#button1").click(function(){
  //when you click the button show the list
  $("#list").show();
});
$("#button2").click(function(){
  //when you click the button hide the list
  $("#list").hide();
});
});
