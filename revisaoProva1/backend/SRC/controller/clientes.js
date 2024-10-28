const con = require('../connect/banco').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;

    let query = `INSERT INTO clientes(nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES`
    query += `('${nome}', '${cpf}', '${email}', '${endereco}', '${data_nascimento}', '${data_cadastro}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;

    let query = `UPDATE clientes SET nome='${nome}', cpf='${cpf}', email='${email}', endereco='${endereco}', data_nascimento='${data_nascimento}', data_cadastro='${data_cadastro}' WHERE cliente_id = ${id}`;

    con.query(query, (err, result) => {
    if (err) {
        res.status(500).json(err)
    } else {
        res.status(200).json(result)
    }
})
}

const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query(`DELETE FROM clientes WHERE cliente_id = ${id}`, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}