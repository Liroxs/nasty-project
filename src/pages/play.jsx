return {
    url: "/play",
    template: "app",

    title: "Nasty Ranked - Play",
    favicon: "/favicon.ico",

    styles: [
        "/styles/play.css"
    ],
    scripts: ["https://code.jquery.com/jquery-3.6.0.min.js", "/scripts/play.js"],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Play" />

        <meta property="description" content="Site de rank de la Nasty Ranked." />
        <meta property="og:description" content="Site de rank de la Nasty Ranked." />
    </>,

    body: <>
        <div class="container">
            <button id="mainButton" class="fortnite-button">Choisissez votre mode</button>
            <div id="buttonContainer" class="hidden">
                <button class="fortnite-button">BuildFight</button>
                <button class="fortnite-button">ZoneWars</button>
            </div>
        </div>
    </>,

    onrequest: null
}