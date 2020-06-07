import request from '../__mocks__/saveTripRequest';

const trip = {
  city: 'Paris',
  countryCode: 'FR',
  country: 'France'
};

const handleSave = async () => {
  const response = await request(trip);
  return response;
}

it('Should return an array that containt trip object', async function() {
  const response = await handleSave();
  expect(response[0].country).toEqual('France');
})