import { getCity } from '../js/countDown';

test('should return Paris', () => {
  beforeEach(() => {
    document.body.innerHTML =
      '<div id="city">' + 'paris' + '</div>';
  });
  afterEach(() => {
    const city = getCity();
    expect(city).toEqual('Paris');
  });
})
