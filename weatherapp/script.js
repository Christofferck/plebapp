	
    //Funktion som laver min Kelvin om til Celsius


function convertKelvinToCelsius (temp) {
	var temprature = document.getElementById("Celsius");
	var celsius = Math.round(parseInt(temp, 10) - 273.15);
	temprature.innerHTML= celsius + "°";
  }


function getCity(city){
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){

        if(ajaxRequest.readyState == 4){
            //the request is completed, now check its status
            if(ajaxRequest.status == 200){
              //turn JSON into object
              var jsonObj = JSON.parse(ajaxRequest.responseText);
              // console.log(jsonObj.weather[0].main);
              // console.log(jsonObj.weather[0].description);
			  //Temperatur-value som nu viser temperaturen i celsius
              var element = document.getElementById("temperature-value");
              element.innerHTML = convertKelvinToCelsius(jsonObj.main.temp).toFixed(2);
			  //temperatur-decsription, laver en lille description af current temperature
              var element = document.getElementById("temperature-description");
              element.innerHTML = jsonObj.weather[0].description; 
			  //sys-country siger hvilket land byen er i så fx DK, SE, GB, NO osv
              var element = document.getElementById("notifikationer");
              element.innerHTML = jsonObj.sys.country; 
			  //wind.speed siger lidt sig selv, da den tager vind styrken
              var element = document.getElementById("lokation");
              element.innerHTML = convertKelvinToCelsius(jsonObj.wind.speed).toFixed(2);
			  //Fortæller hvor skyet der er i området
              var element = document.getElementById("weather-ikon");
              element.innerHTML = jsonObj.clouds.all;

            }
        }
    }
	
    x = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=547d9d614973c7dc888cd7cc61b23c04'
    ajaxRequest.open('GET', x);
    ajaxRequest.send();
}




var EnterKey = document.getElementById("input");
var Click = document.getElementById("btn");

function makeVisible(){
	document.getElementById('city').style.visibility = 'visible';
	document.getElementById('getWeather').style.visibility = 'visible';
	document.getElementById('SearchVisibility').style.visibility = 'collapse';
}



Click.addEventListener("click", function () {
  console.log(EnterKey.value);
	getCity(EnterKey.value);
} );

EnterKey.addEventListener("keypress", function() {
  sendURL(event.key);
})

function sendURL (enter) {
	if(event.key=="Enter"){
    getCity(EnterKey.value);
	}
	else {

	}
}



// JavaScript Document

// Gem time og minutter i variabler og få dem vist i console.
const d = new Date();
const h = d.getHours();
const m = d.getMinutes();

// Variabel der har kombineret time og minutter. Bruges ikke pt. i dette tilfælde.
const time = (h + ":" + m);
console.log(time);

// Function til at skifte baggrund alt efter tidspunkt på dagen.
function timeBackground (h,m) {
	if (h >= 8 && h < 10) { 
		//Hvis h(time) er større end eller lig med kl. 8 og mindre end kl. 10, sætter den nedenstående baggrund på
		console.log("The time is between 8 and 10"); 
		// tjekker om if statement køres i console.
		document.body.style.backgroundImage = "url('img/SunRise.jpg')"; 
		//vælger hvilket baggrundsbillede der skal bruges og stien til dette
		document.body.style.backgroundSize = "cover"; 
		// css styling, får baggrundsbilledet til at fylde hele viewport
		document.body.style.backgroundPosition = "center right"; 
		// css styling, vælger at billedet skal centreres og start i højre side.

	} else if (h >= 10 && h < 18) {
		console.log("The time is between 10 and 18");
		document.body.style.backgroundImage = "url('img/Daylight.webp')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center center";
	} else if (h >= 18 && h < 20) {
		console.log("The time is between 18 and 21");
		document.body.style.backgroundImage = "url('img/SunSet.jpeg')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center center";
	} else {
		console.log("The time is between 21 and 8");
		document.body.style.backgroundImage = "url('img/Nightsky.jpg')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundPosition = "center center";
	}
}

//Kald function ovenover, for at få den til at køre.
timeBackground(h, m);
