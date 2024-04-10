function read_data(allObj_data){
	allObj_data = localStorage.getItem("daily_plan");
	plan = JSON.parse(allObj_data)[0].plan;
	dis = JSON.parse(allObj_data)[0].dis;
	take = JSON.parse(allObj_data)[0].take;
	pers = JSON.parse(allObj_data)[0].pers;
	ach = JSON.parse(allObj_data)[0].ach;
	date = JSON.parse(allObj_data)[0].date;
	day = JSON.parse(allObj_data)[0].day;

	 document.getElementById('plan').value=plan;
	document.getElementById('dis').value=dis;
	 document.getElementById('take').value=take;
	 document.getElementById('pers').value=pers;
	 document.getElementById('ach').value=ach;
	 document.getElementById('date').value=date;
	 document.getElementById('day').value=day;
}






function daily(plan,dis,take,pers,ach,date,day){
		plan = document.getElementById('plan').value;
		dis = document.getElementById('dis').value;
		take = document.getElementById('take').value;
		pers = document.getElementById('pers').value;
		ach = document.getElementById('ach').value;
		date = document.getElementById('date').value;
		day = document.getElementById('day').value;

localStorage.setItem("day",day)

const empty ="";

if (plan == empty){
	plan_req()
}else{
	if (dis == empty){
	dis_req()
	}else{
		if (take == empty){
			take_req()
		}else{
			if(pers==empty){
				per()
			}else{
				if (date == empty){
					date_req()
				}else{
					filter()
					succ()
					
				}
			}
		}
	}
}



function filter(){

if (day=="Monday"){
	monday()
}else{
    if(day=="Tuesday"){
    	tusday()
    }else{
    	if(day=="Wednesday"){
    		wens()
    	}else{
    		if(day=="Thursday"){
    			thr()
    		}else{
    			if(day=="Friday"){
    				fir()
    			}else{
    				if (day=="Saturday"){
    					sat()
    				}else{
    					if(day=="Sunday"){
    						sun()
    					}
    				}
    			}
    		}
    	}
    }
}

}




function monday(){

let mon_plan=[{
	plan:plan,
	dis:dis,
	take:take,
	pers:pers,
	ach:ach,
	date:date,
	day:day
}]

localStorage.setItem("mon_plan",JSON.stringify(mon_plan))

}


function tusday(){

let tus_plan=[{
	plan:plan,
	dis:dis,
	take:take,
	pers:pers,
	ach:ach,
	date:date,
	day:day
}]

localStorage.setItem("tus_plan",JSON.stringify(tus_plan))

}


function wens(){

let wen_plan=[{
	plan:plan,
	dis:dis,
	take:take,
	pers:pers,
	ach:ach,
	date:date,
	day:day
}]

localStorage.setItem("wen_plan",JSON.stringify(wen_plan))

}	


function thr(){

let thr_plan=[{
	plan:plan,
	dis:dis,
	take:take,
	pers:pers,
	ach:ach,
	date:date,
	day:day
}]

localStorage.setItem("thr_plan",JSON.stringify(thr_plan))


}



function fir(){

let fir_plan=[{
	plan:plan,
	dis:dis,
	take:take,
	pers:pers,
	ach:ach,
	date:date,
	day:day
}]

localStorage.setItem("fir_plan",JSON.stringify(fir_plan))


}



function sat(){

let sat_plan=[{
	plan:plan,
	dis:dis,
	take:take,
	pers:pers,
	ach:ach,
	date:date,
	day:day
}]
localStorage.setItem("sat_plan",JSON.stringify(sat_plan))


}


function sun(){

let sun_plan=[{
	plan:plan,
	dis:dis,
	take:take,
	pers:pers,
	ach:ach,
	date:date,
	day:day
}]

localStorage.setItem("sun_plan",JSON.stringify(sun_plan))


}

}





