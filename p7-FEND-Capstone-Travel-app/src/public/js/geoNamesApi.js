
const geonamesUrl = 'http://api.geonames.org/';
const geonamesKey = 'manpreetsingh';
const geonamesQuery = 'searchJSON?formatted=true&q=';

export default async function getGeoLocation(location) {
    const endpoint = geonamesUrl + geonamesQuery + location + '&username=' + geonamesKey + '&style=full'; 
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const location = {};
        const jsonRes = await response.json();
        //console.log(jsonRes);
        location.latitude = jsonRes.geonames[0].lat;
        location.longitude = jsonRes.geonames[0].lng;
        location.countryCode = jsonRes.geonames[0].countryCode;
  
        //console.log(location);
        return location;
      }
    } catch (error) {
      console.log(error);
    }
  }

  