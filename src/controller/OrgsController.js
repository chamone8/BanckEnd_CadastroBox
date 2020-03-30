const express = require('express');
const crypto = require('crypto');
const connection = require('../database/connection');
module.exports ={


async  create(req, res){
    const  {nome, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection('orgs').insert({
        id,
        nome,
        email,
        whatsapp,
        city,
        uf
    });
        return res.json({id});
        
},
async index(req,res) {
    const dados = await connection('orgs').select('*');

    return res.json(dados);
}

//async function index


}