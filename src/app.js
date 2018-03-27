import "./style.scss";

console.log("Hello Movies");
var row = document.getElementById("row");

for (let i = 0; i < 4; i++) {
  var divouter = document.createElement("div");
  console.log(divouter);
  //<div outer with class="col-md-4">
  divouter.setAttribute("class", "col-md-4");
  var divinner = document.createElement("div");
  console.log(divinner);
  divinner.setAttribute("class", "box-bg"); // added class attribute to each box
  row.appendChild(divouter);
  divouter.appendChild(divinner);

  //h3 item for box name
  var h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode("Box " + (i + 1)));
  divinner.appendChild(h3);

  //create the first paragraph element
  var p1 = document.createElement("P");
  p1.appendChild(document.createTextNode("Lorem ipsum color ..."));
  divinner.appendChild(p1);

  //create the second paragraph element
  var p2 = document.createElement("p");
  p2.appendChild(document.createTextNode("Ut enim ad.."));
  divinner.appendChild(p2);
}

$(document).ready(function() {
  //same as window onload
  console.log("Princess Town Movies!!!");
});
