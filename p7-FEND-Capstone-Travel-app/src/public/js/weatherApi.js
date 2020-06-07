const weatherURL='https://api.weatherbit.io/v2.0/forecast/daily?';
const weatherKey= 'b3432a956d7b45a18ba374d67c837a2e';

 export default async function getWeatherForecast(latitude, longitude ) {
    const endpoint = weatherURL + `lat=${latitude}&lon=${longitude}&key=` +weatherKey;
     //console.log(endpoint);
    try {
      const response = await fetch('http://localhost:8080/forecast',
        {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: endpoint })
        });
      if (response.ok) {
       // const forecast={};
        const jsonRes = await response.json();
        return jsonRes;
      }
    } catch (error) {
      console.log(error);
    }
  }
  