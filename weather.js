const inputCity =  document.getElementById("input-city");
const showTempBtn = document.getElementById("showTempBtn");

const resultTemprature =  document.getElementById("result-temprature");
const resultCity = document.getElementById("result-city");

// const showTemp2 = () => {
//     console.log('Button Clicked');
// };

showTempBtn.addEventListener('click', showTemp);

async function showTemp(){

    

    try {
        const data = await getData(inputCity.value);
    console.log(data);
    resultCity.innerText = `${data.location.name} , ${data.location.region} , ${data.location.country} `;
    resultTemprature.innerText = data.current.temp_c;
    } catch (error) {
        console.error(error);
    }
}



async function getData(cityLocation) {
    inputValidation();
    // const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityLocation}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9244c7743amsh8e02cc6d7f65a8dp167e01jsn001dc600f190',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        try {
            return await response.json();    
        } catch (error) {
            console.error(error);    
        }
        
    } catch (error) {
        console.error(error);
    }
}

function inputValidation(){
    const regex = /^[a-zA-Z]*$/g;
    console.log(inputCity.value);
    if(regex.test(inputCity.value)){
        alert('Enter a valid City Name');
        return;
    }

}
