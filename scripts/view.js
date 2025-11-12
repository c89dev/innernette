function testPage() {
    let html = '';
    html = /*HTML*/ `
    <div class="title">
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
            <button class="searchBtn">SEARCH</button>
            <input class="weirdInput">
    </div>
    <div class="sidebar">
       <div class=sbCat>
            <p>Shoes</p>
            <p>Shirts</p>
            <p>Coats</p>
            <p>Pants</p>
            <p>Hats</p>
       </div>
    </div>
    <div class="main">
        <img class='mallTitle' src='media/image/logo_l.png'>
        <span class="shopHd" style="font-weight: 800;">
        I<span style="font-size:22px">NNERNETTE</span> S<span style="font-size:22px">HOPPING</span> M<span style="font-size:22px">ALL</span>
        </span>
        <span class="pantsStore">THE PANTS STORE</span>

        <div class="item-container">${drawPants()}</div>
        <div class="menu">${drawPantsMenu()}</div>

        <p class='descr'>Choose from our wide selection of business slacks,<br>
        suit pants, jeans, shorts and sweatpants. Top quality<br>
        American made pants are 100% cotton and are wrinkle<br>
        free. For ultimate comfort please wash pants once<br>
        before wearing. Pants available in various sizes and<br>
        colors. Browse through and discover what you<br>
        have been missing. </p>

        <p class='price'>STANDARD BLUE JEANS<br>
        Available in Large and Small<br>
        $34.99 plus shipping and handling</p>
        <button class="printBtn">PRINT</button>
    `;
    return html;
}

function drawPants() {
    let html = '';
    let pants = viewState.store.pantsOpt;
    let wrapper = document.createElement('div');
    wrapper.classList.add('item');

    for (let opt of pants) {
        if (opt.visible == true) {
            html += /*HTML*/ `
            <img src='${opt.src}' class="item">
            `;
        }
    }
    wrapper.innerHTML = html;
    return wrapper.outerHTML;
}

function drawPantsMenu() {
    // let menu = document.createElement('div');
    // menu.classList.add('menu');

    // let color = document.createElement('select');
    // let pleats = document.createElement('select');
    // let para = document.createElement('select');
    // let cuffs = document.createElement('select');
    // let size = document.createElement('select');

    // let colorOpt = [`<option>Blue</option>`, `<option>Yellow</option>`];
    // // colorOpt.forEach((opt) => color.append());
    // menu.append(color, pleats, para, cuffs, size);
    // color.innerHTML = colorOpt.join('');

    // color.addEventListener("change", optSelectMouseEnter)
    // return menu.innerHTML;
    let html = '';
    html = /*HTML*/ `
    <div class="menu">
        <select onchange="pantsOptController(this.value)">
            <option value="" disabled selected>Color</option>
            <option value="0">Blue</option>
            <option value="1">Yellow</option>
        </select>

        <select onchange="pantsOptController(this.value)">
            <option value="" disabled selected>Pleats</option>
            <option value="2">Yes</option>
            <option value="2">No</option>
        </select>

        <select onchange="pantsOptController(this.value)">
            <option value="" disabled selected>Parachute</option>
            <option value="3">Yes</option>
            <option value="3">No</option>
        </select>

        <select onchange="pantsOptController(this.value)">
            <option value="" disabled selected>Cuffs</option>
            <option value="4">Yes</option>
            <option value="4">No</option>
        </select>
        <select onchange="pantsOptController(this.value)">
            <option value="" disabled selected>Size</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="2XL">2XL</option>
            <option value="3XL">3XL</option>
            <option value="4XL">4XL</option>
        </select>
    </div>
    `;
    return html;
}

updateView();
function updateView() {
    app.innerHTML = testPage();
}
