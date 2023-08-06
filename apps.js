const appElement = document.getElementById('app');

// Fetch countries from the API
async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country data:', error);
    return [];
  }
}

// Render list of countries
async function renderCountries() {
  const countries = await fetchCountries();

  const countriesList = document.createElement('div');
  countriesList.classList.add('countries-list');

  countries.forEach(country => {
    const countryElement = document.createElement('div');
    countryElement.classList.add('country');
    countryElement.textContent = country.name.common;

    countriesList.appendChild(countryElement);
  });

  appElement.innerHTML = '';
  appElement.appendChild(countriesList);
}

renderCountries();
