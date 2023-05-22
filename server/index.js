const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const path = require('path');
const User = require("./models/User")
const registr = require('./midlleware/registr');
const https = require("https")
// const userRoutes = require('./routes/users');



mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true")
    .then((db => {
        console.log("Mongo Ulandi");

    }))

const app = express();


app.use(express.static('public'));
app.use(cors())
// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParse.json())


app.get("/", (req, res) => {
    res.json({ msg: "success" })
})

app.post('/registr', (req, res) => {
    const { fullName, password,email} = req.body;
    console.log(fullName, password,email); 

    const user =new  User({ fullName:fullName, password:password, email:email})
    user.save()
    .then(db=>{
       res.json({ success: db });
    })
    .catch(err=>{
        res.json({error:err})
    })
});

app.post("/login", (req,res)=>{
    const {email,password} = req.body; 
    console.log(email, password);

    User.findOne({password:password, email:email})
    .then(db=>{
        const {email, password} = db
        console.log(email, password,"Salom");
        if(email==email&&password==password){
            res.json({msg:"ok", id:db._id})
        }else{
            res.json({msg:"no"})
        }

    })
})



app.post("/autorization", (req,res)=>{
    let {userId} = req.body
 
    User.findById({_id:userId})
    .then(db=>{
        res.json({msg:"ok", user :db})
    })
    .catch(err=>{
        res.json({msg:"no"})

    })
})


// Qo'shimcha endpointlar va serverni ishga tushirish
// ...


app.listen(5000, () => {
    console.log("server is running");
})
