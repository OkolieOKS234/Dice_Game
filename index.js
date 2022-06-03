// randomizing

function startGame() {
  // first player
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomdiceImage = "dice" + randomNumber1 + ".png"; //selecting images from 6 dice to 1 dice
  var randomImageSource = "images/" + randomdiceImage; // this will select the image source = images/dice1.png - dice2.png

  var image1 = document.querySelectorAll("img")[0]; // selecting an image from the first index of the image

  image1.setAttribute("src", randomImageSource);

  //   second player
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomDiceSource = "images/" + randomDiceImage2;

  //   selecting the image
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomDiceSource);
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").textContent = "Player 1 won";
    setTimeout("location.reload(true)", 3000);
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".heading").textContent = "Player 2 won";
    setTimeout("location.reload(true)", 3000);
  } else {
    document.querySelector(".heading").textContent = "Draw Match";
    setTimeout("location.reload(true)", 1000);
  }
}
