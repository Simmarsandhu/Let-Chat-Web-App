var firebaseConfig = {
    apiKey: "AIzaSyAS0Z-hyAka4UUEYvP7oqrFy0k22AmqwTY",
    authDomain: "chit-chat-45715.firebaseapp.com",
    databaseURL: "https://chit-chat-45715-default-rtdb.firebaseio.com",
    projectId: "chit-chat-45715",
    storageBucket: "chit-chat-45715.appspot.com",
    messagingSenderId: "988060589267",
    appId: "1:988060589267:web:87f8f42a99ff8f10480826"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  

login_name=localStorage.getItem("Login");
console.log(login_name);

document.getElementById("welcome").innerHTML="WELCOME!"+ login_name;
console.log(login_name);


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
function add_room(){
    room=document.getElementById("room_name").value;
    localStorage.setItem("room_name" ,room);
    firebase.database().ref("/").child(room).update({purpose:"add room name"});

    window.location ="kwitter_room.html";
}
function logOut(){
    window.location="index.html";
}


 

