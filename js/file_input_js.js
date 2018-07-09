function myFunc(file){

	var a = document.getElementById("file_info");
	a.innerHTML = "";
	for (var i = 0; i < file.files.length; i++) {
		a.innerHTML += "["+ i +"]: "+ file.files[i].name + "<br/>";
	}
}