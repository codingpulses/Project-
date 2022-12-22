document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  generate = () => {
    var quotes = {
      "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
      "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
      "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
      "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
      "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
      "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
      "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
     
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;

  }