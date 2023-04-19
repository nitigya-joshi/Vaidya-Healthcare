const mongoose = require('mongoose')
const exec = mongoose.Query.prototype.exec;
const redis = require('redis');
let redisClient;
(async () => {
    redisClient = redis.createClient();
    redisClient.on("error", (error) => console.error(`Error : ${error}`));
    await redisClient.connect();
})();

mongoose.Query.prototype.cache = function (options = {}) {
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || 'default')
    return this;
}

mongoose.Query.prototype.exec = async function () {
    if (!this.useCache) {
        return exec.apply(this, arguments)
    }

    const key = JSON.stringify(Object.assign({}, this.getQuery(), {
        collection: this.mongooseCollection.name
    }))
    const cachedVal = await redisClient.HGET(this.hashKey, key)

    if (cachedVal) {
        const doc = JSON.parse(cachedVal)
        return Array.isArray(doc)
            ? doc.map(d => new this.model(d))
            : new this.model(doc);
    }
    const result = await exec.apply(this, arguments)
    await redisClient.HSET(this.hashKey, key, JSON.stringify(result))
    return result
}

module.exports = {
    async clearHash(hashKey) {
        redisClient.del(JSON.stringify(hashKey));
    }
};