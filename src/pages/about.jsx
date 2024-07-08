return {
    template: "app",
    url: "/about",

    title: "About Page",


    styles: [
        "/styles/about.css"
    ],
    scripts: [
        "/scripts/about.js"
    ],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Rank" />
        <meta property="description" content="Site de rank de la Nasty Ranked." />
        <meta property="og:description" content="Site de rank de la Nasty Ranked." />
    </>,
    body: <>


        <h1>About</h1>
        <div id="faq">
            <div>
                <p>
                    Qu'est-ce que Nasty Ranked ?
                    <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </p>
                <p>C'est un site qui propose des matchs classés en buildfight et zonewars dans le but de se dépasser et de se mettre en compétition avec les autres joueurs tout en ayant un "rank" pour se donner une idée de son propre niveau afin de pouvoir suivre son évolution.</p>
            </div>
            <div>
                <p>
                Pourquoi avons-nous décider de créer Nasty Ranked ?
                    <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </p>
                <p>C'est très simple, tout d'abord nous voulions créer un site similaire à la bfc ranked et faire plaisir à l'ancienne communauté mais aussi la nouvelle afin de rassembler les joueurs autour du bf et de la zone wars à travers Nasty Ranked.</p>
            </div>
            <div>
                <p>
                Comment marche le système de matchmaking ainsi que l'eloranking ?
                    <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                    </svg>
                </p>
                <p>Le système de matchmaking vous place dans une file d'attente afin de trouver un joueur dans le même mode que vous avec un rang d'écart maximum. A la fin de votre match vous gagnez ou perdez 5 elo en fonction du résultat de ce dernier grâce aux boutons "win" et "loose" disponibles 2minutes après le début du match</p>
            </div>

        </div>


    </>

};