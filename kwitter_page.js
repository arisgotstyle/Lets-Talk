//YOUR FIREBASE LINKS
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
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem('User Name');
  room_name= localStorage.getItem('Room');

  function send() {

    msg= document.getElementById('msg').value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg, 
          like:0
    });
    document.getElementById('msg').value='';

  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag= '<h4>'+name+'<img class="user_tick" src="https://media.istockphoto.com/vectors/lets-talk-vector-lettering-banner-vector-id1190372252?k=6&m=1190372252&s=612x612&w=0&h=6c8RrUdhNezRBoZeFScPKCGgcTH2FLs6zGB_1pwU4Ow="></h4>';
message_with_tag= '<h4 class="message_h4">'+message+'</h4>';
likes_button= '<button class= "btn btn-warning" id='+firebase_message_id+'value='+like+'onclick="update_likes(this.id)">';
span_with_tag= '<span class="glyphicon glyphicon-thumbs-up">Likes:'+like+'</span></button><hr>';
row= name_with_tag+message_with_tag+likes_button+span_with_tag;
document.getElementById('output').innerHTML+=row;
//End code
    } });  }); }

getData();

function update_likes(message_id) {

    console.log('clicked_on_like_button'+message_id);
    button_id=message_id;
    likes= document.getElementById(button_id).value;
    update_like= Number(likes)+ 1;
    console.log(update_like);
    firebase.database().ref(room_name).child(message_id).update({
          likes : update_like});

}

function logout(){

    localStorage.removeItem('User Name');
    localStorage.removeItem('Room Name');
    window.location.replace('index.html');
}