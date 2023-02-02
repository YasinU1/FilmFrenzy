"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
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
const requestOptions = {
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
const requestOptionsCustomers = {
    method: 'POST',
    headers: myHeaders,
    body: rawCustomers,
    redirect: 'follow'
};
app.get('/api', (req, res) => {
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptions)
        .then(res => res.json())
        .then(data => {
        res.json(data);
    })
        .catch(error => {
        console.log('error', error);
        res.status(500).send('Error: ' + error);
    });
});
app.get('/users', (req, res) => {
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsCustomers)
        .then(res => res.json())
        .then(data => {
        res.json(data);
    })
        .catch(error => {
        console.log('error', error);
        res.status(500).send('Error: ' + error);
    });
});
app.get('/', (req, res) => {
    res.send('<h1>Hello World From the Typescript Server!</h1>');
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
let customerArray = [];
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get('http://localhost:8000/users');
        customerArray = res.data.documents.map((customer) => {
            return {
                _id: customer._id,
                name: customer.fname + " " + customer.sname,
                email: customer.email,
                password: customer.password
            };
        });
    });
}
fetchData();
// route login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = customerArray.find(user => {
        return user.email === email && user.password === password;
    });
    if (!user) {
        return res.status(404).send('User Not Found!');
    }
    return res.status(200).json(user);
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
// Generate a new id using a library like uuid
const crypto_1 = __importDefault(require("crypto"));
const newId = crypto_1.default.randomBytes(12).toString('hex');
const raw = JSON.stringify({
    "dataSource": "Cluster0",
    "database": "Films",
    "collection": "customers",
    "document": {
        "_id": {
            "$oid": newId
        },
        "fname": "Test 1",
        "sname": "T",
        "DOB": "222222",
        "email": "john@example.com",
        "username": "livmcandrew",
        "password": "password"
    }
});
const requestOptionsAddCustomers = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
app.get('/addusers', (req, res) => {
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/insertOne", requestOptionsAddCustomers)
        .then(res => res.json())
        .then(data => {
        res.json(data);
    })
        .catch(error => {
        console.log('error', error);
        res.status(500).send('Error: ' + error);
    });
});
