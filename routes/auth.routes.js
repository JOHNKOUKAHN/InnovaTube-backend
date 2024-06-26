const { Router } = require('express');
const { login } = require('../controllers/auth.controller');
const { fieldsValidation } = require('../middlewares/fieldsValidation');
const { check } = require('express-validator');

const router = Router();

router.post('/', [
  check('userName', 'Nombre de usuario o correo obligatorio').not().isEmpty(),
  check('password', 'Contraseña obligatoria').not().isEmpty(),
  fieldsValidation,
], login)


module.exports = router
