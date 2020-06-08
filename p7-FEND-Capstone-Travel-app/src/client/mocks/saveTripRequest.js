const trips = [];

export default function api(trip) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (trip) {
        trips.push(trip);
        resolve(trips)
      } else {
        reject({
          error: 'Bad api',
        });
      }
    });
  });
}
