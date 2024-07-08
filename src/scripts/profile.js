const API_BASE_URL = 'http://127.0.0.1:5050/';
fetch(`${API_BASE_URL}/fetch-profile`)
            .then(response => response.json())
            .then(data => {
                const profileHeader = document.getElementById('profile-header');
                const profileImage = document.getElementById('profile-image');
                const profileInfo = document.getElementById('profile-info');
                const pointInfo = document.getElementById('point-info');
                if (data.nom !== "Vous n'avez pas créé de compte!") {
                    // Update the profile content based on the nickname and the number of points
                    profileHeader.textContent += ' ' + data.nom;
                    pointInfo.textContent += ' ' + data.points;
                    profileInfo.textContent = `${data.nom}`;
                    // Update the image URL
                    profileImage.src = `https://ui-avatars.com/api/?background=1e1f30&color=fff&size=300&rounded=true&length=1&name=${data.nom}`;
                } else {
                    profileHeader.textContent = data.nom;
                }})
            .catch(error => {
                console.error('Erreur:', error);
                document.getElementById('profile-header').textContent = "Vous n'avez pas créé de compte!";
            });