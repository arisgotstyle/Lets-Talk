var firebaseConfig = {
    apiKey: "AIzaSyAYDKTdTSReYyjg17mtKhXco9RUG9iHZ9I",
    authDomain: "quitter-4f186.firebaseapp.com",
    databaseURL: "https://quitter-4f186-default-rtdb.firebaseio.com",
    projectId: "quitter-4f186",
    storageBucket: "quitter-4f186.appspot.com",
    messagingSenderId: "348092790124",
    appId: "1:348092790124:web:cab01da7a6b73e991f2f49",
    measurementId: "G-L1Q4WB7G43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function logout() {
        localStorage.removeItem('User Name');
        localStorage.removeItem('Room Name');
        window.location='index.html';
  }
  user_name= localStorage.getItem('User Name');
  document.getElementById('welcome_name').innerHTML= 'Welcome '+ user_name+ '!';

  function addRoom() {
   room_name= document.getElementById('room_name').value;
    console.log(room_name);
    firebase.database().ref('/').child(room_name).update({purpose: 'adding room name'});
    localStorage.setItem('Room Name', room_name);
    window.location='kwitter_page.html';
  }

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log('Room Names: ' + Room_names);
    row= '<div id="'+Room_names+'" class="room_name" onclick="redirectToRoomName(this.id)">#'+Room_names+'</div><hr>';
    document.getElementById('output').innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {

    console.log(name);
    localStorage.setItem('Room', name);
    window.location='kwitte_page.html';
}

