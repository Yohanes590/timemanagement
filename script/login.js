function login(username,password){
	username = window.localStorage.getItem("username");
	password = window.localStorage.getItem("pass2");

	get_input_use = document.getElementById("username").value;
	get_input_pass = document.getElementById("password").value;


if(username != get_input_use){
	document.getElementById("res").innerText="Wrong User Name Or Password";
	document.getElementById("res").style.color="red";
}else{
	if(password != get_input_pass){
	document.getElementById("res").innerText="Wrong User Name Or Password";
	document.getElementById("res").style.color="red";
	}else{
	document.getElementById("res").innerText="Login Success";
	document.getElementById("res").style.color="green";

	}
}


}