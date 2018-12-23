document.getElementsByClassName("content");
var myContentDivs = document.getElementsByClassName("content");
var myA = myContentDivs[1].getElementsByTagName("a");
myA[2].innerHTML="change";
document.getElementById("thelink").textContent="chchchchch";


var link = document.getElementById("linkid");
console.log(link.getAttribute("class"));

//link.setAttribute("class","pie");
//console.log(link.getAttribute("class"));
// =
link.className = "pie";
console.log(link.className);

link.setAttribute("alt","new attribute"); //completely new attribute
console.log(link.getAttribute("alt"));