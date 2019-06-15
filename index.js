var unirest = require("unirest");

unirest.post("https://yodish.p.rapidapi.com/yoda.json?text=Master+Obiwan+has+lost+a+planet.")
.header("X-RapidAPI-Host", "yodish.p.rapidapi.com")
.header("X-RapidAPI-Key", "44febd3629msh1bdc68bd2d88771p1ade31jsn4ae882570bbe")
.header("Content-Type", "application/x-www-form-urlencoded")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});
