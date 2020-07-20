const getCity = () => {
  
  let city = document.getElementById('city').value;

  city = city.toLowerCase();
  city = city[0].toUpperCase() + city.slice(1);

  console.log(city);

  return city;
}

const getTripStart = () => {

  const date = document.getElementById('date_start').value.split('-');

  return date.join('-');
}

const getTripEnd = () => {
  const date = document.getElementById('date_end').value.split('-');

  return date.join('-');
}

const countdown = (start, end) => {

  const tripStart = Date.parse(start);
  const tripEnd = Date.parse(end);

  const countdown = tripEnd - tripStart;

  const daysLeft = Math.ceil(countdown / 86400000);

  //console.log(daysLeft);

  return daysLeft;
}

export { getCity, getTripStart, getTripEnd, countdown};