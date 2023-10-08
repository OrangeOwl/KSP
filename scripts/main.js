const siamese = ["Jan", "Feb", "Mar"];
const tabby = ["Apr", "May", "Jun"];
const brShort = ["Jul", "Aug", "Sep"];
const maincoon = ["Oct", "Nov", "Dec"];

function ans() {
  // loading the form div to remove it later
  const divForm = document.getElementById("form-div");
  // grabbing the form element and adding an event listener to the submit button
  document.getElementById("form").addEventListener("submit", function(){
    // grabbing the values entered into the form
    const nameValue = document.getElementById("name").value;
    const monthsValue = document.getElementById("months").value;
    const drinksValue = document.getElementById("drinks").value;
    // if name box is empty we don't continue, otherwise grab the values and start the game
    if (nameValue == ""){
      alert("You gotta finish!");
    } else {
      // remove the form div
      divForm.remove();
      // start game passing the variables onto the next function
      parseData(nameValue, monthsValue, drinksValue);
    };
  });
}

function game_start(breed, eye_colour, name) {
  var ship_c = breed;
  var laser_c = eye_colour;
  var player_name = name;
  // remove all that's left
  const title = document.getElementById('title');
  title.remove();
  const icon = document.getElementById('logo');
  icon.remove();
  // create emergency Text
  document.body.style.backgroundColor = "black";
  var div = document.createElement('div');
  div.setAttribute('class', 'night-mode'); // style it to the form div
  div.innerHTML = "<h1>**EMERGENCY TRANSMISSION**</h1><br><h2>Unfortunately your brief elation must come to an end. The evil space rats have begun an invasion of planet earth, and the super extra top-secret organization known as KSP (Kitty Space Program) have demanded all able-bodied cats must participate in our global defense.</h2><h2>Say your goodbyes, your cat is needed to save the world.</h2><h2>(Get to 2000 points to win! Collect boost to increasure your fire rate)</h2>";
  document.body.appendChild(div); //append div to body
  var cont_txt = document.createElement('div');
  cont_txt.setAttribute('class', 'form');
  cont_txt.innerHTML = "<button class='SUBMIT-EMERGENCY'>Good-Bye</button>";
  document.body.appendChild(cont_txt);
  cont_txt.addEventListener("click", function(){ //add event listener to good bye button, then store cookies when pressed and load game
    document.cookie = "ship_colour=" + ship_c + "; SameSite=None; Secure";
    document.cookie = "laser_colour=" + laser_c + "; SameSite=None; Secure";
    document.cookie = "player_name=" + player_name + "; SameSite=None; Secure";
    window.location.href = "game.html";
  });
}

function parseData(n, m, d) {
  // determining cat's eye colour
  var name = n;
  if (name.length <= 4) {
    var eye_colour = "blue";
  } else if (name.length == 5) {
    var eye_colour = "green";
  } else {
    var eye_colour = "yellow";
  };
  // determining cats breed
  if (siamese.includes(m)) {
    var breed = "Siamese";
  } else if (tabby.includes(m)) {
    var breed = "Tabby";
  } else if (brShort.includes(m)) {
    var breed = "British ShortHair";
  } else {
    var breed = "MainCoon";
  };
  // determining cats gender
  if (d == "Coffee") {
    var gender = "girl";
  } else {
    var gender = "boy";
  };
  // Display Data
  var div = document.createElement('div'); // create a div for text and img
  div.setAttribute('class', 'form'); // style it to the form div
  div.innerHTML = "<h1>Congrats on the adoption of your new kitty!</h1><h2>It's a beautiful " + gender + " " + breed +" with " + eye_colour + " coloured eyes </h2><br><img class='cat_icon' src='images/" + breed + "_" + eye_colour + ".png'></img><h2>Say hello to " + name + "</h2><h2>I'm sure you'll become fast friends</h2>";
  document.body.appendChild(div); //append div to body

  var cont_txt = document.createElement('div');
  cont_txt.setAttribute('class', 'form');
  cont_txt.innerHTML = "<button class='SUBMIT'>Continue</button>";
  document.body.appendChild(cont_txt);
  cont_txt.addEventListener("click", function(){
    div.remove();
    cont_txt.remove();
    game_start(breed, eye_colour, name);
  });
}

ans()
