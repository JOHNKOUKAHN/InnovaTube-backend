const { response } = require("express");

const userGet = async (req, res = response) => {

  res.json({
    ok: true,
    msg: "GET Users Controller",
  })

}

const userGetByID = async (req, res) => {
  const id = req.params.id
  res.status(200).json({ ok: true, id, msg: "GET by Id Controller" })
}

const userPost = async (req, res) => {
  const body = req.body
  res.status(200).json({ ok: true, body, msg: "POST User Controller" })
}

const userPut = async (req, res) => {
  const id = req.params.id
  const body = req.body
  res.status(200).json({ ok: true, id, body, msg: "PUT user Controller" })
}

const userDelete = async (req, res) => {
  const id = req.params.id
  res.status(200).json({ ok: true, id, msg: "DELETE user Controller" })
}

const userPatch = async (req, res) => {
  res.status(200).json({ ok: true, msg: "PATCH User Controller" })

}




module.exports = {
  userGet,
  userGetByID,
  userPost,
  userPut,
  userPatch,
  userDelete
}
