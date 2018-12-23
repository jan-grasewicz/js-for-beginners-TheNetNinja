function setUpEvents(){

var content= document.getElementById("content");
var button=document.getElementById("show-more");

button.onclick=function(){
    if(content.className=="open"){
        //shrink the box
        button.innerHTML="Show More";
        content.className="";
        
    }else{
        //expand the box
        content.className="open";
        button.innerHTML="Show Less";
    }
};
};
window.onload=function(){ //loads content of this function after loading the window
setUpEvents(); 
}