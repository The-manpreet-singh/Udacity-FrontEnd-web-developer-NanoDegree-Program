

export default async function getCountryInfo(countryCode) {
    const endpoint = `https://restcountries.eu/rest/v2/alpha/${countryCode}`
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonRes = await response.json();
        return {
                 name: jsonRes.name,
                 flag: jsonRes.flag
              }
      }
    } catch (error) {
      console.log(error);
    }
  }