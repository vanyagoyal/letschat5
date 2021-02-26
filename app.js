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

function adduser(){
  user_name = document.getElementById("username").value;
  localStorage.setItem("User-Name",user_name);
  window.location = "room.html";
  }