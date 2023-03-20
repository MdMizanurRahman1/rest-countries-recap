const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {

    const countriesHTML = countries.map(country => getCountriesHTML(country))

    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}



const getCountriesHTML = country => {
    const { name, flags } = country;
    return `
    <div class="country">
    <h2>${name.common}</h2>
    <img src="${flags.png}">

    </div>
    
    `;
}


loadCountries();