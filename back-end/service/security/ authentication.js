const { signedCookie } = require("cookie-parser");
const jwt = require("jasonwebtoken");
const { token } = require("morgan");
require("dotenv").config();
const config = process.env;

const tokenVerification = (req, res, next) => {
    let toket = req.body.token || req.query.token || req.headers["x-access-token"] || req?.signedCookie?.user?.token;
    if(!token){
        return res.status(403).send({
            auth : false,
            message : "message is not provided",
            status : 403
        });
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN);
        req.user = decoded;

    } catch(err){
        console.log("Failed to Authenticate token. ");
        return res.status(401).send({
            auth : false,
            message : "Failed to authenticate token",
            status : 401
        });
    }
    return next();
};

