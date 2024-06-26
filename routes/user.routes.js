const { Router } = require('express');
const { userGet, userGetByID, userPost, userPut, userDelete, userPatch } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { fieldsValidation } = require('../middlewares/fieldsValidation');
const { userExist } = require('../helpers/db-validators');

const router = Router();



router.get('/', userGet)

router.get('/:id', [
  check('id', 'ID no válida').isMongoId(),
  check('id').custom(userExist),
  fieldsValidation
], userGetByID)

router.post('/', [
  check('id', 'ID no válida').isMongoId(),
  check('fullName', 'El nombre es obligatorio').not().isEmpty(),
  check('userName', 'El nombre de usuario es obligatorio').not().isEmpty(),
  check('email', 'El correo es obligatorio').not().isEmpty(),
  check('email', 'Formato incorrecto de correo electrónico').isEmail(),
  check('password', 'La contraseña es obligatorio').not().isEmpty(),
  fieldsValidation
], userPost)

router.put('/:id', [
  check('id', 'ID no válida').isMongoId(),
  check('id').custom(userExist),
], userPut)

router.patch('/', userPatch)

router.delete('/:id', [
  check('id', 'ID no válida').isMongoId(),
  check('id').custom(userExist),
], userDelete)


module.exports = router;