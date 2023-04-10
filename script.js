//img src function
function createImg (fileName) {
    var imgTag = "images/" + fileName;
    return imgTag;
}

//image list
var giIcon = createImg("gi-icon.png");
var hi3Icon = createImg("hi3-icon.png");
var hsrIcon = createImg("hsr-icon.png");
var primogem = createImg("Item_Primogem.png");
var itFate = createImg
("Item_Intertwined_Fate.png");
var aqFate = createImg("Item_Acquaint_Fate.png");
var crystals = createImg("Crystals.png");
var dormCard = createImg("Dorm_Supply_Card.png");
var expaCard = createImg("Expansion_Supply_Card.png");
var focaCard = createImg("Focused_Supply_Card.png");
var stellarJade = createImg("Item_Stellar_Jade.png");

//img src changing
document.getElementById("giIcon").src = giIcon;
document.getElementById("hi3Icon").src = hi3Icon;
document.getElementById("hsrIcon").src = hsrIcon;
document.getElementById("primogem").src = primogem;
document.getElementById("itFate").src = itFate;
document.getElementById("aqFate").src = aqFate;
document.getElementById("crystals").src = crystals;
document.getElementById("dormCard").src = dormCard;
document.getElementById("expaCard").src = expaCard;
document.getElementById("focaCard").src = focaCard;
document.getElementById("stellar jade").src = stellarJade;

//stars
const starCount = 350;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 5 + "s";
  document.getElementById("starbg").appendChild(star);
}

// Get all the tab content elements
var tabContents = document.getElementsByClassName("tabcontent");

// Get all the tab button elements
var tabButtons = document.getElementsByClassName("tablinks");

// Function to open a tab
function openTab(event, tabName) {
  // Hide all the tab content
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Remove the "active" class from all the tab buttons
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Show the selected tab content and set the button to be "active"
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Set the first tab to be active by default
document.getElementById("Tab1").style.display = "block";
tabButtons[0].className += " active";
