const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const MedicosController  = require('../controllers/medicos' );

// definição das rotas
router.get   ('/usuarios', UsuariosController.listarUsuarios   ); 
router.post  ('/usuarios', UsuariosController.cadastrarUsuarios); 
router.patch ('/usuarios', UsuariosController.editarUsuarios   ); 
router.delete('/usuarios', UsuariosController.apagarUsuarios   ); 

router.get   ('/medicos' , MedicosController.listarMedicos  ); 
router.post  ('/medicos', MedicosController.cadastrarMedicos); 
router.patch ('/medicos', MedicosController.editarMedicos   ); 
router.delete('/medicos', MedicosController.apagarMedicos   ); 

module.exports = router;
