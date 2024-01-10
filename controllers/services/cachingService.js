const storeInCacheService=require('./cachingService/storeInCache')
const getFromCacheService=require('./cachingService/getFromCache')

exports.storeInCacheService=storeInCacheService.storeInCacheService;
exports.getFromCacheService=getFromCacheService.getFromCacheService;