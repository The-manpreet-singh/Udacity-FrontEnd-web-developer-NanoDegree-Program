
const url = 'http://api.geonames.org/';
const username = 'manpreetsingh';
const geonamesQuery = 'searchJSON?formatted=true&q=';

export default async function getGeoCity(city) {
    const endpoint = url + geonamesQuery + city + '&username=' + username + '&style=full'; 
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const city = {};
        const jsonRes = await response.json();
        //console.log(jsonRes);
        city.latitude = jsonRes.geonames[0].lat;
        city.longitude = jsonRes.geonames[0].lng;
        city.countryCode = jsonRes.geonames[0].countryCode;
  
        //console.log(city);
        return city;
      }
    } catch (error) {
      console.log(error);
    }
  }

  