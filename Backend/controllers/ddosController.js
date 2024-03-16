import dotenv from "dotenv";
dotenv.config();
import { StatusCodes } from "http-status-codes";
import {
  DDOS_ATTACK_MESSAGES,
  SERVER_MESSAGES,
} from "../utils/messages/messages.js";

// CONSTANTS
const SERVER_URI = process.env.SERVER_URI;
const fields = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

// DATABASE CONTROLLERS

import {
  CREATEATTACKDB,
  READATTACKDB,
  UPDATEATTACKDB,
  DELETEATTACKDB,
} from "./database/attackDatabase.js";

// CONTROLLERS

const createDdosAttack = async (req, res) => {
  try {
    const { targetService, numberOfThreads, numberOfVMs, havocMode, stopTime } =
      req.body;

    const ddos = await CREATEATTACKDB({
      targetService,
      numberOfThreads,
      numberOfVMs,
      havocMode,
      stopTime,
    });

    if (ddos) {
      console.log(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_CREATED, { ddos });
      return res.status(StatusCodes.CREATED).send({
        response: DDOS_ATTACK_MESSAGES.DDOS_ATTACK_CREATED,
        ddosId: ddos._id,
      });
    } else {
      console.log(DDOS_ATTACK_MESSAGES.ERROR_CREATING_DDOS_ATTACK, { error });
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(SERVER_MESSAGES.INTERNAL_SERVER_ERROR);
    }
  } catch (error) {
    console.log(DDOS_ATTACK_MESSAGES.ERROR_CREATING_DDOS_ATTACK, { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(SERVER_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

const readDdosAttack = async (req, res) => {
  try {
    const query = !req.query._id ? {} : { _id: req.query.id };
    const ddos = await READATTACKDB(query, fields);

    if (ddos.length > 0) {
      console.log(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_FOUND, { ddos });

      return res.status(StatusCodes.OK).send(ddos);
    } else {
      console.log(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_NOT_FOUND, { ddos });
      return res
        .status(StatusCodes.NOT_FOUND)
        .send(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_NOT_FOUND);
    }
  } catch (error) {
    console.log(DDOS_ATTACK_MESSAGES.ERROR_READING_DDOS_ATTACK, { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(SERVER_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

const updateDdosAttack = async (req, res) => {
  try {
    const query = { _id: req.query.id };
    const data = req.body;
    const ddos = await UPDATEATTACKDB(query, data, fields);
    if (ddos) {
      console.log(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_UPDATED, { ddos });
      return res.status(StatusCodes.OK).send(ddos);
    } else {
      console.log(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_NOT_UPDATED, { ddos });
      return res
        .status(StatusCodes.NOT_FOUND)
        .send(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_NOT_UPDATED);
    }
  } catch (error) {
    console.log(DDOS_ATTACK_MESSAGES.ERROR_UPDATING_DDOS_ATTACK, { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(SERVER_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

const deleteDdosAttack = async (req, res) => {
  try {
    const query = { _id: req.query.id };
    const ddos = await DELETEATTACKDB(query);
    if (ddos) {
      console.log(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_DELETED, { ddos });
      return res
        .status(StatusCodes.OK)
        .send(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_DELETED);
    } else {
      console.log(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_NOT_DELETED, { ddos });
      return res
        .status(StatusCodes.NOT_FOUND)
        .send(DDOS_ATTACK_MESSAGES.DDOS_ATTACK_NOT_DELETED);
    }
  } catch (error) {
    console.log(DDOS_ATTACK_MESSAGES.ERROR_DELETING_DDOS_ATTACK, { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(SERVER_MESSAGES.INTERNAL_SERVER_ERROR);
  }
};

export {
  createDdosAttack as CREATEDDOSATTACK,
  readDdosAttack as READDDOSATTACK,
  updateDdosAttack as UPDATEDDOSATTACK,
  deleteDdosAttack as DELETEDDOSATTACK,
};
