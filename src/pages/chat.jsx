return {
    url: "/chat",
    template: "app",

    title: "Nasty Ranked",
    favicon: "/favicon.ico",

    styles: [
    ],
    scripts: [
        "https://code.jquery.com/jquery-3.6.0.min.js",
        "/scripts/chat.js"
    ],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Rank"/>

        <meta property="description" content="Site de rank de la Nasty Ranked."/>
        <meta property="og:description" content="Site de rank de la Nasty Ranked."/>
    </>,

    body: <>
        <div class="card">
            <div class="chat-header">Chat</div>
            <div class="chat-window" id="chatMessages">
                <ul class="message-list"></ul>
            </div>
            <form id="sendMessageForm">
                <div class="chat-input">
                    <input type="text" class="message-input" id="username" placeholder="Type your username"/>
                </div>
                <div class="chat-input">
                    <input type="text" class="message-input" id="messageInput" placeholder="Type your message here"/>
                        <button type="submit" class="send-button">Send</button>
                </div>
            </form>
        </div>
        <div id="messageStatus"></div>

    </>,

    onrequest: null
};