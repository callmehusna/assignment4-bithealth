async function submitData() {
	//To-do : get data of the specified country
	const url = 'https://covid-193.p.rapidapi.com/statistics?country=';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
		}
	};
	try {
		const countryFilter = document.getElementById("get-data").value
		document.getElementById("warning-country").innerHTML = "Data for country \"" + countryFilter + "\" is not found"
		let countryUrl = url + countryFilter
		const response = await fetch(countryUrl, options);
		result = await response.json();
		//console.log("Ambil data");
		dataFilter(result)
	} catch (error) {
		console.error(error);
	}
}
function dataFilter(arr) {
	//console.log(countryFilter)
	//let data = arr.response.filter(item => item.country == countryFilter)
	let data = arr.response[0]
	console.log(data)
	if (data) {
		let value = 0
		data.cases.active == null ? value = 0 : value = data.cases.active
		document.getElementById("Active").innerHTML = value
		data.cases.new == null ? value = 0 : value = data.cases.new
		document.getElementById("New").innerHTML = value
		data.cases.total == null ? value = 0 : value = data.cases.total
		document.getElementById("Total").innerHTML = data.cases.total
		data.cases.recovered == null ? value = 0 : value = data.cases.recovered
		document.getElementById("Recovered").innerHTML = value
		data.deaths.total == null ? value = 0 : value = data.deaths.total
		document.getElementById("Deaths").innerHTML = value
		data.tests.total == null ? value = 0 : value = data.tests.total
		document.getElementById("Tests").innerHTML = value
	} else {
		//alert("Country not found")
		console.log("Not found");
		let myModal = new bootstrap.Modal(document.getElementById('myModal'), {
			keyboard: false
		  })
		myModal.show()		  
	}
}