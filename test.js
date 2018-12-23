var newLi=document.createElement("li");
var newA=document.createElement("a");
var list = document.getElementsByClassName("content")[1].getElementsByTagName("ul")[0];
list.appendChild(newLi);
newLi.appendChild(newA);
newA.innerHTML="four";
list.insertBefore(newLi, list.getElementsByTagName("li")[0])