return {
    url: "/match",
    template: "app",

    title: "Nasty Ranked - Match",
    favicon: "/favicon.ico",

    styles: [
        "/styles/match.css"
    ],
    scripts: ["https://code.jquery.com/jquery-3.6.0.min.js", "/scripts/match.js"],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Match" />

        <meta property="description" content="Site de rank de la Nasty Ranked." />
        <meta property="og:description" content="Site de rank de la Nasty Ranked." />
    </>,

    body: <>
        <h1>Match en cours</h1>

        <div class="button-container">
            <button> WIN </button>
            <button> LOOSE </button>
        </div>
    </>,

    onrequest: null
};