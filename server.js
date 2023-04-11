 //requisição do banco de dados externo.
const express = require('express');
const app = express();

module.exports = () =>{
    const db = require('./db.json');
    const controller = {};

    controller.listDb = (req,res) => res.status(200).json(db);
    return controller;
}

app.listen(8080, () => {
    let data = new Date();
    console.log("servidor iniciado em: " + data);
    //console.log(db);
})
