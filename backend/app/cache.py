from flask_caching import Cache

cache = Cache()

def cached_meme_coins(timeout=300, key_prefix="meme_coins"):
    
    def decorator(fetch_function):
        @cache.cached(timeout=timeout, key_prefix=key_prefix)
        def wrapper(*args, **kwargs):
            return fetch_function(*args, **kwargs)
        return wrapper
    return decorator