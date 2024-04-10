
if (localStorage.getItem('token')!= null){
	window.alert("You have Account! Please Login")
}else{
	console.log("You Can Register")
}



function submit(username,email,pass1,pass2,fav,actp){
   username = document.getElementById('username').value;
   email = document.getElementById('email').value;
   pass1 = document.getElementById('password1').value;
   pass2 = document.getElementById('password2').value;
   fav = document.getElementById('fav').value;
   actp = document.getElementById('actp').value;
   empty="";



if (username == empty){
	document.getElementById("res").innerText="Insert User Name";
}else{
	if(email == empty){
	document.getElementById("res").innerText="Insert Email";
	}else{
		if(pass1 == empty){
	document.getElementById("res").innerText="Insert Password";
		}else{
			if (pass2 == empty){
	document.getElementById("res").innerText="Comfirm Password";
			}else{
				if (pass2 != pass1){
	document.getElementById("res").innerText="Not Same Password";
				}else{
					if(pass2.length < 8){
	document.getElementById("res").innerText="Bellow 8 Character Not Allowed";
					}else{
					if(fav == empty){
	document.getElementById("res").innerText="Insert Favorite Food Please";
					}else{
	document.getElementById("res").innerText="Login Success";
				
	localStorage.setItem("username" , username);
	localStorage.setItem("email" , email);
	localStorage.setItem("pass2" , pass2);
	localStorage.setItem("fav" , fav);
	localStorage.setItem("actp" , actp);
	localStorage.setItem("token" ,'wue2783920472834hu24hu901284y934h1hudyer78q63yuihfbauweyo83946y7234hiodh39478914y37460584543o254859y32547892545yu2o35847652784y5uihfuaso7')

					}
					}
				}
			}
		}
	}
}



}


