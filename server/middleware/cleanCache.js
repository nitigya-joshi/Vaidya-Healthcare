const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
    clearHash(req.user.id);
    console.log("clearing redis cache")
    next();
};