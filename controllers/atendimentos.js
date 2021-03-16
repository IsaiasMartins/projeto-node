const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Essa é a rota de atendimento'))

    app.post('/atendimentos', (req, res) => {
    const atendimento = req.body

    Atendimento.adiciona(atendimento)
    res.send('Você esta na rota de atendimento fazendo um POST')

    })
}


