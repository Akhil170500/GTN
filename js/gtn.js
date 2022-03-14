let x= Math.floor((Math.random()*999)+1);
	document.getElementById("hidden_number").innerHTML = x;
		let btn= document.getElementById('btn');
		let output = document.getElementById('outputtxt');
		btn.addEventListener('click',function(){
		let num = document.getElementById('user_num').value;
			if (x==num) {
					output.innerHTML= 'You Won'
					loadref(3000);
				}
				else if (x>num) {
					output.innerHTML="Your number is smaller"
				};
				if (x<num){
					output.innerHTML="Your number is bigger"
				}
				else if (num.length=='0') {
					output.innerHTML="Enter valid input"
				};
				if (num<1){
					output.innerHTML="Your number cannot be less than 1"
				}
				else if (num>999) {
					output.innerHTML="Your number cannot be greater than 999"
				};
		});
		
function incrementButton(){
	
	var element=document.getElementById('chance');
	var value=element.innerHTML;
	--value;
	console.log(value);
	document.getElementById('chance').innerHTML=value;
	
	if (element.innerHTML==0){
					element.innerHTML="Game Over"
					loadref(3000);
				}
}

function refclk(){
	var clock=document.getElementById("clk");
	document.getElementById("clk").innerHTML.reload;
}

function loadref(time){
	setTimeout("location.reload(true);",time);
}

var clock=10;
setInterval(function(){
	clock--;	
	if(clock>=0){
		id=document.getElementById("clk");
		id.innerHTML=clock;
	}
	if(clock===0){
		id.innerHTML="Lost";
		loadref(3000);
	}
},1000);
