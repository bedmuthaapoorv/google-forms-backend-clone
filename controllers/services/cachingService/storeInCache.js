// store stuff in cache
'use strict'

const connectors=require('../../../models/connectors')
const storeInCache= async (key, value, expiry)=>{
    const redisClient=connectors.redisClient;
    await redisClient.connect();
    await redisClient.set(key, value);
    await redisClient.expire(key, expiry);
    console.log(await redisClient.get(key))
    await redisClient.disconnect();
}

exports.storeInCacheService=storeInCache;
// storeInCache('key', 'value', 60);