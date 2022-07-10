const knex = require('../conexao');


const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');

const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ Mensagem: 'Ainda não autorizado - você deve primeiro cadastrar um usuario, fazer login e enviar o token' });
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, senhaHash);

        const dados = await knex('usuarios').where('id', id);

        if (dados.length === 0) {
            return res.status(404).json("O usuario não foi encontrado");
        }

        const { senha, ...usuario } = dados[0];

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verificaLogin