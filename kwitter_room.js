
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyA6U7Ct1FP4cCw4sqM0vaEQG8R0A1usY9M",
  authDomain: "kwitter1-9f362.firebaseapp.com",
  databaseURL: "https://kwitter1-9f362-default-rtdb.firebaseio.com",
  projectId: "kwitter1-9f362",
  storageBucket: "kwitter1-9f362.appspot.com",
  messagingSenderId: "696377047906",
  appId: "1:696377047906:web:c4a0a016f8220c509f4a3b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
