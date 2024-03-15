import mongoose from "mongoose";
import moment from "moment-timezone";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  organizationID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").toDate(),
    required: true,
  },
  updatedAt: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").toDate(),
    required: false,
  },
});

const userModel = mongoose.model("user", userSchema);

export { userModel as USERMODEL };
