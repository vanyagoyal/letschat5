var firebaseConfig = {
    apiKey: "AIzaSyAdoaxSO_UyrAYdjkFqJA_fzHzyn2nMPZI",
    authDomain: "chatapp-d9b84.firebaseapp.com",
    databaseURL: "https://chatapp-d9b84-default-rtdb.firebaseio.com",
    projectId: "chatapp-d9b84",
    storageBucket: "chatapp-d9b84.appspot.com",
    messagingSenderId: "103037110639",
    appId: "1:103037110639:web:f3ca4b6646f851196c409a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user = localStorage.getItem("User-Name");
  document.getElementById("user").innerHTML = "Welcome " + user + "!";

  function addroom(){
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
        purpose:"Adding Room Name"
    });
    localStorage.setItem("RoomName" , roomname);
    window.location = "message_page.html";
  }

  function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("rooms").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
          childKey = childSnapshot.key;
          names = childKey;
          //Start code
          console.log("Room Name-" + names);
          row = "<div class='Room_Name' id='" + names+"' onclick='RedirectToRoomName(this.id)'>#" + names+"</div><hr>";
          document.getElementById("rooms").innerHTML += row;
          //End code
 });});}
getData();

function RedirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("RoomName" , name);
    window.location = "message_page.html";
}

function logout() {
    localStorage.removeItem("User-Name");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
}