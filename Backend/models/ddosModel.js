import mongoose from "mongoose";
import moment from "moment-timezone";

const ddosAttackSchema = new mongoose.Schema({
  targetService: {
    type: String,
    required: true,
  },
  numberOfThreads: {
    type: String,
    required: true,
  },
  numberOfVMs: {
    type: String,
    required: true,
  },
  havocMode: {
    type: String,
    required: true,
  },
  stopTime: {
    type: String,
    required: false,
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

const ddosAttackModel = mongoose.model("ddosAttack", ddosAttackSchema);

export { ddosAttackModel as DDOSATTACKMODEL };
