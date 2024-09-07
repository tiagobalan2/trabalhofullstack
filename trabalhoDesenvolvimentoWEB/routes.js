const express = require('express');
const pessoaController = require('./controllers/PessoaController');

const router = express.Router();

router.post('/pessoas', pessoaController.createEndereco);
router.get('/pessoas', pessoaController.getAllPessoas);
router.get('/pessoas/:Id', pessoaController.getPessoaById);
router.put('/pessoas/:Id', pessoaController.updatePessoa);
router.delete('/pessoas/:Id', pessoaController.deletePessoa);

module.exports = router;