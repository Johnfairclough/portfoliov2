
window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDecription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimeZone = document.querySelector('.location-timezone');
  let temperatureSection = document.querySelector('.temperature');
  const temperatureSpan = document.querySelector('.temperature span')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/e498db8a915aadf57590431baf392d68/${lat},${long}?units=si`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const {temperature, summary, icon} = data.currently;
        // set Dom Elements from the api

        temperatureDegree.textContent = Math.floor(temperature);


        temperatureDecription.textContent = summary;
        locationTimeZone.textContent = data.timezone;

        // set icon
        setIcons(icon, document.querySelector('.icon'));

      });
    });
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({color: "orange"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }

});
