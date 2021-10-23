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
  

   user_name=localStorage.getItem("Login");
   room=localStorage.getItem("room_name");
    console.log(room);
    
    
    
function send(){
    msg=document.getElementById("msg").value;
          firebase.database().ref(room).push({
           Name:user_name,
            Message:msg,
            likes:0


          });
          
          document.getElementById("msg").innerHTML="";
}
  




function logout(){
    window.location="index.html";
}