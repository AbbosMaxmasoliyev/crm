const express = require("express")
const app = express()
const Account = require("../models/User")

const registr = async (req, res) => {
    const { username, email, password } = req.body
    console.log(req.body);

    //   const user =new Account({ username: username, password:password, email:email})
    //     user.save().then((db) => {
    //         res.status(200).json({ message: 'Muvaffaqqiyatli saqlandi', msg: db });
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         res.status(500).json({ error: 'Muvaffaqqiyatsiz' });
    //     });
    res.json({msg:"success"})







}


module.exports = registr