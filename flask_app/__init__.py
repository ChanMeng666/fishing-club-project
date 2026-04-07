from app import views

from flask import Flask
from .views.admin import admin_bp
from .views.auth import auth_bp
from .views.guide import guide_bp
from .views.main import main_bp
from .views.member import member_bp

app = Flask(__name__)

# Register blueprints
app.register_blueprint(admin_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(guide_bp)
app.register_blueprint(main_bp)
app.register_blueprint(member_bp)

