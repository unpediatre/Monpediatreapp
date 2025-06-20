# __init__.py

from flask import Flask

def create_app():
    app = Flask(__name__)
    # Configuration de l'application ici (optionnelle)
    app.config.from_object('config.Config')  # Si vous avez un fichier config.py avec une classe Config

    # Initialisation de l'application ici
    with app.app_context():
        # Initialisation de l'application Flask
        # Par exemple, vous pouvez importer et initialiser des extensions ici
        from . import routes  # Importe les routes définies dans routes.py

    return app