
const User = require('../models/user')

const userExist = async (id = '') => {
    const IdExists = await User.findById(id);
    if (!IdExists) {
        throw new Error(`Id no existe en la base de datos`)
    }
}

module.exports = {
    userExist,
}