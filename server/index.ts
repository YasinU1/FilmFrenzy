
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import fetch from 'isomorphic-fetch';
import axios from 'axios';


dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append("api-key", "2pLVyVoLai1QVk1AZwfAC1UvcueRt3mX9ha7J3SbQxIvbwmWij3WJgGqMlkd3Ix2");
myHeaders.append("Accept", "application/json");

const rawFilms = JSON.stringify({
  "dataSource": "Cluster0",
  "database": "Films",
  "collection": "films",
  "filter": {}
});

const requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: rawFilms,
  redirect: 'follow'
};
const rawCustomers = JSON.stringify({
  "dataSource": "Cluster0",
  "database": "Films",
  "collection": "customers",
  "filter": {}
});

const requestOptionsCustomers: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: rawCustomers,
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

app.get('/users', (req, res) => {
  fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsCustomers)
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




let customerArray: any[] = [];

async function fetchData() {
  const res = await axios.get('http://localhost:8000/users');
  customerArray = res.data.documents.map((customer: {_id: string, fname: string, sname: string, email: string,password: string}) => {
    return {
      _id: customer._id,
      name: customer.fname + " " + customer.sname,
      email: customer.email,
      password: customer.password
    }
  });
}
fetchData();
interface FormInputs {
    email: string,
    password: string
  }

// route login
app.post('/login', (req: Request, res: Response) => {
  const { email, password }:FormInputs = req.body;

  const user = customerArray.find(user => {
    return user.email === email && user.password === password
  });

  if (!user) {
    return res.status(404).send('User Not Found!')
  }

  return res.status(200).json(user)
});


//   {
//     "documents": [
  //       {
  //       "_id":"63d26638277f5d6c986844f2",
  //       "fname":"Olivia",
  //       "sname":"McAndrew",
  //       "DOB":"100999",
  //       "email":"olivia.mca@gmail.com",
  //       "username":"livmcandrew",
  //       "password":123456
  //     }
  //   ]
  // }
  

  // [{"id":1,"name":"Maria Doe","email":"maria6@example.com","password":"maria123"}]
  // [{"_id":"1","name":"Olivia McAndrew","email":"olivia@example.com","password":"liv123"}]