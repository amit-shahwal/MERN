const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Todo = require('./models/model');
const axios = require('axios');
const dbConfig = require('./config/databaseConfig');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.use(cors({
    credentials:true,
    origin: ['http://localhost:PORT']
  }));

app.get('/',(req,res)=>{res.send("In get '/'")});

app.get('/todo',(req,res)=>{
    Todo.find()
    .then((data)=>res.send(data))
    .catch((err)=>console.log("Err"))
})
app.post('/addTodo',(req,res)=>{
   
}
)
// async function makeGetRequest() {

//     let res = await axios.get('http://localhost:3000/');
  
//     let data = res.data;
//     console.log(data.message);
//   }
  
// async function makePostRequest() {

//     let res = await axios.post('https://jsonplaceholder.typicode.com/posts');

//     console.log(`Status code: ${res.status}`);
//     console.log(`Status text: ${res.statusText}`);
//     console.log(`Request method: ${res.request.method}`);
//     console.log(`Path: ${res.request.path}`);
//     console.log(`Date: ${res.headers.date}`);
//     console.log(`Data: ${res.data}`);
// }


//   makeGetRequest();
//   makePostRequest();



app.listen(5000,()=>{console.log("Listening at 5000")});