function sendRequest() {
	var soap = require("soap");
	var url = "http://www.yodaspeak.co.uk/webservice/yodatalk.php?wsdl";
	var args = { name: "value" };
	soap.createClient(url, function(err, client) {
		client.request(args, function(err, result) {
			console.log(result);
		});
	});


	// var token = document.getElementsByClassName("input-box")[0].value;

	// var URLString = "https://yodish.p.rapidapi.com/yoda.json?text=";

	// var enc = encodeURIComponent(token);

	// var fullURL = URLString + enc;

	// console.log(fullURL);

	// var request = new XMLHttpRequest();
	// request.open("POST", fullURL, true);

	// request.setRequestHeader("X-RapidAPI-Host", "yodish.p.rapidapi.com");
	// request.setRequestHeader(
	// 	"X-RapidAPI-Key",
	// 	"44febd3629msh1bdc68bd2d88771p1ade31jsn4ae882570bbe"
	// );
	// request.setRequestHeader(
	// 	"Content-Type",
	// 	"application/x-www-form-urlencoded"
	// );

	// request.onload = function() {
	// 	// Begin accessing JSON data here
	// 	var data = JSON.parse(this.response);

	// 	if (request.status >= 200 && request.status < 400) {
	// 		console.log(data.contents.translated);
	// 	} else {
	// 		console.log("error");
	// 	}
	// };
	// request.send();
}
