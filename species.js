
var urlString = "https://swapi.co/api/starships/"; //api address for starships and species
var urlStringSpecies = "https://swapi.co/api/species/";

//helper variables for store values return from api
var starships = [];
var starshipsAll = [];
var species = [];
var speciesAll = [];
var cont = 0;
var pages = 0;

var contspecies = 0;
var pagesspecies = 0;

//get starship details from api...only one page is return in one call
//need to add another calls to get all data from api for starships
$.get(urlString, function(data){
	starships.push(data.results); // add retrieve data to array
	pages = Math.ceil(data.count/10); //get pages count
	cont++;
	for(var i = 2;i<= pages;i++){
		var urlNxt = urlString + "?page=" + i; //set address for each page
		getstarshipsApiData(urlNxt,i); //get data from new pages
	}
});

//get new data from url and add to array
function getstarshipsApiData(urlString,i){
	$.get(urlString, function(data){
			starships[i-1] = data.results; // add retrieve data to array in order of pages
			cont++;
			if(cont == pages){ //after getting all data this call to sort data in order
				callsAfterLoaded();
			}
	}); 
}
//sort data in order of pages
function callsAfterLoaded(){
	starshipsAll = starships[0]; //set first data in array to new array
	for(var j=1;j< starships.length;j++){ //loop for array size stored temporary
		var names = starships[j];
		for(var k=0;k< names.length;k++)
			starshipsAll.push(names[k]); //push array data to new array
	}
}

//get species details from api...only one page is return in one call
//need to add another calls to get all data from api for species
$.get(urlStringSpecies, function(data){

	species.push(data.results);// add retrieve data to array
	pagesspecies = Math.ceil(data.count/10); //get pages count
	contspecies++;
	for(var i = 2;i<= pagesspecies;i++){
		var urlNxt = urlStringSpecies + "?page=" + i; //set address for each page
		getspeciesApiData(urlNxt,i); //get data from new pages
	}
});

//get new data from url and add to array
function getspeciesApiData(urlString,i){
	$.get(urlString, function(data){
			species[i-1] = data.results; // add retrieve data to array in order of pages
			contspecies++;
			if(contspecies == pagesspecies){ //after getting all data this call to sort data in order
				callsAfterLoadedspecies();
			}
	}); 
	
}

//sort data in order of pages
function callsAfterLoadedspecies(){
	speciesAll = species[0]; //set first data in array to new array
	for(var j=1;j< species.length;j++){ //loop for array size stored temporary
		var names = species[j];
		for(var k=0;k< names.length;k++)
			speciesAll.push(names[k]); //push array data to new array
	}
}



//get starships data in another js calling this 
function getStarshipsData(){

   return starshipsAll;
}

//get species data in another js calling this
function getSpeciesData(){
	return speciesAll;
}

