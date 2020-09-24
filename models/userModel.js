const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const userSchema = new Schema({
  User: String,
  Password: { type: String, select: false },
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Admin = mongoose.model('admin', userSchema);

module.exports = Admin;
