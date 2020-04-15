$ (document).ready(function(){
console.log ("page loaded");

$("#title").click(function(){
$("#title").html("Italy in the heat of the summer");

});
$("#test").mouseover(function(){
  //change background color to tuscany
  $("body").css("background-color","#BAA898");
});
$("#content").mouseleave(function(){
  //fadeIn h2
$("#content").hide();
});
});
