const connection = require('../database/connection');

module.exports={
    async index(req, res){
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents')
        .where('orgs_id', ong_id)
        .select('*');//este select pega tudo cadastrado do usuario logado

        return res.json(incidents);
    }

}