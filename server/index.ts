
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import fetch from 'isomorphic-fetch';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append("api-key", "2pLVyVoLai1QVk1AZwfAC1UvcueRt3mX9ha7J3SbQxIvbwmWij3WJgGqMlkd3Ix2");
myHeaders.append("Accept", "application/json");

const raw = JSON.stringify({
  "dataSource": "Cluster0",
  "database": "Films",
  "collection": "films",
  "filter": {}
});

const requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

app.get('/api', (req, res) => {
    fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptions)
        .then(res => res.json())
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log('error', error);
            res.status(500).send('Error: ' + error);
        });
});

app.get('/', (req: Request, res: Response) => {
res.send('<h1>Hello World From the Typescript Server!</h1>')
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});


interface FormInputs {
    email: string,
    password: string
  }

  // Array of example users for testing purposes
  const users = [
    {
      id: 1,
      name: 'Maria Doe',
      email: 'maria@example.com',
      password: 'maria123'
    },
    {
      id: 2,
      name: 'Juan Doe',
      email: 'juan@example.com',
      password: 'juan123'
    }
  ];

  // route login
  app.post('/login', (req: Request, res: Response) => {
    const { email, password }:FormInputs = req.body;

    const user = users.find(user => {
      return user.email === email && user.password === password
    });

    if (!user) {
      return res.status(404).send('User Not Found!')
    }

    return res.status(200).json(user)
  });

  