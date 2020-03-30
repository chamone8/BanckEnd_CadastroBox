const connection = require('../database/connection');

module.exports = {

    async incident(req, res) {
        const { title, description, value } = req.body;
        const orgs_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            orgs_id
        });

        return res.json({ id });

    },

    async index(req, res){
        const {page = 1} = req.query;
        const [count] = await connection('incidents').count();
        
        const data = await connection('incidents')
        .join('orgs','orgs.id','=','incidents.orgs_id')
        .limit(5)
        .offset((page - 1) * 5)//logica pra pegar de 5 em 5 dados por pagina
        .select(['incidents.*','orgs.nome','orgs.email','orgs.whatsapp','orgs.city','orgs.uf']);
        
        res.header('X-Total-Count', count['count(*)']);//CRIANDO INFORMAÇÕES NO CABEÇALHOS

        return res.json({data});
    },

    async delete(req, res){
        const {id} = req.params;//pega o id do paramentro
        const ong_id = req.headers.authorization;//pega o id do usuario logado
        
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();//este select pega o usuario que estiver logado

        if(incident.ong_id != ong_id){//verifica se é o mesmo usuario
            
            return res.status(401).json({err: 'Operation not permitted'});
        }
        
        await connection('incidents').where('id', id).delete();//deleta o usuario

        return res.status(204).send("Excluido com sucesso")
    }
}