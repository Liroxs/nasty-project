const { Slick } = require("@borane/slick");

new Slick({
    workspace: __dirname,
    port: 5000,

    lang: "en",
    alias: {
        "/favicon.ico": "/assets/favicon.ico",
        "/robots.txt": "/assets/robots.txt",
        "/fr.svg": "/assets/fr.svg"
    },
    redirect404: "/",
    development: false
});