console.log("This is js file for index.html");

const btn = document.querySelector(".btn-country");
let countriesContainer = document.querySelector(".countries");

function renderCountry(data, neighbour = "") {
  //   console.log(data.region);
  //   console.log(data.name.common);
  //   console.log(Object.values(data.currencies)[0].name);
  //   console.log(Object.values(data.currencies)[0].symbol);
  //   console.log(Object.values(data.languages)[1]);
  //   console.log(Object.entries(data.currencies)[0][1].name);
  const html = `<article class="country ${neighbour}">
                        <img class="country__img" src="${data.flags.png}" />
                        <div class="country__data">
                            <h3 class="country__name">${data.name.common}</h3>
                            <h4 class="country__region">${data.region}</h4>
                            <p class="country__row"><span>👫</span>${(
                              +data.population / 1000000
                            ).toFixed(1)} Millions</p>
                            <p class="country__row"><span>🗣️</span>${
                              Object.values(data.languages).length > 1
                                ? Object.values(data.languages)[1]
                                : Object.values(data.languages)[0]
                            }</p>
                            <p class="country__row"><span>💰</span>${
                              Object.values(data.currencies)[0].name
                            } ${Object.values(data.currencies)[0].symbol}</p>
                        </div>
                    </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

// function getCountryAndNeighbour(country) {
//   // AJAX call for country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   // https://restcountries.com/rest/v2/name/bharat
//   request.send();
//   request.addEventListener("load", () => {
//     console.log(request.status);
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     // console.log(data.borders[0]);
//     // Render country
//     renderCountry(data);
//     // Get the neighbour country
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     // AJAX call for country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     // One callback function inside another one
//     request2.addEventListener("load", () => {
//       const [data2] = JSON.parse(request2.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// }

// getCountryAndNeighbour("Bharat");
// getCountryAndNeighbour("usa");
// getCountryAndNeighbour("pakistan");
// getCountryAndNeighbour("germany");
// getCountryAndNeighbour("canada");

// -----------------------------------------------------------------------

// Fetch API using FetchAPI instead of XMLHttpRequest
// const request = fetch("https://restcountries.com/v3.1/name/bharat");
// console.log(request);

function renderError(errorMsg) {
  //   countriesContainer.insertAdjacentText("beforeend", erroMsg);
  countriesContainer.insertAdjacentText("beforeend", errorMsg);
  countriesContainer.style.opacity = 1;
}

// Helper function to fetch API
function getJSON(url, ErrorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${ErrorMsg} (${response.status})`);
    }
    return response.json();
  });
}

function getCountryData(country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      if (!data[0].borders) throw new Error("No neighbour found");

      const neighbour = data[0].borders[0];

      // if (!neighbour) return;
      //   console.log(neighbour);

      //   Country 2
      //   Here this will return new promise (Promises chaining)
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err} 😒😒😒`);
      renderError(`Something went wrong 😒😒😒 ${err} Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

// getCountryData("germany");
// btn.addEventListener("click", () => {
//   getCountryData("bharat");
// });

// getCountryData("sdfkjaflds");
// getCountryData("new zealand");
// getCountryData("australia");

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// getPosition().then((pos) => console.log(pos));

let whereIam = () => {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log(lat, lng);
      // https://geocode.xyz/${lat},${lng}?geoit=json
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=769283455157706691958x56367`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      console.log(`You are in ${data.state}, ${data.country}`);
      countriesContainer.insertAdjacentHTML(
        "beforebegin",
        `<h1 style='margin-bottom: 10px'>You are in ${data.state}, ${data.country}</h1>`
      );
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then((data) => {
      console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch((err) => console.log(`${err.message} 💥`));
};

btn.addEventListener("click", whereIam);
// KEY: 769283455157706691958x56367
// https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=769283455157706691958x56367

