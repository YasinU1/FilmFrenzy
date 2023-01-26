const express = require('express')
const port = 5000;

const app = express()

const films = {
    "users": ["Avatar", "Avenger:Endgame", "Bullet Train", "Dune", "Transformers: Dark of the Moon"]
}

app.get('/api', (request, response)=>{
    response.json(films)
})

app.listen(port, () => { console.log("Server started on port 5000") })