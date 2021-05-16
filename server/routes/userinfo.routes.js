const userInfoController = require("../controllers/userinfo.controller");

const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/userinfo", authenticate, userInfoController.getUser);
};