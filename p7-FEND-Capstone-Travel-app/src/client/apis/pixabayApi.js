

const pixabayKey = '13922659-0b80b0f115dd3a353e0647b73';

export async function getImageURL(city, country) {
    const queryCity = `&q=${city}&image_type=photo&pretty=true&category=places`;
    const queryCountry = `&q=${country}&image_type=photo&pretty=true&category=places`;
    const cityEndpoint = 'https://pixabay.com/api/?key=' + pixabayKey + queryCity;
    const countryEndpoint = 'https://pixabay.com/api/?key=' + pixabayKey + queryCountry;
    try {
      let response = await fetch(cityEndpoint);
      //console.log(response);
      if (response.ok) {
        let jsonRes = await response.json();
        if (jsonRes.totalHits === 0) {
          // If not, display pictures for the country
          response = await fetch(countryEndpoint);
          if (response.ok) {
            jsonRes = await response.json();
            return jsonRes.hits[0].largeImageURL;
          }
        }
        // console.log(jsonRes);
        // console.log(jsonRes.hits[0].largeImageURL);
        return jsonRes.hits[0].largeImageURL;
      }
    } catch (error) {
      console.log(error);
    }
  }