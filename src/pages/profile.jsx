return {
    template: "app",
    url: "/profile",

    title: "Système de profile",

    styles: [
        "/styles/profile.css"
    ],
    scripts: [
        "https://code.jquery.com/jquery-3.6.0.min.js",
        "/scripts/profile.js"
    ],

    head: <>
        <meta property="og:title" content="Nasty Ranked - Profile" />
        <meta property="description" content="Site de profile de la Nasty Ranked." />
        <meta property="og:description" content="Site de profile de la Nasty Ranked." />
    </>,
    body:
    <>
        
        <section id="settings">
                <h1 id="profile-header">Profile de</h1>

                <div class="banner" data-aos="fade-in" data-aos-duration="1000" ></div>

                <div class="absolute informations flex" data-aos="fade-in" data-aos-duration="1000">
                    <div class="profile-name flex">
                    <img id="profile-image" src="https://ui-avatars.com/api/?background=1e1f30&color=fff&amp;size=10&amp;rounded=true&amp;length=1&amp;name=" alt="Profile"></img>
                    </div>
                    <div class="profile-info">
                        <p id="profile-info" class="mail"></p>
                        <p id="point-info" class="point-info">Points:</p>
                    </div>
                </div>

                <div class="pro-cards" data-aos="fade-up" data-aos-duration="1000">
                    <div class="relative more-infos">
                        <div class="commentbar-top">
                            <h5>Historiques des parties</h5>
                            <hr style="background-color: hsl(270, 100%, 65%); margin: 0px; height: 5px;"/>
                        </div>
                    </div>

                    <div class="relative more-infos">
                        <div class="commentbar-top">
                            <h5>General Information</h5>
                            <hr style="background-color: hsl(270, 100%, 65%); margin: 0px; height: 5px;"/>
                        </div>

                        <div class="flex info">
                            <div class="block-container">
                                <div class="btn-back btn-back-1"></div>
                                <div class="btn-front">
                                    <span style="color: #0bb9cb;">
                                        <i class='bx bx-trophy'></i>
                                        GAGNANT WINNER
                                    </span>
                                    <span id="won" class="stats">GAME GAGNANTE</span>
                                </div>
                            </div>

                            <div class="block-container">
                                <div class="btn-back btn-back-3"></div>
                                <div class="btn-front">
                                    <span style="color: #e58133;">
                                        <i class='bx bx-x-circle'></i>
                                        GAME PERDUEEEE
                                    </span>
                                    <span id="lost" class="stats">GAME PERDUE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
}