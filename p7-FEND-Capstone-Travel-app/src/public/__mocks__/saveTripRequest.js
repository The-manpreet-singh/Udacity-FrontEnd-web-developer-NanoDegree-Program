const trips = [];

export default function request(trip) {
  return new Promise((resolve, reject) => {
    // const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() => {
      if (trip) {
        trips.push(trip);
        resolve(trips)
      } else {
        reject({
          error: 'Bad Request',
        });
      }
    });
  });
}
