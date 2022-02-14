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
    "How we've grown and continue to grow with eachother.",
    "How much we can eat together.",
    "How you have levelled up my fashion sense.",
    "Your 'British' accent.",
    "How excited you get when we go to a stationery store.",
    "The sweet sound of your voice when you sing, even though you think you can't",
    "How you are someone I can laugh so honestly with, someone who can make me laugh so much.",
    "You are someone who feels like home, who makes the world feel like it is worth going through, even when I feel hopeless.",
    "That we can eat, and the moments we share just by sharing meals.",
    "Your smile that is so genuine and so warm, that it can make any day of mine feel like it was good, even when it was not.",
    "How you are someone that loves me so honestly. Someone who loves me even when I feel I am not deserving of it, who reminds me that I am loved.",
    "How you are someone who helps me grow and someone who helps me to become the best version of myself.",
  ];

  var randomDiv = document.getElementById("myRandomDiv");

  document.getElementById("myButton").addEventListener("click", generate);

  function generate() {
    randomIndex = Math.ceil((Math.random() * randomStrings.length - 1));
    newText = randomStrings[randomIndex];
    randomDiv.innerHTML = newText;
  }

  generate();