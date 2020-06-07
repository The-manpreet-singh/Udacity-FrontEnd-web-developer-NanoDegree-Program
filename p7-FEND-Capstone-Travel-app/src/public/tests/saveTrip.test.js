import api from '../mocks/saveTripRequest';

const trip = {
  city: 'Paris',
  countryCode: 'FR',
  country: 'France'
};

const handleSave = async () => {
  const response = await api(trip);
  return response;
}

it('Should return an array that containt trip object', async function() {
  const response = await handleSave();
  expect(response[0].country).toEqual('France');
})