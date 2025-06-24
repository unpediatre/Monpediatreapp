document.addEventListener('DOMContentLoaded', function() {
    // Fonction générique pour demander les initiales et naviguer
    function requestChildAction(routeName) {
        const initials = prompt("Veuillez entrer les initiales de l'enfant :");
        if (initials) {
            // Utiliser encodeURIComponent pour gérer les caractères spéciaux
            window.location.href = `/${routeName}/${encodeURIComponent(initials)}`;
        }
    }

    // Attacher les fonctions aux boutons dans l'index
   
  
    document.getElementById('deleteChildBtn')?.addEventListener('click', function() {
        const initials = prompt("Veuillez entrer les initiales de l'enfant à supprimer :");
        if (initials && confirm("Êtes-vous sûr de vouloir supprimer cet enfant ?")) {
            window.location.href = `/delete_child/${encodeURIComponent(initials)}`;
        }
    });

    document.getElementById('diversificationBtn')?.addEventListener('click', function() {
        requestChildAction('diversification_alimentaire');
    });
    document.getElementById('nextVaccineBtn')?.addEventListener('click', function() {
        requestChildAction('prochain_vaccin');
    });
   

    // Boutons pour les utilisateurs non connectés
    document.getElementById('loginBtn')?.addEventListener('click', function() {
        window.location.href = "{{ url_for('login') }}";
    });
    document.getElementById('registerBtn')?.addEventListener('click', function() {
        window.location.href = "{{ url_for('register') }}";
    });
});