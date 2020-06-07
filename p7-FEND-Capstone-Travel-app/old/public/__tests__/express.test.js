const request = require('supertest');
import { app }from '../../server/server'


describe('Post Endpoints', () => {
  it('should save the trip', async () => {
    const res = await request(app)
      .post('/save')
      .send({
        city: 'TestCity'
      })
    expect(res.statusCode).toEqual(201);
  }),
  it('should route to index.html', async () => {
    const res = await request(app)
      .get('/')
      .send('./dist/index.html')
    expect(res.statusCode).toEqual(200);
  })
})