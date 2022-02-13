var randomStrings = [
    "The way you laugh.",
    "Your heart shaped nostrils.",
    "The warmth of your hugs.",
    "Our thermodynamic equilibrium.",
    "How perfectly your beauty marks are placed on your face.",
    "The face you make when you see a cute cat.",
    "Your passion for all things Sanrio.",
    "How you feel like home.",
    "How you make me laugh.",
    "How you sound when you are sleepy.",
    "The pickle, vegetable, mushroom, olive theory.",
    "👌",
    "How fast you fall asleep on car rides.",
    "How hardworking and resilient you are.",
    "Your love of shoes.",
    "Your worry if snowmen get cold.",

  ];

  var randomDiv = document.getElementById("myRandomDiv");

  document.getElementById("myButton").addEventListener("click", generate);

  function generate() {
    randomIndex = Math.ceil((Math.random() * randomStrings.length - 1));
    newText = randomStrings[randomIndex];
    randomDiv.innerHTML = newText;
  }

  generate();