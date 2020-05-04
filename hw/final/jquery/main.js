$(document).ready(function(){
console.log ("page loaded");

$("#title").mouseover(function(){
  //change text color to orange
  $("#title").css("color","#EF946C");
});
$("#title").mouseup(function(){
$("#title").html("Mackenzie Ellen Roberts");
});

$("#button1").click(function(){
  //when you click the button show the list
  $(".blurb").show();
});
$("#button2").click(function(){
  //when you click the button hide the list
  $(".blurb").hide();
});

});
