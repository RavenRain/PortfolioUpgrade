 import { getStarshipsData, getSpeciesData } from './species.js' //import data get from API

 //add data to tables wait 10 sec to load data in to arrays
setTimeout(function(){ 
	if(getStarshipsData().length >1)
		addStarWarsTable(getStarshipsData(),"starwarsTable"); //add starships table
	if(getSpeciesData().length >1)
		addStarWarsTable(getSpeciesData(),"speciesTable"); //add species table
	myFunction(); //add portion of data
 }, 10000);
 
 //add tabel to HTML page
function addStarWarsTable(tableData,nameTable){
	var spp = tableData[0]; //get first data array in array
	var keys = Object.keys(spp); //get headings
	var valuesStar =  Object.values(spp); //get values

	var columns = keys.length; //get column length
	var table = document.getElementById(nameTable); //get the table where to set

	var tbl = document.createElement('table'); //create table element
	//tbl.style.width = '100%';
	tbl.setAttribute('border', '1','solid','white'); //add boarder
	var tbdy = document.createElement('tbody'); //create body
	var tr = document.createElement('tr'); //create row

	for (var i = 0; i< columns; i++) { 	  
		var td = document.createElement('th'); //create cell
		var splitStringName = keys[i].split("_"); //add heading name with formating
		var titleCol = "";
		//first letter is made to upper case if there are two parts both will be uppercase ...like "Name Last"
		if(splitStringName.length>1){
			titleCol = splitStringName[0].charAt(0).toUpperCase() + splitStringName[0].slice(1) + " " + splitStringName[1].charAt(0).toUpperCase() + splitStringName[1].slice(1);
			
		}else
			titleCol = keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
		
		td.appendChild(document.createTextNode(titleCol));  //add cell text
		tr.appendChild(td) //add to row
	  
	}
	tbdy.appendChild(tr); //add row to table body
	for (var i = 0; i < tableData.length; i++) {
		var tr = document.createElement('tr'); //create rows
		var valuesStar =  Object.values(tableData[i]); //get values of each row from array
		for (var j = 0; j < valuesStar.length; j++) {
			var td = document.createElement('td'); //create cell
			td.appendChild(document.createTextNode(valuesStar[j])); //add cell value
			tr.appendChild(td); //add cell to row
		}
		tbdy.appendChild(tr); //add row to table body
	}
	tbl.appendChild(tbdy); //add table body to table
	table.appendChild(tbl); //add created table to html table
	
}

//add portion of deatils from two tables
function myFunction() {
	var starwarsTable = document.querySelector("#starwarsTable"); //get starships table
	var RowsSt = starwarsTable.querySelectorAll("tr");	 //get starships table rows
	var table = document.getElementById("starwarsTable2"); //get table of portion of starships details	
	//6 can be change on preference
	for(var i=0;i<6;i++){
		table.innerHTML += RowsSt[i].innerHTML; //add 6 rows to new table
	}
	var starwarsTable = document.querySelector("#speciesTable");//get species table
	var RowsSp = starwarsTable.querySelectorAll("tr");	//get species table rows
	var tableSp = document.getElementById("speciesTable2");	//get table of portion of species details	
	for(var i=0;i<6;i++){
		tableSp.innerHTML += RowsSp[i].innerHTML;//add 6 rows to new table
	}
}




