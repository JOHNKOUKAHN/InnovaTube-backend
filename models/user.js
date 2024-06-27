const { Schema, model } = require('mongoose');

const userSchema = Schema({
  fullName: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  userName: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio']
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  favorites: {
    default: []
  }

})

userSchema.methods.toJSON = function () {
  const { __v, password, _id, ...user } = this.toObject();

  user.uid = _id;
  return user;
}
module.exports = model('User', userSchema)