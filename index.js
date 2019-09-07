function yodify() {
	var request = new XMLHttpRequest();

	var input = document.getElementById("text").value;
	var encoded = encodeURIComponent(input);
	var url = "https://api.funtranslations.com/translate/yoda.json?text=";
	var toSend = url + encoded;

	request.open(
		"GET",
		toSend,
		true
	);

	request.onload = function() {
		var data = JSON.parse(this.response);

		document.getElementById("output").innerText = data.contents.translated;
	};

	request.send();
};
