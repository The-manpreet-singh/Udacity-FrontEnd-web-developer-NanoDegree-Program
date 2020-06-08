
const weatherKey= 'b3432a956d7b45a18ba374d67c837a2e';

 export async function getWeatherForecast(latitude, longitude ) {
    const endpoint ='https://api.weatherbit.io/v2.0/forecast/daily?' + `lat=${latitude}&lon=${longitude}&key=` +weatherKey;
     //console.log(endpoint);
    try {
      const res = await fetch('http://localhost:8080/forecast',
        {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: endpoint })
        });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
  