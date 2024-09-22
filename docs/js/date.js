// Get current date - Javascript

window.onload = function date() {

  var n =  new Date();

  document.getElementById("js_day").innerHTML = n.getDate();
  document.getElementById("js_month").innerHTML = n.getMonth() + 1;
  document.getElementById("js_year").innerHTML = n.getFullYear();
}
