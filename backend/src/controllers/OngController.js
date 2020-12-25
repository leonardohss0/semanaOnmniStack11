const { create } = require("domain");
const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    }, 

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        //Gerar um id de 4 bites de caracteres haxadecimais aleatórios
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id }); //retornar ID da ong
    }
};