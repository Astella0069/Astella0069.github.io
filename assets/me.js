if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "$ astella.gq", "$ astella.g", "$ astella.", "$ astella", "$ astell", "$ astel", "$ aste", "$ ast", "$ as", "$ a", "$ as", "$ ast", "$ aste", "$ astel", "$ astell", "$ astella", "$ astella.", "$ astella.g", "$ astella.gq"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
