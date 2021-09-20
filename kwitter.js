const firebaseConfig = {
    apiKey: "AIzaSyAS0Z-hyAka4UUEYvP7oqrFy0k22AmqwTY",
    authDomain: "chit-chat-45715.firebaseapp.com",
    databaseURL: "https://chit-chat-45715-default-rtdb.firebaseio.com",
    projectId: "chit-chat-45715",
    storageBucket: "chit-chat-45715.appspot.com",
    messagingSenderId: "988060589267",
    appId: "1:988060589267:web:87f8f42a99ff8f10480826"
  };



function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name" , username);

    window.location="kwitter_room.html";
}
