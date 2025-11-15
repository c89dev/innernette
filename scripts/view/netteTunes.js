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
                    </div>
                    <div class="play">
                        <p>►</p>
                    </div>
                    <div class="pause">
                    </div>
                </div>
                <div class="playlist">
                    <div class="header">
                        <p>nette tunes 2.0</p>
                    </div>
                    <div class="scroller">

                    </div>
                    <div class="eq">
                        |  |  |  |  |
                    </div>
                </div>
                <div class="playerExtra"></div>
            </div>
        </div>
    `;
    return html;
}
