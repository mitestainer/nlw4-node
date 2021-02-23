import express from 'express'
const app = express()

const port = process.env.PORT || 3333

app.get('/', (req, res) => {
    return res.json({ msg: 'Hello world - NLW04' })
})

app.post('/', (req, res) => {
    return res.json({ msg: 'Os dados foram salvos com sucesso!' })
})

app.listen(port, () => console.log(`Server is running on port ${port}!`))