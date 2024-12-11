from flask import Flask
from flask_caching import Cache
from app.config import Config
from app.routes import bp

def create_app():
    
    app = Flask(__name__)
    
    app.config.from_object(Config)

    
    cache = Cache(app)  
    
    app.register_blueprint(bp, url_prefix='/api')  

    return app
