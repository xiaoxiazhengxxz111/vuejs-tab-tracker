// const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
// promisifyAll takes all typical function which has a callback struture and wrap it to allow us to use promise format

// function hashPassword (user, options) {
//   const SALT_FACTOR = 8
//   if (!user.changer('password')) {
//     return
//   }
//   return bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     .then(hash => user.setDataValue('password', hash))
// }

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    // before to save the use obj, need to hash pwd
    hooks: {
      // beforeCreate: hashPassword,
      // beforeUpdate: hashPassword,
      // beforeSave: hashPassword
    }
  })

  // User.prototype.comparePassword = function (password) {
  //   // compare pwd param with model pwd
  //   return bcrypt.compareAsync(password, this.password)
  // }

  User.associate = function (models) {
  }

  return User
}
