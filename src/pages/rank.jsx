return {
    template: "app",
    url: "/rank",
    
    title: "Système de Rank",


    styles: [
        "/styles/rank.css"
    ],
    scripts: [ 
        "https://code.jquery.com/jquery-3.6.0.min.js",
        "/scripts/rank.js"
    ],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Rank" />
        <meta property="description" content="Site de rank de la Nasty Ranked." />
        <meta property="og:description" content="Site de rank de la Nasty Ranked." />
    </>,
    body: 
        <>
        <div class="container">
            <h1>Fornite - Rank Buildfight</h1>
            <center>
                <form id="createAccountForm">
                    <div class="textInputWrapper">
                        <input placeholder="Username" id="pseudo" type="text" class="textInput"/>
                    </div>
                    <button class="boton-elegante" type="submit">Créer un compte</button>
                    <p id="message"></p>
                </form>
            </center>
            <p style="text-align:center"><img src="/assets/fr.svg" alt="country-fr" width="300" height="175"/></p>

            <table id="rankTable">
                <thead>
                    <tr>
                        <th>Classement</th>
                        <th>Player</th>
                        <th>Rank</th>
                        <th>Elo</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </>

};