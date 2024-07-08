return {
    url: "/result",
    template: "app",

    title: "Nasty Ranked - Result",
    favicon: "/favicon.ico",

    styles: [
        "/styles/result.css"
    ],
    scripts: ["https://code.jquery.com/jquery-3.6.0.min.js"],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Result" />

        <meta property="description" content="Site de rank de la Nasty Ranked." />
        <meta property="og:description" content="Site de rank de la Nasty Ranked." />
    </>,

    body: <>
        <div class="button-container">
            <button> WIN </button>
            <button> LOOSE </button>
        </div>

    </>,

    onrequest: null
};