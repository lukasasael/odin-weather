import "./styles.css";

document.getElementById("search-btn").onclick = async () => {
  const location = document.getElementById("location").value;
  const data = await getWeatherData(location);
  console.log(data);
  renderUI(data);
};

async function getWeatherData(location) {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=7864f6a2663e42cfa38125653240706&q=" +
        location,
      { mode: "cors" }
    );
    let weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Falied to get API data");
  }
}

function renderUI(data) {
  const page = document.getElementById("main");
  let dataArea = document.createElement("div");

  let place = document.createElement("h1");
  place.textContent =
    data.location.country +
    ", " +
    data.location.region +
    ", " +
    data.location.name;
  let weather = document.createElement("h2");
  weather.textContent = data.current.condition.text;
  //icon
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = document.createElement("h2");
  fullDate.innerHTML = day + ", " + month + ", " + year;

  //let hour = document.createElement("h2");
  let temperature = document.createElement("h1");
  temperature.textContent = data.current.dewpoint_c
  //let measurement = document.createElement("p");

  dataArea.appendChild(place);
  dataArea.appendChild(weather);
  dataArea.appendChild(fullDate);
  //dataArea.appendChild(hour);
  dataArea.appendChild(temperature);
  //dataArea.appendChild(measurement);
  page.appendChild(dataArea);
}
