const { Router } = require('express');
const { userGet, userGetByID, userPost, userPut, userDelete, userPatch } = require('../controllers/user.controller');

const router = Router();



router.get('/', userGet)

router.get('/:id', userGetByID)

router.post('/', userPost)

router.put('/:id', userPut)

router.patch('/', userPatch)

router.delete('/:id', userDelete)


module.exports = router;