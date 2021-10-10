
  

username=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="WELCOME!"+"  "+ username +" "+ ":)";


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='room_name1' id="+Room_names+"onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
//End code
});});}
getData();


function redirectToRoom(rooms){
    console.log("selected_room="+ rooms);
    localStorage.setItem("room_name", rooms);

    window.location="kwitter_page.html";
}
function addRoom(){
    room=document.getElementById("room_name").value;
    localStorage.setItem("room_name" ,room);
    firebase.database().ref("/").child(room).update({purpose:"add room name"});

    window.location ="kwitter_room.html";
}








































function logOut(){
    window.location="index.html";
}


 

