"use strict";
// const express = require('express')
// const path = require("path");
// const port = 5000;
// const app = express()
// const cors = require('cors');
// app.use(cors());
// const films = {
//     "users": ["Avatar", "Avenger:Endgame", "Bullet Train", "Dune", "Transformers: Dark of the Moon"]
// }
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Access-Control-Request-Headers", "*");
// myHeaders.append("api-key", "2pLVyVoLai1QVk1AZwfAC1UvcueRt3mX9ha7J3SbQxIvbwmWij3WJgGqMlkd3Ix2");
// myHeaders.append("Accept", "application/json");
// var raw = JSON.stringify({
//   "dataSource": "Cluster0",
//   "database": "Films",
//   "collection": "films",
//   "filter": {}
// });
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };
// app.get('/api', (req, res) => {
//     fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptions)
//         .then(res => res.json())
//         .then(data => {
//             response.json(data)
//         })
//         .catch(error => {
//             console.log('error', error);
//             response.status(500).send('Error: ' + error);
//         });
// });
// app.listen(port, () => {
//     console.log("Server started on port 5000") })
// const users = [
//     {
//         id: 1,
//         name: 'Maria Doe',
//         email: 'maria@example.com',
//         password: 'maria123'
//     },
//     {
//         id: 2,
//         name: 'Juan Doe',
//         email: 'juan@example.com',
//         password: 'juan123'
//     }
//     ];
//     // route login
//     app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const user = users.find(user => {
//         return user.email === email && user.password === password
//     });
//     if (!user) {
//         return res.status(404).send('User Not Found!')
//     }
//     return res.status(200).json(user)
//     });
