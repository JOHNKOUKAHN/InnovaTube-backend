const user = require("../models/user");
const User = require("../models/user");
const bcryptjs = require('bcryptjs');


const login = async (req, res) => {

  const { userName, password } = req.body


  try {

    let user = await User.findOne({ userName })
    if (!user) {
      user = await User.findOne({ email: userName })
      if (!user) {
        return res.status(400).json({
          msg: 'Usuario y/o contraseña incorrectos'
        });
      }
    }


    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'Usuario y/o contraseña incorrectos'
      });
    }

    res.json({
      ok: true,
      msg: 'Sesion iniciada exitosamente',
      user,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: 'Contacte al administrador'
    });
  }

}


module.exports = {
  login
}
