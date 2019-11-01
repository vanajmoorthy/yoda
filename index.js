function yodify() {
	var request = new XMLHttpRequest();

	var input = document.getElementById("text").value;
	var encoded = encodeURIComponent(input);
	var url = `https://api.funtranslations.com/translate/yoda.json?text=${encoded}`;

	request.open("GET", url, true);

	request.onload = function() {
		var data = JSON.parse(this.response);

		document.getElementById("output").innerText = data.contents.translated;
	};

	request.send();
}
