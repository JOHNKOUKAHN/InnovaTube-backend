const { Router } = require('express');

const router = Router();



router.get('/', (req, res) => {
  res.status(200).json({ ok: true, msg: "GET " })


})

router.get('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).json({ ok: true, id, msg: "GET by Id" })


})

router.post('/', (req, res) => {
  res.status(200).json({ ok: true, msg: "POST " })

})

router.put('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).json({ ok: true, id, msg: "PUT" })


})

router.patch('/', (req, res) => {
  res.status(200).json({ ok: true, msg: "PATCH" })

})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  res.status(200).json({ ok: true, id, msg: "DELETE" })

})


module.exports = router;