const planMon =window.localStorage.getItem("mon_plan")
const planTus =window.localStorage.getItem("tus_plan")
const planWen =window.localStorage.getItem("wen_plan")
const planThr =window.localStorage.getItem("thr_plan")
const planFir =window.localStorage.getItem("fir_plan")
const planSat =window.localStorage.getItem("sat_plan")
const planSun =window.localStorage.getItem("sun_plan")



let allDayPlans = [{planMon,planTus,planWen,planThr,planFir,planSat,planSun}]



		plan = document.getElementById('plan').value;
		dis = document.getElementById('dis').value;
		take = document.getElementById('take').value;
		pers = document.getElementById('pers').value;
		ach = document.getElementById('ach').value;
		date = document.getElementById('date').value;
		day = localStorage.getItem("day");

function read_data(){
	document.getElementById("res").innerText=day;
	if (day=="Monday"){
		monday()
	}else{
       if (day=="Tuesday"){
		tuseday()
       }else{
       	if (day=="Wednesday"){
		wensday()
       	}else{
       		if (day=="Thursday"){
       		thursday()
       		}else{
       			if (day=="Friday"){
				firday()
       			}else{
       				if (day=="Saturday"){
					satday()
       				}else{
       					if (day=="Sunday"){
						sunday()
       					}
       					}
       				}
       			}
       		}
       	}
       }
	}




function plan_req(){
	Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Insert Your Plan Before Save"
});
}
function dis_req(){
	Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Insert Discription Before Save"
});
}
function per(){
	Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Please Insert Persentage Before Save"
});
}
function take_req(){
	Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "How It Takes Time? Insert Before Save"
});
}
function date_req(){
	Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Insert Date Before Save"
});
}
function succ(){
	Swal.fire({
  icon: "success",
  title: "Your Daily Plan Is Sucess",
  text: "Saved"
});	
setTimeout(reloaded,2000)
function reloaded(){
window.location.reload()
}
}


function show_plans(ddy){
	ddy = document.getElementById("day").value;
	if(ddy=="Monday"){
monday()
	}else{
		if (ddy=="Tuesday"){
			tuseday()
		}else{
			if (ddy=="Wednesday"){
				wensday()
			}else{
				if (ddy=="Thursday"){
					thursday()
				}else
				if (ddy=="Friday"){
					firday()
				}else{
					if (ddy=="Saturday"){
						satday()
					}else{
						if (ddy=="Sunday"){
							sunday()
						}
					}
				}
			}
		}
	}
}




function monday() {
		document.getElementById('plan').value =JSON.parse(allDayPlans[0].planMon)[0].plan;
		document.getElementById('dis').value = JSON.parse(allDayPlans[0].planMon)[0].dis;
		document.getElementById('take').value=JSON.parse(allDayPlans[0].planMon)[0].take;
		document.getElementById('pers').value=JSON.parse(allDayPlans[0].planMon)[0].pers;
		document.getElementById('ach').value=JSON.parse(allDayPlans[0].planMon)[0].ach;
	    document.getElementById('date').value=JSON.parse(allDayPlans[0].planMon)[0].date;
		document.getElementById('day').value=JSON.parse(allDayPlans[0].planMon)[0].day;
		document.getElementById("res").innerText="Monday";
}

function tuseday(){
		document.getElementById('plan').value =JSON.parse(allDayPlans[0].planTus)[0].plan;;
		document.getElementById('dis').value = JSON.parse(allDayPlans[0].planTus)[0].dis;
		document.getElementById('take').value=JSON.parse(allDayPlans[0].planTus)[0].take;
		document.getElementById('pers').value=JSON.parse(allDayPlans[0].planTus)[0].pers;
		document.getElementById('ach').value=JSON.parse(allDayPlans[0].planTus)[0].ach;
	    document.getElementById('date').value=JSON.parse(allDayPlans[0].planTus)[0].date;
		document.getElementById('day').value=JSON.parse(allDayPlans[0].planTus)[0].day;;
		document.getElementById("res").innerText="Tuesday";
}

