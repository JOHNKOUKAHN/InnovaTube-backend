const { response } = require("express");
const User = require("../models/user");

const userGet = async (req, res = response) => {
  try {

    const { limite = 15, desde = 0 } = req.query;

    const [total, users] = await Promise.all([
      User.countDocuments(),
      User.find()
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    res.json({
      ok: true,
      total,
      users
    });


  } catch (error) {

    console.log(error);
    return res.status(500).json({
      ok: false,
      errorMsg: 'Contacte al administrador',
      error
    });
  }

}

const userGetByID = async (req, res) => {

  try {

    const { id } = req.params;
    const user = await User.findById(id);

    return res.json({
      ok: true,
      msg: 'put vito controlador',
      user
    });

  } catch (error) {

    console.log(error);
    return res.status(500).json({
      ok: false,
      errorMsg: 'Contacte al administrador',
      error
    });
  }

}

const userPost = async (req, res) => {
  try {
    const { fullName, userName, password, role, email } = req.body;
    const user = new User({ fullName, userName, password, email });


    await user.save();

    res.json({
      ok: true,
      msg: 'post InnovaTuve controlador',
      user
    });


  } catch (error) {

    console.log(error);
    return res.status(500).json({
      ok: false,
      errorMsg: 'Contacte al administrador',
      error
    });
  }
}

const userPut = async (req, res) => {
  try {

    const { id } = req.params;
    const { _id, ...rest } = req.body;
    const user = await User.findByIdAndUpdate(id, rest);

    res.json({
      ok: true,
      msg: 'put InnovaTuve controlador',
      user
    });

  } catch (error) {

    console.log(error);
    return res.status(500).json({
      ok: false,
      errorMsg: 'Contacte al administrador',
      error
    });

  }
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
