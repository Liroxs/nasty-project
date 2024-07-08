const API_BASE_URL = 'http://127.0.0.1:5050';
$(document).ready(function() {
    // filtre XSS
    function escapeHtml(text) {
        return $('<div>').text(text).html();
    }

    function fetchMessages() {
        fetch(`${API_BASE_URL}/fetch-messages`)
            .then(response => response.json())
            .then(data => {
                var chatBox = $('#chatMessages');
                chatBox.empty();
                if (data.messages && data.messages.length > 0) {
                    data.messages.forEach(user => {
                        var sender = user.sender;
                        var messages = user.messages;
                        messages.forEach(message => {
                            var msg = `<p style="color: hsl(0, 0%, 0%);"><strong>${escapeHtml(sender)}:</strong> ${escapeHtml(message.content)}</p>`;
                            chatBox.append(msg);
                        });
                    });
                } else {
                    console.log('Aucun message trouvé.');
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des messages:', error);
            });
    }

    fetchMessages();

    $('#sendMessageForm').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var message = $('#messageInput').val();
        
        fetch(`${API_BASE_URL}/send-message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, message: message })
        })
        .then(response => response.json())
        .then(data => {
            fetchMessages();
            $('#messageInput').val('');
            if (data.error) {
                $('#messageStatus').text(`${data.error}`);
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi du message:', error);
            $('#messageStatus').text('Erreur: Ce nom d\'utilisateur est déjà pris. Veuillez choisir un autre nom.');
        });
    });

    setInterval(fetchMessages, 5000);

});