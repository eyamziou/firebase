var change=document.getElementById("text");
function changeBold(){
    if (change.style.fontWeight=="normal")
    {change.style.fontWeight="Bold";}
    else change.style.fontWeight="normal";

}
function changeItalic(){
    if (change.style.fontStyle=="normal")
    {change.style.fontStyle="Italic";}
    else change.style.fontStyle="normal";

}
function changeUnderline(){
if (change.style.textDecoration=="")
{change.style.textDecoration="Underline";}
else change.style.textDecoration="";
}
//src="/__/firebase/init.js"

function changeFont(font){
    document.getElementById("text").style.fontFamily = font.value;
}
function changeSize(fontSize){
    document.getElementById("text").style.fontSize = fontSize.value;
}



function save(){
    var name = document.getElementById('name').value;
    var track = document.getElementById('track').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('number').value;
       
    var data = {
     name: name,
     track:track,
     email:email,
     phone:phone
    }
   
// The key of a root reference is null
var rootRef = firebase.database().ref();
var key = rootRef.key;  // key === null
// Write the new user
var updates = {};
updates['/users/' + key] = data;
return firebase.database().ref().update(updates);
}
 