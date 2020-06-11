

export async function getCountryInfo(countryCode) {
    const endpoint = `https://restcountries.eu/rest/v2/alpha/${countryCode}`
    try {
      const res = await fetch(endpoint);
      if (res.ok) {
        const data = await res.json();
        return {
                 name: data.name,
                 flag: data.flag
              }
      }
    } catch (error) {
      console.log(error);
    }
  }