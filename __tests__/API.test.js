const { app } = require('../server/server.js');
const request = require('request');

describe('GET / ', async () => {
  it('Should return a "Hello World" message', () => {
    const response = await request(app).get('/');
    expect(response.body).toEqual('Hello World!');
  });
})