function wensday(){
		document.getElementById('plan').value = JSON.parse(allDayPlans[0].planWen)[0].plan;
		document.getElementById('dis').value = JSON.parse(allDayPlans[0].planWen)[0].dis;
		document.getElementById('take').value=JSON.parse(allDayPlans[0].planWen)[0].take;
		document.getElementById('pers').value=JSON.parse(allDayPlans[0].planWen)[0].pers;
		document.getElementById('ach').value=JSON.parse(allDayPlans[0].planWen)[0].ach;
	    document.getElementById('date').value=JSON.parse(allDayPlans[0].planWen)[0].date;
		document.getElementById('day').value=JSON.parse(allDayPlans[0].planWen)[0].day;;
		document.getElementById("res").innerText="Wednesday";
}

function thursday(){
		document.getElementById('plan').value = JSON.parse(allDayPlans[0].planThr)[0].plan;
		document.getElementById('dis').value = JSON.parse(allDayPlans[0].planThr)[0].dis;
		document.getElementById('take').value=JSON.parse(allDayPlans[0].planThr)[0].take;
		document.getElementById('pers').value=JSON.parse(allDayPlans[0].planThr)[0].pers;
		document.getElementById('ach').value=JSON.parse(allDayPlans[0].planThr)[0].ach;
	    document.getElementById('date').value=JSON.parse(allDayPlans[0].planThr)[0].date;
		document.getElementById('day').value=JSON.parse(allDayPlans[0].planThr)[0].day;;
		document.getElementById("res").innerText="Thursday";
}

function firday(){
		document.getElementById('plan').value = JSON.parse(allDayPlans[0].planFir)[0].plan;
		document.getElementById('dis').value = JSON.parse(allDayPlans[0].planFir)[0].dis;
		document.getElementById('take').value=JSON.parse(allDayPlans[0].planFir)[0].take;
		document.getElementById('pers').value=JSON.parse(allDayPlans[0].planFir)[0].pers;
		document.getElementById('ach').value=JSON.parse(allDayPlans[0].planFir)[0].ach;
	    document.getElementById('date').value=JSON.parse(allDayPlans[0].planFir)[0].date;
		document.getElementById('day').value=JSON.parse(allDayPlans[0].planFir)[0].day;
		document.getElementById("res").innerText="Friday";
}
function satday(){
		document.getElementById('plan').value = JSON.parse(allDayPlans[0].planSat)[0].plan;
		document.getElementById('dis').value = JSON.parse(allDayPlans[0].planSat)[0].dis;
		document.getElementById('take').value=JSON.parse(allDayPlans[0].planSat)[0].take;
		document.getElementById('pers').value=JSON.parse(allDayPlans[0].planSat)[0].pers;
		document.getElementById('ach').value=JSON.parse(allDayPlans[0].planSat)[0].ach;
	    document.getElementById('date').value=JSON.parse(allDayPlans[0].planSat)[0].date;
		document.getElementById('day').value=JSON.parse(allDayPlans[0].planSat)[0].day;;
		document.getElementById("res").innerText="Saturday";
}

function sunday(){
		document.getElementById('plan').value = JSON.parse(allDayPlans[0].planSun)[0].plan;
		document.getElementById('dis').value = JSON.parse(allDayPlans[0].planSun)[0].dis;
		document.getElementById('take').value=JSON.parse(allDayPlans[0].planSun)[0].take;
		document.getElementById('pers').value=JSON.parse(allDayPlans[0].planSun)[0].pers;
		document.getElementById('ach').value=JSON.parse(allDayPlans[0].planSun)[0].ach;
	    document.getElementById('date').value=JSON.parse(allDayPlans[0].planSun)[0].date;
		document.getElementById('day').value=JSON.parse(allDayPlans[0].planSun)[0].day;;
		document.getElementById("res").innerText="Sunday";
}


function week(){
	window.alert("Work")
}