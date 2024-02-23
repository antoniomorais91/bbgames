import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor insira um nome."],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Por favor insira um e-mail."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Por favor insira uma senha."],
  },
  birthday: {
    type: Date,
    required: [true, "Por favor preencha a data de nascimento"],
  },
  country: {
    type: String,
    required: [true, "Por favor insira um país."],
  },
  state: {
    type: String,
    required: [true, "Por favor insira um estado."],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
