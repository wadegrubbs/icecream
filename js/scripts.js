$(document).ready(function() {
//var flavors = ['coconut'];
var flavors = ['vanilla', 'coconut', 'strawberry', 'chocolate', 'pistachio'];

flavors.forEach(function(flavor) {
  $("ul").append("<li>" + flavor + "</li>");
});
    //alert("I can't get enough " + flavor + " ice cream!");


});
