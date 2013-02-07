$(function() {
	setInterval(getTemp, 2000);
});

var getTemp = function() {
	var srcurl_temp = 'http://localhost:8783/';
	$.getJSON(srcurl_temp, function(data) {
		var temp = data[0]['data'];
		$('section.temperature p').html(temp);
	
		// Require: jquery.animate-color
		$('body').animate({ backgroundColor: getTempcolor(temp) }, 1000);
	});
}

var getTempcolor = function(temp) {
	if(temp > 40) {
		return "#F33633";
	} else if (temp > 35) {
		return "#FF8700";
	} else if (temp > 30) {
		return "#FFC940";
	} else if (temp > 25) {
		return "#659e45";
	} else if (temp > 15) {
		return "#00979B";
	} else if (temp > 10) {
		return "#6AB2E7";
	} else if (temp > 0) {
		return "#D5D6E3";
	}

	return "#659e45";
}
