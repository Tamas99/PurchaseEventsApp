import singleton
import redis
from redis import Redis


class RedisCache(metaclass=singleton.Singleton):
    def __init__(self, host: str, port: int):
        pool = redis.ConnectionPool(host=host, port=port, db=0)
        self.redis_cache = Redis(connection_pool=pool)
    
    async def set(self, key, value):
        return self.redis_cache.set(key, value)
    
    async def get(self, key):
        return self.redis_cache.get(key)
    
    async def json_set(self, key, value):
        return self.redis_cache.json().set(key, '$', value)
    
    async def json_get(self, key):
        return self.redis_cache.json().get(key)
    
    async def keys(self, pattern: str):
        return self.keys(pattern)
    

