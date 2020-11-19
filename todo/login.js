const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const login = require('./models/model1')
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

  app.get('/logindemo',(req,res)=>{res.send("In get '/logindemo'")});
  app.get('/getLogin',(req,res)=>{res.send(req.body)
     login.find()
     .then((data)=>res.send(data.body))
     .catch((err)=>console.log(err))
    })
  app.post('/createLogin',(req,res)=>{
    var temp =req.body;
    console.log("............"+temp.password);

    const hash = bcrypt.hashSync(temp.password, saltRounds);
    temp.password = hash;
    console.log("............"+temp.password);
    const newLogin = login(temp);
    newLogin.save()
    .then((data)=>console.log("Done!!!"))
    .catch((err)=>console.log(err))
  })
  app.get('/checkLogin/:userId/:password',(req,res)=>{
      login.findById(req.params.userid,(err,res)=>console.log(res))
      .then((data)=>{
        //   bcrypt.hash(req.params.password,bcrypt.hash,(err,result)=>{
        //       console.log("password correct  "+result);
        //   })

        // }
        // bcrypt.compare(req.params.password, hash).then(function(result) {
        //     // result == false
        //     console.log("password correct  "+result);
        //     })
        console.log(data);
        })
  .catch((err)=>console.log(err))
    });
  app.listen(7000,()=>{console.log("Listening at 7000")});
