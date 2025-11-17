function netteTunes() {
    let html = '';
    html = /*HTML*/ `
    <div class="netteTunesWindow netteTunesBg" id="netteTunesWindow">
        <div class="title" id="title">
            <div class="toolbar">
                <button>X</button>
                <button>□</button>
                <button>V</button>
            </div>
        </div>

        <div class="header">
            <img src="media/image/logo_l.png">
            <div class="weirdBtnGrp">
                <button>Jibberish</button>
                <button>Jibberish</button>
                <button>Jibberish</button>
            </div>
                <input class="searchInput">
                <button onclick="console.log('look somewhere else')" class="searchBtn">SEARCH</button>
                <input class="weirdInput">
        </div>

        <div class="player">
            <div class="controls">
                <div class="stop">
                    <p>⏹</p>
                </div>
                <div class="play">
                    <p>►</p>
                </div>
                <div class="pause">
                    <p>⏸</p>
                </div>
            </div>

            <div class="main">
                <div class="header">
                    <h2>NETTE TUNES 2.0</h2>
                </div>
                <div class="scroller">
                    ${drawPlaylist()}
                    ${drawPlaylist()}
                    ${drawPlaylist()}
                    ${drawPlaylist()}
                    ${drawPlaylist()}
                </div>
                <div class="eq">
                    |  |  |  |  |
                </div>
            </div>

            <div class="extraWrapper">
                <div class="playerExtra">
                    <div class="resume">
                        <p>REsume</p>
                    </div>
                    <div class="songList">
                        <p>songList</p>
                    </div>
                    <div class="blank">
                        <p>REsume</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `;
    return html;
}

drawPlaylist();
function drawPlaylist() {
    let songs = model.music;
    let html = '';
    console.log(songs);
    for (let song of songs) {
        html += `
        <div class="trackDisplay">
            <p>${song.artist}</p>
            <p class="songTitle">${song.title}</p>
            <p class=sep></p>
        </div>
        `;
    }
    return html;
}
