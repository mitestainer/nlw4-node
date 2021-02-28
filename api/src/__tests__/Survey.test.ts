import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('Users', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })
    it('should be able to create a new survey', async () => {
        const response = await request(app).post('/surveys').send({ title: 'example', description: 'desc' })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('id')
    })
    it('should be able to get all surveys', async () => {
        await request(app).post('/surveys').send({ title: 'example2', description: 'desc2' })
        const response = await request(app).get('/surveys')
        expect(response.body.length).toBe(2)
    })
})