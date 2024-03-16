import express from "express";

import {
  CREATEDDOSATTACK,
  UPDATEDDOSATTACK,
  READDDOSATTACK,
  DELETEDDOSATTACK,
} from "../controllers/ddosController.js";

const AttackRouter = express.Router();

AttackRouter.route("/DDOS")
  .get(READDDOSATTACK)
  .post(CREATEDDOSATTACK)
  .put(UPDATEDDOSATTACK)
  .delete(DELETEDDOSATTACK);

export { AttackRouter as ATTACKROUTER };
