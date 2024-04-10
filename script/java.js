function animation(){
	document.getElementById("home_page").style.opacity="1";
	document.getElementById("nav").style.top="0px";
	document.getElementById("nav").style.background="transparent";
}

window.addEventListener('scroll',function(y){
	y=scrollY;
	if(y >"330"){
	document.getElementById("mes1").style.background="#ff00e01c";
	document.getElementById("mes1").style.margin="0px";
	document.getElementById("mes1").style.opacity="1";
	document.getElementById("mes2").style.opacity="1";
	document.getElementById("mes2").style.background="#ff00e01c";
		console.log("grater than")
	}else{
		console.log("lessthan")
	}

})