//export above two function to call from another js 
export {getStarshipsData, getSpeciesData}
/*
var species = [
    {
        "name": "Hutt",
        "classification": "gastropod",
        "designation": "sentient",
        "average_height": "300",
        "skin_colors": "green, brown, tan",
        "hair_colors": "n/a",
        "eye_colors": "yellow, red",
        "average_lifespan": "1000",
        "homeworld": "https://swapi.co/api/planets/24/",
        "language": "Huttese",
        "people": [
            "https://swapi.co/api/people/16/"
        ],
        "films": [
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T17:12:50.410000Z",
        "edited": "2014-12-20T21:36:42.146000Z",
        "url": "https://swapi.co/api/species/5/"
    },
    {
        "name": "Yoda's species",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "66",
        "skin_colors": "green, yellow",
        "hair_colors": "brown, white",
        "eye_colors": "brown, green, yellow",
        "average_lifespan": "900",
        "homeworld": "https://swapi.co/api/planets/28/",
        "language": "Galactic basic",
        "people": [
            "https://swapi.co/api/people/20/"
        ],
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-15T12:27:22.877000Z",
        "edited": "2014-12-20T21:36:42.148000Z",
        "url": "https://swapi.co/api/species/6/"
    },
    {
        "name": "Trandoshan",
        "classification": "reptile",
        "designation": "sentient",
        "average_height": "200",
        "skin_colors": "brown, green",
        "hair_colors": "none",
        "eye_colors": "yellow, orange",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/29/",
        "language": "Dosh",
        "people": [
            "https://swapi.co/api/people/24/"
        ],
        "films": [
            "https://swapi.co/api/films/2/"
        ],
        "created": "2014-12-15T13:07:47.704000Z",
        "edited": "2014-12-20T21:36:42.151000Z",
        "url": "https://swapi.co/api/species/7/"
    },
    {
        "name": "Mon Calamari",
        "classification": "amphibian",
        "designation": "sentient",
        "average_height": "160",
        "skin_colors": "red, blue, brown, magenta",
        "hair_colors": "none",
        "eye_colors": "yellow",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/31/",
        "language": "Mon Calamarian",
        "people": [
            "https://swapi.co/api/people/27/"
        ],
        "films": [
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-18T11:09:52.263000Z",
        "edited": "2014-12-20T21:36:42.153000Z",
        "url": "https://swapi.co/api/species/8/"
    },
    {
        "name": "Ewok",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "100",
        "skin_colors": "brown",
        "hair_colors": "white, brown, black",
        "eye_colors": "orange, brown",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/7/",
        "language": "Ewokese",
        "people": [
            "https://swapi.co/api/people/30/"
        ],
        "films": [
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-18T11:22:00.285000Z",
        "edited": "2014-12-20T21:36:42.155000Z",
        "url": "https://swapi.co/api/species/9/"
    },
    {
        "name": "Sullustan",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "pale",
        "hair_colors": "none",
        "eye_colors": "black",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/33/",
        "language": "Sullutese",
        "people": [
            "https://swapi.co/api/people/31/"
        ],
        "films": [
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-18T11:26:20.103000Z",
        "edited": "2014-12-20T21:36:42.157000Z",
        "url": "https://swapi.co/api/species/10/"
    },
    {
        "name": "Neimodian",
        "classification": "unknown",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "grey, green",
        "hair_colors": "none",
        "eye_colors": "red, pink",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/18/",
        "language": "Neimoidia",
        "people": [
            "https://swapi.co/api/people/33/"
        ],
        "films": [
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-19T17:07:31.319000Z",
        "edited": "2014-12-20T21:36:42.160000Z",
        "url": "https://swapi.co/api/species/11/"
    },
    {
        "name": "Gungan",
        "classification": "amphibian",
        "designation": "sentient",
        "average_height": "190",
        "skin_colors": "brown, green",
        "hair_colors": "none",
        "eye_colors": "orange",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/8/",
        "language": "Gungan basic",
        "people": [
            "https://swapi.co/api/people/36/",
            "https://swapi.co/api/people/37/",
            "https://swapi.co/api/people/38/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-19T17:30:37.341000Z",
        "edited": "2014-12-20T21:36:42.163000Z",
        "url": "https://swapi.co/api/species/12/"
    },
    {
        "name": "Toydarian",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "120",
        "skin_colors": "blue, green, grey",
        "hair_colors": "none",
        "eye_colors": "yellow",
        "average_lifespan": "91",
        "homeworld": "https://swapi.co/api/planets/34/",
        "language": "Toydarian",
        "people": [
            "https://swapi.co/api/people/40/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-19T17:48:56.893000Z",
        "edited": "2014-12-20T21:36:42.165000Z",
        "url": "https://swapi.co/api/species/13/"
    },
    {
        "name": "Dug",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "100",
        "skin_colors": "brown, purple, grey, red",
        "hair_colors": "none",
        "eye_colors": "yellow, blue",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/35/",
        "language": "Dugese",
        "people": [
            "https://swapi.co/api/people/41/"
        ],
        "films": [
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-19T17:53:11.214000Z",
        "edited": "2014-12-20T21:36:42.167000Z",
        "url": "https://swapi.co/api/species/14/"
    },
    {
        "name": "Twi'lek",
        "classification": "mammals",
        "designation": "sentient",
        "average_height": "200",
        "skin_colors": "orange, yellow, blue, green, pink, purple, tan",
        "hair_colors": "none",
        "eye_colors": "blue, brown, orange, pink",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/37/",
        "language": "Twi'leki",
        "people": [
            "https://swapi.co/api/people/45/",
            "https://swapi.co/api/people/46/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/"
        ],
        "created": "2014-12-20T09:48:02.406000Z",
        "edited": "2014-12-20T21:36:42.169000Z",
        "url": "https://swapi.co/api/species/15/"
    },
    {
        "name": "Aleena",
        "classification": "reptile",
        "designation": "sentient",
        "average_height": "80",
        "skin_colors": "blue, gray",
        "hair_colors": "none",
        "eye_colors": "unknown",
        "average_lifespan": "79",
        "homeworld": "https://swapi.co/api/planets/38/",
        "language": "Aleena",
        "people": [
            "https://swapi.co/api/people/47/"
        ],
        "films": [
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-20T09:53:16.481000Z",
        "edited": "2014-12-20T21:36:42.171000Z",
        "url": "https://swapi.co/api/species/16/"
    },
    {
        "name": "Vulptereen",
        "classification": "unknown",
        "designation": "sentient",
        "average_height": "100",
        "skin_colors": "grey",
        "hair_colors": "none",
        "eye_colors": "yellow",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/39/",
        "language": "vulpterish",
        "people": [
            "https://swapi.co/api/people/48/"
        ],
        "films": [
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-20T09:57:33.128000Z",
        "edited": "2014-12-20T21:36:42.173000Z",
        "url": "https://swapi.co/api/species/17/"
    },
    {
        "name": "Xexto",
        "classification": "unknown",
        "designation": "sentient",
        "average_height": "125",
        "skin_colors": "grey, yellow, purple",
        "hair_colors": "none",
        "eye_colors": "black",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/40/",
        "language": "Xextese",
        "people": [
            "https://swapi.co/api/people/49/"
        ],
        "films": [
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-20T10:02:13.915000Z",
        "edited": "2014-12-20T21:36:42.175000Z",
        "url": "https://swapi.co/api/species/18/"
    },
    {
        "name": "Toong",
        "classification": "unknown",
        "designation": "sentient",
        "average_height": "200",
        "skin_colors": "grey, green, yellow",
        "hair_colors": "none",
        "eye_colors": "orange",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/41/",
        "language": "Tundan",
        "people": [
            "https://swapi.co/api/people/50/"
        ],
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T10:08:36.795000Z",
        "edited": "2014-12-20T21:36:42.177000Z",
        "url": "https://swapi.co/api/species/19/"
    },
    {
        "name": "Cerean",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "200",
        "skin_colors": "pale pink",
        "hair_colors": "red, blond, black, white",
        "eye_colors": "hazel",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/43/",
        "language": "Cerean",
        "people": [
            "https://swapi.co/api/people/52/"
        ],
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T10:15:33.765000Z",
        "edited": "2014-12-20T21:36:42.179000Z",
        "url": "https://swapi.co/api/species/20/"
    },
    {
        "name": "Nautolan",
        "classification": "amphibian",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "green, blue, brown, red",
        "hair_colors": "none",
        "eye_colors": "black",
        "average_lifespan": "70",
        "homeworld": "https://swapi.co/api/planets/44/",
        "language": "Nautila",
        "people": [
            "https://swapi.co/api/people/53/"
        ],
        "films": [
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-20T10:18:58.610000Z",
        "edited": "2014-12-20T21:36:42.181000Z",
        "url": "https://swapi.co/api/species/21/"
    },
    {
        "name": "Zabrak",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "pale, brown, red, orange, yellow",
        "hair_colors": "black",
        "eye_colors": "brown, orange",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/45/",
        "language": "Zabraki",
        "people": [
            "https://swapi.co/api/people/44/",
            "https://swapi.co/api/people/54/"
        ],
        "films": [
            "https://swapi.co/api/films/4/"
        ],
        "created": "2014-12-20T10:26:59.894000Z",
        "edited": "2014-12-20T21:36:42.183000Z",
        "url": "https://swapi.co/api/species/22/"
    },
    {
        "name": "Tholothian",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "unknown",
        "skin_colors": "dark",
        "hair_colors": "unknown",
        "eye_colors": "blue, indigo",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/46/",
        "language": "unknown",
        "people": [
            "https://swapi.co/api/people/55/"
        ],
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T10:29:13.798000Z",
        "edited": "2014-12-20T21:36:42.186000Z",
        "url": "https://swapi.co/api/species/23/"
    },
    {
        "name": "Iktotchi",
        "classification": "unknown",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "pink",
        "hair_colors": "none",
        "eye_colors": "orange",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/47/",
        "language": "Iktotchese",
        "people": [
            "https://swapi.co/api/people/56/"
        ],
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T10:32:13.046000Z",
        "edited": "2014-12-20T21:36:42.188000Z",
        "url": "https://swapi.co/api/species/24/"
    },
    {
        "name": "Quermian",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "240",
        "skin_colors": "white",
        "hair_colors": "none",
        "eye_colors": "yellow",
        "average_lifespan": "86",
        "homeworld": "https://swapi.co/api/planets/48/",
        "language": "Quermian",
        "people": [
            "https://swapi.co/api/people/57/"
        ],
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T10:34:50.827000Z",
        "edited": "2014-12-20T21:36:42.189000Z",
        "url": "https://swapi.co/api/species/25/"
    },
    {
        "name": "Kel Dor",
        "classification": "unknown",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "peach, orange, red",
        "hair_colors": "none",
        "eye_colors": "black, silver",
        "average_lifespan": "70",
        "homeworld": "https://swapi.co/api/planets/49/",
        "language": "Kel Dor",
        "people": [
            "https://swapi.co/api/people/58/"
        ],
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T10:49:21.692000Z",
        "edited": "2014-12-20T21:36:42.191000Z",
        "url": "https://swapi.co/api/species/26/"
    },
    {
        "name": "Chagrian",
        "classification": "amphibian",
        "designation": "sentient",
        "average_height": "190",
        "skin_colors": "blue",
        "hair_colors": "none",
        "eye_colors": "blue",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/50/",
        "language": "Chagria",
        "people": [
            "https://swapi.co/api/people/59/"
        ],
        "films": [
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T10:53:28.795000Z",
        "edited": "2014-12-20T21:36:42.193000Z",
        "url": "https://swapi.co/api/species/27/"
    },
    {
        "name": "Geonosian",
        "classification": "insectoid",
        "designation": "sentient",
        "average_height": "178",
        "skin_colors": "green, brown",
        "hair_colors": "none",
        "eye_colors": "green, hazel",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/11/",
        "language": "Geonosian",
        "people": [
            "https://swapi.co/api/people/63/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T16:40:45.618000Z",
        "edited": "2014-12-20T21:36:42.195000Z",
        "url": "https://swapi.co/api/species/28/"
    },
    {
        "name": "Mirialan",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "yellow, green",
        "hair_colors": "black, brown",
        "eye_colors": "blue, green, red, yellow, brown, orange",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/51/",
        "language": "Mirialan",
        "people": [
            "https://swapi.co/api/people/64/",
            "https://swapi.co/api/people/65/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T16:46:48.290000Z",
        "edited": "2014-12-20T21:36:42.197000Z",
        "url": "https://swapi.co/api/species/29/"
    },
    {
        "name": "Clawdite",
        "classification": "reptilian",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "green, yellow",
        "hair_colors": "none",
        "eye_colors": "yellow",
        "average_lifespan": "70",
        "homeworld": "https://swapi.co/api/planets/54/",
        "language": "Clawdite",
        "people": [
            "https://swapi.co/api/people/70/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T16:57:46.171000Z",
        "edited": "2014-12-20T21:36:42.199000Z",
        "url": "https://swapi.co/api/species/30/"
    },
    {
        "name": "Besalisk",
        "classification": "amphibian",
        "designation": "sentient",
        "average_height": "178",
        "skin_colors": "brown",
        "hair_colors": "none",
        "eye_colors": "yellow",
        "average_lifespan": "75",
        "homeworld": "https://swapi.co/api/planets/55/",
        "language": "besalisk",
        "people": [
            "https://swapi.co/api/people/71/"
        ],
        "films": [
            "https://swapi.co/api/films/5/"
        ],
        "created": "2014-12-20T17:28:28.821000Z",
        "edited": "2014-12-20T21:36:42.200000Z",
        "url": "https://swapi.co/api/species/31/"
    },
    {
        "name": "Kaminoan",
        "classification": "amphibian",
        "designation": "sentient",
        "average_height": "220",
        "skin_colors": "grey, blue",
        "hair_colors": "none",
        "eye_colors": "black",
        "average_lifespan": "80",
        "homeworld": "https://swapi.co/api/planets/10/",
        "language": "Kaminoan",
        "people": [
            "https://swapi.co/api/people/72/",
            "https://swapi.co/api/people/73/"
        ],
        "films": [
            "https://swapi.co/api/films/5/"
        ],
        "created": "2014-12-20T17:31:24.838000Z",
        "edited": "2014-12-20T21:36:42.202000Z",
        "url": "https://swapi.co/api/species/32/"
    },
    {
        "name": "Skakoan",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "unknown",
        "skin_colors": "grey, green",
        "hair_colors": "none",
        "eye_colors": "unknown",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/56/",
        "language": "Skakoan",
        "people": [
            "https://swapi.co/api/people/76/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T17:53:54.515000Z",
        "edited": "2014-12-20T21:36:42.204000Z",
        "url": "https://swapi.co/api/species/33/"
    },
    {
        "name": "Muun",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "190",
        "skin_colors": "grey, white",
        "hair_colors": "none",
        "eye_colors": "black",
        "average_lifespan": "100",
        "homeworld": "https://swapi.co/api/planets/57/",
        "language": "Muun",
        "people": [
            "https://swapi.co/api/people/77/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T17:58:19.088000Z",
        "edited": "2014-12-20T21:36:42.207000Z",
        "url": "https://swapi.co/api/species/34/"
    },
    {
        "name": "Togruta",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "red, white, orange, yellow, green, blue",
        "hair_colors": "none",
        "eye_colors": "red, orange, yellow, green, blue, black",
        "average_lifespan": "94",
        "homeworld": "https://swapi.co/api/planets/58/",
        "language": "Togruti",
        "people": [
            "https://swapi.co/api/people/78/"
        ],
        "films": [
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T18:44:03.246000Z",
        "edited": "2014-12-20T21:36:42.209000Z",
        "url": "https://swapi.co/api/species/35/"
    },
    {
        "name": "Kaleesh",
        "classification": "reptile",
        "designation": "sentient",
        "average_height": "170",
        "skin_colors": "brown, orange, tan",
        "hair_colors": "none",
        "eye_colors": "yellow",
        "average_lifespan": "80",
        "homeworld": "https://swapi.co/api/planets/59/",
        "language": "Kaleesh",
        "people": [
            "https://swapi.co/api/people/79/"
        ],
        "films": [
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T19:45:42.537000Z",
        "edited": "2014-12-20T21:36:42.210000Z",
        "url": "https://swapi.co/api/species/36/"
    },
    {
        "name": "Pau'an",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "190",
        "skin_colors": "grey",
        "hair_colors": "none",
        "eye_colors": "black",
        "average_lifespan": "700",
        "homeworld": "https://swapi.co/api/planets/12/",
        "language": "Utapese",
        "people": [
            "https://swapi.co/api/people/83/"
        ],
        "films": [
            "https://swapi.co/api/films/6/"
        ],
        "created": "2014-12-20T20:35:06.777000Z",
        "edited": "2014-12-20T21:36:42.212000Z",
        "url": "https://swapi.co/api/species/37/"
    },
    {
        "name": "Wookiee",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "210",
        "skin_colors": "gray",
        "hair_colors": "black, brown",
        "eye_colors": "blue, green, yellow, brown, golden, red",
        "average_lifespan": "400",
        "homeworld": "https://swapi.co/api/planets/14/",
        "language": "Shyriiwook",
        "people": [
            "https://swapi.co/api/people/13/",
            "https://swapi.co/api/people/80/"
        ],
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/7/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T16:44:31.486000Z",
        "edited": "2015-01-30T21:23:03.074598Z",
        "url": "https://swapi.co/api/species/3/"
    },
    {
        "name": "Droid",
        "classification": "artificial",
        "designation": "sentient",
        "average_height": "n/a",
        "skin_colors": "n/a",
        "hair_colors": "n/a",
        "eye_colors": "n/a",
        "average_lifespan": "indefinite",
        "homeworld": null,
        "language": "n/a",
        "people": [
            "https://swapi.co/api/people/2/",
            "https://swapi.co/api/people/3/",
            "https://swapi.co/api/people/8/",
            "https://swapi.co/api/people/23/",
            "https://swapi.co/api/people/87/"
        ],
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/7/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T15:16:16.259000Z",
        "edited": "2015-04-17T06:59:43.869528Z",
        "url": "https://swapi.co/api/species/2/"
    },
    {
        "name": "Human",
        "classification": "mammal",
        "designation": "sentient",
        "average_height": "180",
        "skin_colors": "caucasian, black, asian, hispanic",
        "hair_colors": "blonde, brown, black, red",
        "eye_colors": "brown, blue, green, hazel, grey, amber",
        "average_lifespan": "120",
        "homeworld": "https://swapi.co/api/planets/9/",
        "language": "Galactic Basic",
        "people": [
            "https://swapi.co/api/people/1/",
            "https://swapi.co/api/people/4/",
            "https://swapi.co/api/people/5/",
            "https://swapi.co/api/people/6/",
            "https://swapi.co/api/people/7/",
            "https://swapi.co/api/people/9/",
            "https://swapi.co/api/people/10/",
            "https://swapi.co/api/people/11/",
            "https://swapi.co/api/people/12/",
            "https://swapi.co/api/people/14/",
            "https://swapi.co/api/people/18/",
            "https://swapi.co/api/people/19/",
            "https://swapi.co/api/people/21/",
            "https://swapi.co/api/people/22/",
            "https://swapi.co/api/people/25/",
            "https://swapi.co/api/people/26/",
            "https://swapi.co/api/people/28/",
            "https://swapi.co/api/people/29/",
            "https://swapi.co/api/people/32/",
            "https://swapi.co/api/people/34/",
            "https://swapi.co/api/people/43/",
            "https://swapi.co/api/people/51/",
            "https://swapi.co/api/people/60/",
            "https://swapi.co/api/people/61/",
            "https://swapi.co/api/people/62/",
            "https://swapi.co/api/people/66/",
            "https://swapi.co/api/people/67/",
            "https://swapi.co/api/people/68/",
            "https://swapi.co/api/people/69/",
            "https://swapi.co/api/people/74/",
            "https://swapi.co/api/people/81/",
            "https://swapi.co/api/people/84/",
            "https://swapi.co/api/people/85/",
            "https://swapi.co/api/people/86/",
            "https://swapi.co/api/people/35/"
        ],
        "films": [
            "https://swapi.co/api/films/2/",
            "https://swapi.co/api/films/7/",
            "https://swapi.co/api/films/5/",
            "https://swapi.co/api/films/4/",
            "https://swapi.co/api/films/6/",
            "https://swapi.co/api/films/3/",
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T13:52:11.567000Z",
        "edited": "2015-04-17T06:59:55.850671Z",
        "url": "https://swapi.co/api/species/1/"
    },
    {
        "name": "Rodian",
        "classification": "sentient",
        "designation": "reptilian",
        "average_height": "170",
        "skin_colors": "green, blue",
        "hair_colors": "n/a",
        "eye_colors": "black",
        "average_lifespan": "unknown",
        "homeworld": "https://swapi.co/api/planets/23/",
        "language": "Galactic Basic",
        "people": [
            "https://swapi.co/api/people/15/"
        ],
        "films": [
            "https://swapi.co/api/films/1/"
        ],
        "created": "2014-12-10T17:05:26.471000Z",
        "edited": "2016-07-19T13:27:03.156498Z",
        "url": "https://swapi.co/api/species/4/"
    }
]

var starships = [
		{
			"name": "Executor",
			"model": "Executor-class star dreadnought",
			"manufacturer": "Kuat Drive Yards, Fondor Shipyards",
			"cost_in_credits": "1143350000",
			"length": "19000",
			"max_atmosphering_speed": "n/a",
			"crew": "279144",
			"passengers": "38000",
			"cargo_capacity": "250000000",
			"consumables": "6 years",
			"hyperdrive_rating": "2.0",
			"MGLT": "40",
			"starship_class": "Star dreadnought",
			"pilots": [],
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/3/"
			],
			"created": "2014-12-15T12:31:42.547000Z",
			"edited": "2017-04-19T10:56:06.685592Z",
			"url": "https://swapi.co/api/starships/15/"
		},
		{
			"name": "Sentinel-class landing craft",
			"model": "Sentinel-class landing craft",
			"manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
			"cost_in_credits": "240000",
			"length": "38",
			"max_atmosphering_speed": "1000",
			"crew": "5",
			"passengers": "75",
			"cargo_capacity": "180000",
			"consumables": "1 month",
			"hyperdrive_rating": "1.0",
			"MGLT": "70",
			"starship_class": "landing craft",
			"pilots": [],
			"films": [
				"https://swapi.co/api/films/1/"
			],
			"created": "2014-12-10T15:48:00.586000Z",
			"edited": "2014-12-22T17:35:44.431407Z",
			"url": "https://swapi.co/api/starships/5/"
		},
		{
			"name": "Death Star",
			"model": "DS-1 Orbital Battle Station",
			"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
			"cost_in_credits": "1000000000000",
			"length": "120000",
			"max_atmosphering_speed": "n/a",
			"crew": "342953",
			"passengers": "843342",
			"cargo_capacity": "1000000000000",
			"consumables": "3 years",
			"hyperdrive_rating": "4.0",
			"MGLT": "10",
			"starship_class": "Deep Space Mobile Battlestation",
			"pilots": [],
			"films": [
				"https://swapi.co/api/films/1/"
			],
			"created": "2014-12-10T16:36:50.509000Z",
			"edited": "2014-12-22T17:35:44.452589Z",
			"url": "https://swapi.co/api/starships/9/"
		},
		{
			"name": "Millennium Falcon",
			"model": "YT-1300 light freighter",
			"manufacturer": "Corellian Engineering Corporation",
			"cost_in_credits": "100000",
			"length": "34.37",
			"max_atmosphering_speed": "1050",
			"crew": "4",
			"passengers": "6",
			"cargo_capacity": "100000",
			"consumables": "2 months",
			"hyperdrive_rating": "0.5",
			"MGLT": "75",
			"starship_class": "Light freighter",
			"pilots": [
				"https://swapi.co/api/people/13/",
				"https://swapi.co/api/people/14/",
				"https://swapi.co/api/people/25/",
				"https://swapi.co/api/people/31/"
			],
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/7/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/"
			],
			"created": "2014-12-10T16:59:45.094000Z",
			"edited": "2014-12-22T17:35:44.464156Z",
			"url": "https://swapi.co/api/starships/10/"
		},
		{
			"name": "Y-wing",
			"model": "BTL Y-wing",
			"manufacturer": "Koensayr Manufacturing",
			"cost_in_credits": "134999",
			"length": "14",
			"max_atmosphering_speed": "1000km",
			"crew": "2",
			"passengers": "0",
			"cargo_capacity": "110",
			"consumables": "1 week",
			"hyperdrive_rating": "1.0",
			"MGLT": "80",
			"starship_class": "assault starfighter",
			"pilots": [],
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/"
			],
			"created": "2014-12-12T11:00:39.817000Z",
			"edited": "2014-12-22T17:35:44.479706Z",
			"url": "https://swapi.co/api/starships/11/"
		},
		{
			"name": "X-wing",
			"model": "T-65 X-wing",
			"manufacturer": "Incom Corporation",
			"cost_in_credits": "149999",
			"length": "12.5",
			"max_atmosphering_speed": "1050",
			"crew": "1",
			"passengers": "0",
			"cargo_capacity": "110",
			"consumables": "1 week",
			"hyperdrive_rating": "1.0",
			"MGLT": "100",
			"starship_class": "Starfighter",
			"pilots": [
				"https://swapi.co/api/people/1/",
				"https://swapi.co/api/people/9/",
				"https://swapi.co/api/people/18/",
				"https://swapi.co/api/people/19/"
			],
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/3/",
				"https://swapi.co/api/films/1/"
			],
			"created": "2014-12-12T11:19:05.340000Z",
			"edited": "2014-12-22T17:35:44.491233Z",
			"url": "https://swapi.co/api/starships/12/"
		},
		{
			"name": "TIE Advanced x1",
			"model": "Twin Ion Engine Advanced x1",
			"manufacturer": "Sienar Fleet Systems",
			"cost_in_credits": "unknown",
			"length": "9.2",
			"max_atmosphering_speed": "1200",
			"crew": "1",
			"passengers": "0",
			"cargo_capacity": "150",
			"consumables": "5 days",
			"hyperdrive_rating": "1.0",
			"MGLT": "105",
			"starship_class": "Starfighter",
			"pilots": [
				"https://swapi.co/api/people/4/"
			],
			"films": [
				"https://swapi.co/api/films/1/"
			],
			"created": "2014-12-12T11:21:32.991000Z",
			"edited": "2014-12-22T17:35:44.549047Z",
			"url": "https://swapi.co/api/starships/13/"
		},
		{
			"name": "Slave 1",
			"model": "Firespray-31-class patrol and attack",
			"manufacturer": "Kuat Systems Engineering",
			"cost_in_credits": "unknown",
			"length": "21.5",
			"max_atmosphering_speed": "1000",
			"crew": "1",
			"passengers": "6",
			"cargo_capacity": "70000",
			"consumables": "1 month",
			"hyperdrive_rating": "3.0",
			"MGLT": "70",
			"starship_class": "Patrol craft",
			"pilots": [
				"https://swapi.co/api/people/22/"
			],
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/5/"
			],
			"created": "2014-12-15T13:00:56.332000Z",
			"edited": "2014-12-22T17:35:44.716273Z",
			"url": "https://swapi.co/api/starships/21/"
		},
		{
			"name": "Imperial shuttle",
			"model": "Lambda-class T-4a shuttle",
			"manufacturer": "Sienar Fleet Systems",
			"cost_in_credits": "240000",
			"length": "20",
			"max_atmosphering_speed": "850",
			"crew": "6",
			"passengers": "20",
			"cargo_capacity": "80000",
			"consumables": "2 months",
			"hyperdrive_rating": "1.0",
			"MGLT": "50",
			"starship_class": "Armed government transport",
			"pilots": [
				"https://swapi.co/api/people/1/",
				"https://swapi.co/api/people/13/",
				"https://swapi.co/api/people/14/"
			],
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/3/"
			],
			"created": "2014-12-15T13:04:47.235000Z",
			"edited": "2014-12-22T17:35:44.795405Z",
			"url": "https://swapi.co/api/starships/22/"
		},
		{
			"name": "EF76 Nebulon-B escort frigate",
			"model": "EF76 Nebulon-B escort frigate",
			"manufacturer": "Kuat Drive Yards",
			"cost_in_credits": "8500000",
			"length": "300",
			"max_atmosphering_speed": "800",
			"crew": "854",
			"passengers": "75",
			"cargo_capacity": "6000000",
			"consumables": "2 years",
			"hyperdrive_rating": "2.0",
			"MGLT": "40",
			"starship_class": "Escort ship",
			"pilots": [],
			"films": [
				"https://swapi.co/api/films/2/",
				"https://swapi.co/api/films/3/"
			],
			"created": "2014-12-15T13:06:30.813000Z",
			"edited": "2014-12-22T17:35:44.848329Z",
			"url": "https://swapi.co/api/starships/23/"
		},
		{
            "name": "Calamari Cruiser", 
            "model": "MC80 Liberty type Star Cruiser", 
            "manufacturer": "Mon Calamari shipyards", 
            "cost_in_credits": "104000000", 
            "length": "1200", 
            "max_atmosphering_speed": "n/a", 
            "crew": "5400", 
            "passengers": "1200", 
            "cargo_capacity": "unknown", 
            "consumables": "2 years", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "60", 
            "starship_class": "Star Cruiser", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T10:54:57.804000Z", 
            "edited": "2014-12-22T17:35:44.957852Z", 
            "url": "https://swapi.co/api/starships/27/"
        }, 
        {
            "name": "A-wing", 
            "model": "RZ-1 A-wing Interceptor", 
            "manufacturer": "Alliance Underground Engineering, Incom Corporation", 
            "cost_in_credits": "175000", 
            "length": "9.6", 
            "max_atmosphering_speed": "1300", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "40", 
            "consumables": "1 week", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "120", 
            "starship_class": "Starfighter", 
            "pilots": [
                "https://swapi.co/api/people/29/"
            ], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T11:16:34.542000Z", 
            "edited": "2014-12-22T17:35:44.978754Z", 
            "url": "https://swapi.co/api/starships/28/"
        }, 
        {
            "name": "B-wing", 
            "model": "A/SF-01 B-wing starfighter", 
            "manufacturer": "Slayn & Korpil", 
            "cost_in_credits": "220000", 
            "length": "16.9", 
            "max_atmosphering_speed": "950", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "45", 
            "consumables": "1 week", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "91", 
            "starship_class": "Assault Starfighter", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T11:18:04.763000Z", 
            "edited": "2014-12-22T17:35:45.011193Z", 
            "url": "https://swapi.co/api/starships/29/"
        }, 
        {
            "name": "Republic Cruiser", 
            "model": "Consular-class cruiser", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "unknown", 
            "length": "115", 
            "max_atmosphering_speed": "900", 
            "crew": "9", 
            "passengers": "16", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "unknown", 
            "starship_class": "Space cruiser", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:01:31.488000Z", 
            "edited": "2014-12-22T17:35:45.027308Z", 
            "url": "https://swapi.co/api/starships/31/"
        }, 
        {
            "name": "Naboo fighter", 
            "model": "N-1 starfighter", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps", 
            "cost_in_credits": "200000", 
            "length": "11", 
            "max_atmosphering_speed": "1100", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "65", 
            "consumables": "7 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "Starfighter", 
            "pilots": [
                "https://swapi.co/api/people/11/", 
                "https://swapi.co/api/people/60/", 
                "https://swapi.co/api/people/35/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:39:17.582000Z", 
            "edited": "2014-12-22T17:35:45.079452Z", 
            "url": "https://swapi.co/api/starships/39/"
        }, 
        {
            "name": "Naboo Royal Starship", 
            "model": "J-type 327 Nubian royal starship", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives", 
            "cost_in_credits": "unknown", 
            "length": "76", 
            "max_atmosphering_speed": "920", 
            "crew": "8", 
            "passengers": "unknown", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "1.8", 
            "MGLT": "unknown", 
            "starship_class": "yacht", 
            "pilots": [
                "https://swapi.co/api/people/39/"
            ], 
            "films": [
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:45:03.506000Z", 
            "edited": "2014-12-22T17:35:45.091925Z", 
            "url": "https://swapi.co/api/starships/40/"
        }, 
        {
            "name": "Scimitar", 
            "model": "Star Courier", 
            "manufacturer": "Republic Sienar Systems", 
            "cost_in_credits": "55000000", 
            "length": "26.5", 
            "max_atmosphering_speed": "1180", 
            "crew": "1", 
            "passengers": "6", 
            "cargo_capacity": "2500000", 
            "consumables": "30 days", 
            "hyperdrive_rating": "1.5", 
            "MGLT": "unknown", 
            "starship_class": "Space Transport", 
            "pilots": [
                "https://swapi.co/api/people/44/"
            ], 
            "films": [
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-20T09:39:56.116000Z", 
            "edited": "2014-12-22T17:35:45.105522Z", 
            "url": "https://swapi.co/api/starships/41/"
        }, 
        {
            "name": "J-type diplomatic barge", 
            "model": "J-type diplomatic barge", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives", 
            "cost_in_credits": "2000000", 
            "length": "39", 
            "max_atmosphering_speed": "2000", 
            "crew": "5", 
            "passengers": "10", 
            "cargo_capacity": "unknown", 
            "consumables": "1 year", 
            "hyperdrive_rating": "0.7", 
            "MGLT": "unknown", 
            "starship_class": "Diplomatic barge", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-20T11:05:51.237000Z", 
            "edited": "2014-12-22T17:35:45.124386Z", 
            "url": "https://swapi.co/api/starships/43/"
        }, 
        {
            "name": "AA-9 Coruscant freighter", 
            "model": "Botajef AA-9 Freighter-Liner", 
            "manufacturer": "Botajef Shipyards", 
            "cost_in_credits": "unknown", 
            "length": "390", 
            "max_atmosphering_speed": "unknown", 
            "crew": "unknown", 
            "passengers": "30000", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "unknown", 
            "MGLT": "unknown", 
            "starship_class": "freighter", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-20T17:24:23.509000Z", 
            "edited": "2014-12-22T17:35:45.135987Z", 
            "url": "https://swapi.co/api/starships/47/"
        }, 
        {
            "name": "Jedi starfighter", 
            "model": "Delta-7 Aethersprite-class interceptor", 
            "manufacturer": "Kuat Systems Engineering", 
            "cost_in_credits": "180000", 
            "length": "8", 
            "max_atmosphering_speed": "1150", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "60", 
            "consumables": "7 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "Starfighter", 
            "pilots": [
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/58/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T17:35:23.906000Z", 
            "edited": "2014-12-22T17:35:45.147746Z", 
            "url": "https://swapi.co/api/starships/48/"
        },
		{
            "name": "H-type Nubian yacht", 
            "model": "H-type Nubian yacht", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps", 
            "cost_in_credits": "unknown", 
            "length": "47.9", 
            "max_atmosphering_speed": "8000", 
            "crew": "4", 
            "passengers": "unknown", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "0.9", 
            "MGLT": "unknown", 
            "starship_class": "yacht", 
            "pilots": [
                "https://swapi.co/api/people/35/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-20T17:46:46.847000Z", 
            "edited": "2014-12-22T17:35:45.158969Z", 
            "url": "https://swapi.co/api/starships/49/"
        }, 
        {
            "name": "Star Destroyer", 
            "model": "Imperial I-class Star Destroyer", 
            "manufacturer": "Kuat Drive Yards", 
            "cost_in_credits": "150000000", 
            "length": "1,600", 
            "max_atmosphering_speed": "975", 
            "crew": "47060", 
            "passengers": "0", 
            "cargo_capacity": "36000000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "60", 
            "starship_class": "Star Destroyer", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T15:08:19.848000Z", 
            "edited": "2014-12-22T17:35:44.410941Z", 
            "url": "https://swapi.co/api/starships/3/"
        }, 
        {
            "name": "Trade Federation cruiser", 
            "model": "Providence-class carrier/destroyer", 
            "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.", 
            "cost_in_credits": "125000000", 
            "length": "1088", 
            "max_atmosphering_speed": "1050", 
            "crew": "600", 
            "passengers": "48247", 
            "cargo_capacity": "50000000", 
            "consumables": "4 years", 
            "hyperdrive_rating": "1.5", 
            "MGLT": "unknown", 
            "starship_class": "capital ship", 
            "pilots": [
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/11/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T19:40:21.902000Z", 
            "edited": "2014-12-22T17:35:45.195165Z", 
            "url": "https://swapi.co/api/starships/59/"
        }, 
        {
            "name": "Theta-class T-2c shuttle", 
            "model": "Theta-class T-2c shuttle", 
            "manufacturer": "Cygnus Spaceworks", 
            "cost_in_credits": "1000000", 
            "length": "18.5", 
            "max_atmosphering_speed": "2000", 
            "crew": "5", 
            "passengers": "16", 
            "cargo_capacity": "50000", 
            "consumables": "56 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "transport", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T19:48:40.409000Z", 
            "edited": "2014-12-22T17:35:45.208584Z", 
            "url": "https://swapi.co/api/starships/61/"
        }, 
        {
            "name": "T-70 X-wing fighter", 
            "model": "T-70 X-wing fighter", 
            "manufacturer": "Incom", 
            "cost_in_credits": "unknown", 
            "length": "unknown", 
            "max_atmosphering_speed": "unknown", 
            "crew": "1", 
            "passengers": "unknown", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "unknown", 
            "MGLT": "unknown", 
            "starship_class": "fighter", 
            "pilots": [
                "https://swapi.co/api/people/86/"
            ], 
            "films": [
                "https://swapi.co/api/films/7/"
            ], 
            "created": "2015-04-17T06:58:50.614475Z", 
            "edited": "2015-04-17T06:58:50.614528Z", 
            "url": "https://swapi.co/api/starships/77/"
        }, 
        {
            "name": "Rebel transport", 
            "model": "GR-75 medium transport", 
            "manufacturer": "Gallofree Yards, Inc.", 
            "cost_in_credits": "unknown", 
            "length": "90", 
            "max_atmosphering_speed": "650", 
            "crew": "6", 
            "passengers": "90", 
            "cargo_capacity": "19000000", 
            "consumables": "6 months", 
            "hyperdrive_rating": "4.0", 
            "MGLT": "20", 
            "starship_class": "Medium transport", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T12:34:52.264000Z", 
            "edited": "2014-12-22T17:35:44.680838Z", 
            "url": "https://swapi.co/api/starships/17/"
        }, 
        {
            "name": "Droid control ship", 
            "model": "Lucrehulk-class Droid Control Ship", 
            "manufacturer": "Hoersch-Kessel Drive, Inc.", 
            "cost_in_credits": "unknown", 
            "length": "3170", 
            "max_atmosphering_speed": "n/a", 
            "crew": "175", 
            "passengers": "139000", 
            "cargo_capacity": "4000000000", 
            "consumables": "500 days", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "unknown", 
            "starship_class": "Droid control ship", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-19T17:04:06.323000Z", 
            "edited": "2014-12-22T17:35:45.042900Z", 
            "url": "https://swapi.co/api/starships/32/"
        }, 
        {
            "name": "Republic Assault ship", 
            "model": "Acclamator I-class assault ship", 
            "manufacturer": "Rothana Heavy Engineering", 
            "cost_in_credits": "unknown", 
            "length": "752", 
            "max_atmosphering_speed": "unknown", 
            "crew": "700", 
            "passengers": "16000", 
            "cargo_capacity": "11250000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "0.6", 
            "MGLT": "unknown", 
            "starship_class": "assault ship", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-20T18:08:42.926000Z", 
            "edited": "2014-12-22T17:35:45.171653Z", 
            "url": "https://swapi.co/api/starships/52/"
        }, 
        {
            "name": "Solar Sailer", 
            "model": "Punworcca 116-class interstellar sloop", 
            "manufacturer": "Huppla Pasa Tisc Shipwrights Collective", 
            "cost_in_credits": "35700", 
            "length": "15.2", 
            "max_atmosphering_speed": "1600", 
            "crew": "3", 
            "passengers": "11", 
            "cargo_capacity": "240", 
            "consumables": "7 days", 
            "hyperdrive_rating": "1.5", 
            "MGLT": "unknown", 
            "starship_class": "yacht", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-20T18:37:56.969000Z", 
            "edited": "2014-12-22T17:35:45.183075Z", 
            "url": "https://swapi.co/api/starships/58/"
        }, 
        {
            "name": "Republic attack cruiser", 
            "model": "Senator-class Star Destroyer", 
            "manufacturer": "Kuat Drive Yards, Allanteen Six shipyards", 
            "cost_in_credits": "59000000", 
            "length": "1137", 
            "max_atmosphering_speed": "975", 
            "crew": "7400", 
            "passengers": "2000", 
            "cargo_capacity": "20000000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "star destroyer", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T19:52:56.232000Z", 
            "edited": "2014-12-22T17:35:45.224540Z", 
            "url": "https://swapi.co/api/starships/63/"
        },
		{
            "name": "Naboo star skiff", 
            "model": "J-type star skiff", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated", 
            "cost_in_credits": "unknown", 
            "length": "29.2", 
            "max_atmosphering_speed": "1050", 
            "crew": "3", 
            "passengers": "3", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "0.5", 
            "MGLT": "unknown", 
            "starship_class": "yacht", 
            "pilots": [
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/35/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T19:55:15.396000Z", 
            "edited": "2014-12-22T17:35:45.258859Z", 
            "url": "https://swapi.co/api/starships/64/"
        }, 
        {
            "name": "Jedi Interceptor", 
            "model": "Eta-2 Actis-class light interceptor", 
            "manufacturer": "Kuat Systems Engineering", 
            "cost_in_credits": "320000", 
            "length": "5.47", 
            "max_atmosphering_speed": "1500", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "60", 
            "consumables": "2 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "starfighter", 
            "pilots": [
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/11/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T19:56:57.468000Z", 
            "edited": "2014-12-22T17:35:45.272349Z", 
            "url": "https://swapi.co/api/starships/65/"
        }, 
        {
            "name": "arc-170", 
            "model": "Aggressive Reconnaissance-170 starfighte", 
            "manufacturer": "Incom Corporation, Subpro Corporation", 
            "cost_in_credits": "155000", 
            "length": "14.5", 
            "max_atmosphering_speed": "1000", 
            "crew": "3", 
            "passengers": "0", 
            "cargo_capacity": "110", 
            "consumables": "5 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "100", 
            "starship_class": "starfighter", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T20:03:48.603000Z", 
            "edited": "2014-12-22T17:35:45.287214Z", 
            "url": "https://swapi.co/api/starships/66/"
        }, 
        {
            "name": "Belbullab-22 starfighter", 
            "model": "Belbullab-22 starfighter", 
            "manufacturer": "Feethan Ottraw Scalable Assemblies", 
            "cost_in_credits": "168000", 
            "length": "6.71", 
            "max_atmosphering_speed": "1100", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "140", 
            "consumables": "7 days", 
            "hyperdrive_rating": "6", 
            "MGLT": "unknown", 
            "starship_class": "starfighter", 
            "pilots": [
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/79/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T20:38:05.031000Z", 
            "edited": "2014-12-22T17:35:45.381900Z", 
            "url": "https://swapi.co/api/starships/74/"
        }, 
        {
            "name": "V-wing", 
            "model": "Alpha-3 Nimbus-class V-wing starfighter", 
            "manufacturer": "Kuat Systems Engineering", 
            "cost_in_credits": "102500", 
            "length": "7.9", 
            "max_atmosphering_speed": "1050", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "60", 
            "consumables": "15 hours", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "starfighter", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T20:43:04.349000Z", 
            "edited": "2014-12-22T17:35:45.396711Z", 
            "url": "https://swapi.co/api/starships/75/"
        }, 
        {
            "name": "CR90 corvette", 
            "model": "CR90 corvette", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "3500000", 
            "length": "150", 
            "max_atmosphering_speed": "950", 
            "crew": "165", 
            "passengers": "600", 
            "cargo_capacity": "3000000", 
            "consumables": "1 year", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "60", 
            "starship_class": "corvette", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T14:20:33.369000Z", 
            "edited": "2014-12-22T17:35:45.408368Z", 
            "url": "https://swapi.co/api/starships/2/"
        }, 
        {
            "name": "Banking clan frigate", 
            "model": "Munificent-class star frigate", 
            "manufacturer": "Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries", 
            "cost_in_credits": "57000000", 
            "length": "825", 
            "max_atmosphering_speed": "unknown", 
            "crew": "200", 
            "passengers": "unknown", 
            "cargo_capacity": "40000000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "cruiser", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T20:07:11.538000Z", 
            "edited": "2017-04-19T10:53:32.700283Z", 
            "url": "https://swapi.co/api/starships/68/"
        }
	]
*/
