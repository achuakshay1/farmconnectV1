const dotenv=require('dotenv').config();

//dotenv.config();

const mysctKey = process.env.Secret_Key;

const jwt=require('jsonwebtoken');

exports.ensureToken=(req,res,next)=> { 
    const bearerHeader=req.headers["authorization"];
    if(typeof bearerHeader !=='undefined') {
        const bearer=bearerHeader.split(" ");
        const bearerToken=bearer[1];
        req.token=bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
};
