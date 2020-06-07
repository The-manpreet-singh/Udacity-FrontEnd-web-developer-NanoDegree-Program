function buttonHandler(event) {
    document.getElementById('country').textContent = '';
    document.getElementById('placeName').textContent = '';
    document.getElementById('LoT').textContent = '';
    document.getElementById('countdown').textContent = '';
  
    const weatherDiv = document.getElementById('weather');
    while (weatherDiv.firstChild) {
      weatherDiv.removeChild(weatherDiv.firstChild);
    }
  
    const imageDiv = document.getElementById('image');
    if (imageDiv.firstChild) {
      imageDiv.removeChild(imageDiv.firstChild);
    }
  }
  
  export default buttonHandler;
  