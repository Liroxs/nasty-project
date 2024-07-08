return {
    url: "/",
    template: "app",

    title: "Nasty Ranked",
    favicon: "/favicon.ico",

    styles: [
        "/styles/index.css"
    ],
    scripts: ["https://code.jquery.com/jquery-3.6.0.min.js"],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Rank" />

        <meta property="description" content="Site de rank de la Nasty Ranked." />
        <meta property="og:description" content="Site de rank de la Nasty Ranked." />
    </>,

    body: <>
        <div class="title">
            <div class="title-inner">
                <a>Nasty</a>
                <a>Clan</a>
                <a>Ranked</a>
            </div>
        </div>
        <p style="text-align: center; position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); color: #0096FF;">Front-end by Liroxs and Back-End by Yazuko</p>
    </>,

    onrequest: null
};