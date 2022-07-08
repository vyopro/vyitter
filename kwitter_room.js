var firebaseConfig = {
      apiKey: "AIzaSyD_tj2wDdnRHpy5HdCW0iGpuaNblHG1LzU",
      authDomain: "vyitter.firebaseapp.com",
      databaseURL: "https://vyitter-default-rtdb.firebaseio.com",
      projectId: "vyitter",
      storageBucket: "vyitter.appspot.com",
      messagingSenderId: "674165078959",
      appId: "1:674165078959:web:1db4594cd77d9bb5f44d5a"
};

firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
//ADD YOUR FIREBASE LINKS HERE

function addroom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: "adding room"

      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
row ="<div class = 'room_name' id="+Room_names+" onclick='rtrn(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+= row;

                  //End code
            });
      });
}
getData();
function rtrn(name){
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html"
}




function back() {
      window.location = "index.html"
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name")
}

