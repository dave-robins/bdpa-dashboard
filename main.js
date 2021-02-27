function setGreeting() {
  var date = new Date()
  var greeting = ""

  if (date.getHours() < 12) {
    greeting = "Good Morning"
  } else if (date.getHours() >= 12 && date.getHours() < 17) {
    greeting = "Good Afternoon"
  } else if (date.getHours() >= 17) {
    greeting = "Good Evening"
    console.log(greeting)
  }
  
  document.getElementById("greeting").innerHTML = greeting
}

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerHTML = 
      hour + " : " + min + " : " + sec

    setTimeout(() => { currentTime() }, 1000)
  }

  function updateTime(time) {
    return time < 10 ? ("0" + time) : time
  }
  
  async function getRandomQuote() {
      var result = await fetch("https://api.quotable.io/random")
      .then(res => res.json())

      document.getElementById("quote-body").innerHTML = result.content
      document.getElementById("quote-footer").innerHTML = result.author
    }


setGreeting()
currentTime()
getRandomQuote()