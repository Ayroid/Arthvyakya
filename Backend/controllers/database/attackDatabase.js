import { ATTACK_MESSAGES } from "../../utils/messages/messages.js";

// DATABASE OPERATIONS

const createAttackDB = async (model, data) => {
  try {
    const result = await model(data).save();
    if (result !== null) {
      console.log(ATTACK_MESSAGES.ATTACK_CREATED, { userId: result._id });
      return result;
    } else {
      console.log(ATTACK_MESSAGES.ATTACK_NOT_CREATED, {
        userId: result._id,
      });
      return false;
    }
  } catch (error) {
    console.log(ATTACK_MESSAGES.ERROR_CREATING_ATTACK, (data, error));
    return false;
  }
};

const readAttackDB = async (model, query, fields) => {
  try {
    const result = await model.find(query).select(fields);
    if (result.length > 0) {
      console.log(ATTACK_MESSAGES.ATTACK_READ);
      return result;
    } else {
      console.log(ATTACK_MESSAGES.ATTACK_NOT_READ);
      return false;
    }
  } catch (error) {
    console.log(ATTACK_MESSAGES.ERROR_READING_ATTACK, {
      query,
      error,
    });
    return false;
  }
};

const updateAttackDB = async (model, query, data, fields) => {
  try {
    const result = await model
      .findOneAndUpdate(query, data, {
        new: true,
      })
      .select(fields);
    if (result) {
      console.log(ATTACK_MESSAGES.ATTACK_UPDATED, { userId: result });
      return result;
    } else {
      console.log(ATTACK_MESSAGES.ATTACK_NOT_UPDATED, { userId: result });
      return false;
    }
  } catch (error) {
    console.log(ATTACK_MESSAGES.ERROR_UPDATING_ATTACK, (query, data, error));
    return false;
  }
};

const deleteAttackDB = async (model, query) => {
  try {
    const result = await model.findOneAndDelete(query);

    if (result) {
      console.log(ATTACK_MESSAGES.ATTACK_DELETED, { userId: result._id });
      return result;
    } else {
      console.log(ATTACK_MESSAGES.ATTACK_NOT_DELETED, {
        userId: result._id,
      });
      return false;
    }
  } catch (error) {
    console.log(ATTACK_MESSAGES.ERROR_DELETING_ATTACK, (query, error));
    return false;
  }
};

// EXPORTING MODULES

export {
  createAttackDB as CREATEATTACKDB,
  readAttackDB as READATTACKDB,
  updateAttackDB as UPDATEATTACKDB,
  deleteAttackDB as DELETEATTACKDB,
};
