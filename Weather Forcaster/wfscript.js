const city = document.querySelector("#cityname");

console.log(city.value);

const but = document.querySelector("#forecast");

const cityname = document.querySelector("#city");

const latlon = document.querySelector("#latlon");

const type = document.querySelector("#type");

const temp = document.querySelector("#tempc");

const typeimg = document.querySelector("#img");

const tempsat = document.querySelector(".feellike");

const minmax = document.querySelector(".minmax");

const humidity = document.querySelector("#humidity");

const wind = document.querySelector(".wind");

const a = document.querySelector("#geoloco");


let weather = async ()=>{
	let rawdata = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ss9a94436d803b4113a6e144041242212ss&q=${city.value}&days=1&aqi=no&alerts=no`);
	let data = await rawdata.json();
	console.log(data);
	let location = data.location;
	cityname.innerText = location.name;
	latlon.innerText = location.lat + "/" + location.lon;
	a.setAttribute("href" , `https://www.google.co.in/maps/@${location.lat},${location.lon},14z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`)
	type.innerText = data.current.condition.text;
	temp.innerText = data.current.temp_c;
	tempsat.innerText = `Feels like ${data.current.feelslike_c}`
	let imgurl = data.current.condition.icon
	typeimg.setAttribute("src" , imgurl)
	let min = data.forecast.forecastday[0];
	console.log(min.day.maxtemp_c)
	minmax.innerText = `Min/Max: ${min.day.maxtemp_c} / ${min.day.mintemp_c}`
	humidity.innerText = `Humidity: ${min.day.avghumidity}%`
	wind.innerText = `Wind: ${min.day.avgvis_km}kph`
};

but.addEventListener("click" , ()=>{
    weather();
})

document.querySelector("#nosub").addEventListener("submit" , (event)=>{
		event.preventDefault();
	
})

city.addEventListener("keydown" , (event)=>{
	if(event.key === "Enter"){
		event.preventDefault();
		but.click();
	}
	})

weather();
















    