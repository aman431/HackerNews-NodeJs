var name = prompt("what is your name?")
alert("Hello " + name);
document.getElementById('Name').innerHTML = "Hello "+name+" !!";
const a1 = document.querySelector('.weather');
const weatherBall = (cityId) =>{
	//Calling a Api with url 
	let apiKey = 'dd4b2c0bf6ced9e46923c2c31cc3b825';
	//let city = 'pune';
	let url =  `http://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${apiKey}`; 
	fetch(url)
	.then(function(resp){ return resp.json() })
	.then(function(data){
		console.log(data);
		draw(data);
		console.log(data);
	})
	.catch(function(){
	});
}
const celCelsius = (temp) =>{
	let cell = Math.floor(temp-273.15);
	return cell;
}
const draw = (d) =>{
	//Calculating Celcuis Fahrenheit !!
	//var celcuis = Math.round(parseFloat(d.main.temp) - 273.15);
	var celcuis = Math.floor(temp-273.15);
	var far = Math.floor(((parseFloat(d.main.temp)-273.15)*1.8)+32);
	var description = d.weather[0].main;
	let today = new Date();
	let day = today.getDay();
	let date = today.getDate();
	let month = today.getMonth()+1;
	let year = today.getFullYear();
	let weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturaday","Sunday"];
	let years = ['January','February','March','AprilMay','June', 'August','September','October','November',"December"];
	let day_name = weekday[day];
	let month_name = years[month];
	let a = celCelsius(d.main.temp_min);
	let b = celCelsius(d.main.temp_max);
	console.log(b);
	console.log(a);
	let result = day_name+" "+date+" "+month_name+" "+year;
	document.getElementById('location').innerHTML = d.name+','+d.sys.country;
	document.getElementById('date').innerHTML = result;
	document.getElementById('temp').innerHTML = celCelsius(d.main.temp) + '&deg'+'c';
	document.getElementById('temp_max').innerHTML = celCelsius(d.main.temp_max) + '&deg'+'c';
	document.getElementById('temp_min').innerHTML = a + '&deg'+'c';
	document.getElementById('description').innerHTML = description;

}
let a = document.getElementById('search');	
a.addEventListener('keydown', (e) => {
	if(e.key === 'Enter'){
		weatherBall(a.value);
		a.value = "";
	}
});

