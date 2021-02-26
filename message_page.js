var firebaseConfig = {
    apiKey: "AIzaSyBhXfd2l0fnFDzabH3m6eszfSCYEoEeQv0",
    authDomain: "kwitter-a16a9.firebaseapp.com",
    databaseURL: "https://kwitter-a16a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-a16a9",
    storageBucket: "kwitter-a16a9.appspot.com",
    messagingSenderId: "401978275152",
    appId: "1:401978275152:web:4cbb23ecd1a8b81504a855"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User-Name");
  room_name = localStorage.getItem("RoomName");
  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
  firebase_message_id = childKey; 
  message_data = childData; 
  //Start code 
  console.log(firebase_message_id);
  console.log(message_data);
  name1 = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];

  name_div = "<h4>" + name1 + "<img id='image' src='tick.png' class='user_tick'></h4>";
  message_div = "<h4 class='messagediv'>" + message + "</h4>";
  like_btn = "<button class='btn btn-success' id='" + firebase_message_id + "' value ='" + like + "' onclick='update(this.id)'><span class='glyphicon glyphicon-thumbs-up'>LIKE :" + like + "</span></button><hr>";
  row = name_div + message_div + like_btn;
  document.getElementById("output").innerHTML += row;
  document.getElementById("image").style.width = "50px";
  //End code 
} }); }); } getData();

  function update(message_id) {
    console.log("Clicked On like button" + message_id);
    btn_id = message_id;
    likes = document.getElementById(btn_id).value;
    likes_ = Number(likes) + 1;
    console.log(likes_);

    firebase.database().ref(room_name).child(message_id).update({
      like : likes_
});
  }

  function logout() {
    localStorage.removeItem("User-Name");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
  }