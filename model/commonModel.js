//const pool = require('../db');
const jwt=require('jsonwebtoken');

const dotenv=require('dotenv').config();

//dotenv.config();

const mysctKey = process.env.Secret_Key;

const stateModel = require('../db/sequalize')


exports.getNotes = async (body,callBack) => {

    //const stateId = body.params.stateId
    const stateId = body.query.stateId
  
    const states = await stateModel.findAll({
    where: {
    state_code: stateId
    },attributes: ['state_code', 'state_name'], 
    })
    callBack(null,states)
    
}

    
