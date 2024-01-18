async function submitData() {
	//To-do : get data of the specified country
	const url = 'https://covid-193.p.rapidapi.com/statistics?country=';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0c3c5a381dmsh78456a199024108p1329acjsndad4cfccf8f3',
			'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
		}
	};
	try {
		const countryFilter = document.getElementById("get-data").value
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
	let data = arr.response
	console.log(data[0])
	if (data[0]) {
		let value = 0
		data[0].cases.active == null ? value = 0 : value = data[0].cases.active
		document.getElementById("Active").innerHTML = value
		data[0].cases.new == null ? value = 0 : value = data[0].cases.new
		document.getElementById("New").innerHTML = "+" + value
		data[0].cases.total == null ? value = 0 : value = data[0].cases.total
		document.getElementById("Total").innerHTML = data[0].cases.total
		data[0].cases.recovered == null ? value = 0 : value = data[0].cases.recovered
		document.getElementById("Recovered").innerHTML = value
		data[0].deaths.total == null ? value = 0 : value = data[0].deaths.total
		document.getElementById("Deaths").innerHTML = value
		data[0].tests.total == null ? value = 0 : value = data[0].tests.total
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