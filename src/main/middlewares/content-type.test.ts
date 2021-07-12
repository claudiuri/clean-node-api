import request from 'supertest'
import app from '../config/app'

describe('Content Type Middleware', () => {
  test('Schould return default content type as josn', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })

  test('Schould reutnr xml content type when forced', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml')
      res.send(req.body)
    })
    await request(app)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/)
  })
})
