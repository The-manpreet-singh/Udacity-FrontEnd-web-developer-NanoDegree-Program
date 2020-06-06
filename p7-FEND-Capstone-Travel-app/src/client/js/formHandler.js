const _fetchGeoNames = async (zip = '325204') => {
    const url = `http://localhost:8081/geoNames?zip=${zip}`;
    return await fetch(url).then(response => response.json());
  };
  
  const handleGeonames = async () => {
    const prospectiveLocation = document.getElementById('input1');
  
    return await _fetchGeoNames(prospectiveLocation.value).then(response => {
      document.getElementById('latitude').textContent = response.lat;
      document.getElementById('longitude').textContent = response.lng;
      document.getElementById('country').textContent = response.countryCode;
      document.getElementById('placeName').textContent = response.placeName;
    });
  };
  
  const handleCountdown = () => {
    const startDate = new Date(document.getElementById('input2').value);
    const endDate = new Date(document.getElementById('input3').value);
  
    const time = new Date();
    const countdown = Math.ceil(startDate - time);
  
    const LoT = endDate.getTime() - startDate.getTime();
    const deadline = (document.getElementById('countdown').textContent =
      Math.ceil(countdown / 8.64e7) + ' Days to go!');
    const tripDuration = (document.getElementById('LoT').textContent =
      LoT / 8.64e7 + ' Day trip.');
  };
  
  const dateDifference = (startDate, endDate) => {
    return endDate.getTime() - startDate.getTime();
  };
  
  const _fetchDarkSky = async (lat, long, time) => {
    const url2 = `http://localhost:8081/darkSky?latitude=${lat}&longitude=${long}&time=${time}`;
    return await fetch(url2).then(response => {
      return response.json();
    });
  };
  
  const handleDarkSky = (time, daySinceStart) => {
    const lat = document.getElementById('latitude').textContent;
    const lng = document.getElementById('longitude').textContent;
  
    _fetchDarkSky(lat, lng, time).then(response => {
      const temperatureHighAndLowText = `Day ${daySinceStart + 1}: Highs of ${
        response.temperatureHigh
      }\u00B0\F Lows of ${response.temperatureLow}\u00B0\F & likely ${
        response.icon
      }. `;
      // const childText = document.createTextNode(`Day ${daySinceStart +1 }: ${response.temperatureHigh}\u00B0 ↑ ${response.temperatureLow}\u00B0 ↓ ${response.icon}. `);
      const child = document.createElement('li');
  
      child.innerHTML = temperatureHighAndLowText;
      document.getElementById('weather').appendChild(child);
    });
  };
  
  //Pixabay API fetch request
  const _fetchPixabay = async image => {
    const url3 = `http://localhost:8081/pixabay?image=${image}`;
    return await fetch(url3).then(response => {
      return response.json();
    });
  };
  
  const formHandler = event => {
    const weatherDiv = document.getElementById('weather');
    while (weatherDiv.firstChild) {
      weatherDiv.removeChild(weatherDiv.firstChild);
    }
  
    const imageDiv = document.getElementById('image');
    if (imageDiv.firstChild) {
      imageDiv.removeChild(imageDiv.firstChild);
    }
  
    handleCountdown();
  
    handleGeonames().then(response => {
      const startDate = new Date(document.getElementById('input2').value);
      const endDate = new Date(document.getElementById('input3').value);
      const countdownInDays = dateDifference(startDate, endDate) / 8.64e7;
  
      let currentDate = new Date(startDate);
      for (let i = 0; i < countdownInDays; i++) {
        const time = currentDate.getTime() / 1000;
        handleDarkSky(time, i);
        currentDate.setDate(currentDate.getDate() + 1);
      }
  
      const placeName = document.getElementById('placeName').textContent;
  
      _fetchPixabay(placeName).then(response => {
        const image = document.createElement('img');
        image.src = response;
  
        document.getElementById('image').appendChild(image);
      });
    });
  };
  
  export default formHandler;
  