<template>
    <div class="innernetteWindow innernetteBg" id="innernetteWindow">
        <div class="title" id="title">
            <div class="toolbar">
                <button>X</button>
                <button>□</button>
                <button>V</button>
            </div>
        </div>
        <div class="header">
            <img src="../src/assets/image/logo_l.png" />
            <div class="weirdBtnGrp">
                <button>Jibberish</button>
                <button>Jibberish</button>
                <button>Jibberish</button>
            </div>
            <input class="searchInput" />
            <button
                onclick="console.log('look somewhere else')"
                class="searchBtn"
            >
                SEARCH
            </button>
            <input class="weirdInput" />
        </div>
        <div class="sidebar">
            <div class="sbCat">
                <p>Shoes</p>
                <p>Shirts</p>
                <p>Coats</p>
                <p>Pants</p>
                <p>Hats</p>
            </div>
        </div>
        <div class="pantsStore">
            <img class="mallTitle" src="../src/assets/image/logo_l.png" />
            <span class="shopHd" style="font-weight: 800">
                I<span style="font-size: 22px">NNERNETTE</span> S<span
                    style="font-size: 22px"
                    >HOPPING</span
                >
                M<span style="font-size: 22px">ALL</span>
            </span>
            <span class="pantsStoreTitle">THE PANTS STORE</span>

            <div class="item-container">${this.drawPants()}</div>
            <div class="menu">${this.drawPantsMenu()}</div>

            <p class="descr">
                Choose from our wide selection of business slacks,<br />
                suit pants, jeans, shorts and sweatpants. Top quality<br />
                American made pants are 100% cotton and are wrinkle<br />
                free. For ultimate comfort please wash pants once<br />
                before wearing. Pants available in various sizes and<br />
                colors. Browse through and discover what you<br />
                have been missing.
            </p>

            <p class="price">
                STANDARD BLUE JEANS<br />
                Available in Large and Small<br />
                $34.99 plus shipping and handling
            </p>
            <button onclick="reviewOrder()" class="printBtn">PRINT</button>
        </div>
    </div>
</template>

<style scoped>
#innernetteWindow {
    position: absolute;
    top: 100px;
    left: 630px;
    display: grid;
    width: 880px; /* overall window size */
    height: 650px;
    grid-template-areas:
        "title title"
        "header header"
        "sidebar main";
    grid-template-rows: 1fr 2fr minmax();
    grid-template-columns: 1fr 5fr;
}
#innernetteWindow > * {
    box-shadow: 0 2px 2px 0px rgba(250, 250, 250, 0.3);
    border: 2px, solid;
    border-color: rgb(0, 180, 240) rgb(90, 90, 90) darkgray darkgray;
}
#innernetteWindow button:active {
    background-color: #c0c0c0; /* slightly darker */
    border-color: gray white white gray; /* invert borders */
}
/* PANTS STORE SECTION */
.pantsStore {
    display: grid;
    height: 100%;
    grid-area: main;
    min-height: 0;
    grid-template-areas:
        title title title
        item menu descr
        note note print;
    grid-template-rows: 1fr 4fr 1fr;
    grid-template-columns: 1fr 1fr 2fr;

    background-color: hsl(0, 1%, 98%);
    padding: 1rem;
    padding-left: 1.5rem;
    padding-right: 2rem;
    box-sizing: border-box;
    margin-right: 28px;
    margin-left: 28px;
    font-family: montserrat;
    font-weight: bold;
}
.pantsStore > * {
    min-height: 0;
}

.pantsStore .mallTitle {
    display: grid;
    grid-row: 1/2;
    grid-column: 1/2;
    margin-top: 0.8rem;
    margin-bottom: 7rem;
    width: 50%;
}
.shopHd {
    display: inline;
    grid-row: 1/2;
    grid-column: 1/4;
    max-width: 78%;
    padding-left: 6rem;
    font-family: montserrat;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.1rem;
    padding-left: 5rem;
    padding-top: 0.7rem;
    margin-bottom: 4rem;
    text-justify: center;
    background: linear-gradient(
        to right,
        rgba(100, 200, 100, 0.1),
        rgba(100, 200, 140, 0.2)
    );
}
.innernetteBg {
    background: linear-gradient(rgb(0, 189, 190), teal);
    box-shadow: 4px 5px 15px 7px rgba(1, 1, 1, 0.1);
}
.pantsStoreTitle {
    display: grid;
    grid-row: 1/2;
    grid-column: 2/4;
    padding-top: 4rem;
    padding-left: 5rem;
    font-family: montserrat;
    font-weight: bold;
    font-size: 34px;
}
.pantsStore .item {
    display: grid;
    grid-row: 2/3;
    grid-column: 1/2;
    grid-area: 1/1;
    max-height: 50%;
    margin-top: -1.5rem;
}
.pantsStore p {
    font-size: 9px;
    font-family: Georgia, "Times New Roman", Times, serif;
}
.pantsStore .menu {
    display: grid;
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: left;
    align-self: start;
    margin-left: 0.5rem;
    gap: 0.6rem;
}
.pantsStore .menu select {
    border: 3px solid;
    border-color: lightgray white white lightgray; /* top/left light, bottom/right dark */
    height: 1.8rem;
    background-color: hsl(0, 1%, 96%);
    font-family: Georgia, "Times New Roman", Times, serif;
    letter-spacing: -0.01rem;
    font-weight: bolder;
}

.pantsStore .descr {
    display: grid;
    grid-row: 2/3;
    grid-column: 3/4;
}
.pantsStore .price {
    display: grid;
    align-self: flex-end;
    grid-row: 3/4;
    grid-column: 1/3;
}
.pantsStore .printBtn {
    display: grid;
    grid-row: 3/4;
    grid-column: 3/4;
    justify-self: end;
    padding: 1%;
    letter-spacing: 0.1rem;
    height: 2.5rem;
    width: 8rem;
    font-family: montserrat;
    font-weight: 800;
    font-size: 21px;
    background-color: hsl(0, 0%, 85%);
    border: 4px solid;
    border-color: lightgrey gray gray lightgrey; /* top/left light, bottom/right dark */
}
.sidebar {
    display: grid;
    grid-row: 3/4;
    grid-column: 1/2;
    grid-area: sidebar;
    height: 100%;
    box-sizing: border-box;
    background-color: hsl(180, 30%, 70%);
}
.sidebar .sbCat {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1.2rem;
    padding-left: 0.6rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: 800;
    font-size: 20px;
    font-weight: bold;
}

.sidebar .sbCat p {
    margin: 0;
}
/* GLOBALISH WINDOW/APPWINDOW STYLING */

.input {
    background-color: white;
    border: 8px solid gray white white gray; /* classic 3D border */
    padding: 2px 4px;
}
.title {
    grid-area: title;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 5fr 1fr 0.1fr;
    padding: 0.4rem;
    background:
        linear-gradient(
            to right,
            rgba(50, 30, 210, 0.7),
            rgba(60, 150, 210, 0.7)
        ),
        repeating-linear-gradient(
            to bottom,
            rgba(40, 30, 210),
            rgba(50, 70, 210) 0.4rem
        );
}
.title > .toolbar {
    display: flex;
    grid-column: 2/3;
    justify-self: end;
    gap: 0.5rem;
}
.title button {
    height: 35px;
    width: 39px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 700;
    font-size: x-large;
    background-color: lightgrey;
}

.header {
    grid-area: header;
    display: grid;
    box-sizing: border-box;
    gap: 1rem;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 2fr 2fr 1fr;
    background-color: hsl(0, 0%, 80%);
    border-bottom: 3px solid gray;
}
.header button {
    cursor:
        url("../media/image/mouse.png") 0 0,
        auto;
}
.header img {
    display: grid;
    grid-row: 1/4;
    grid-column: 1/2;
    max-width: 100%;
    visibility: visible;
}
.header .weirdBtnGrp {
    display: grid;
    grid-auto-flow: column;
    grid-row: 1/2;
    grid-column: 2/3;
    max-width: 100%;
    gap: 1rem;
    padding: 0.5rem;
}
.weirdBtnGrp button {
    border: 4px solid;
    border-color: lightgray gray gray lightgray; /* top/left light, bottom/right dark */
    background-color: hsl(0, 0%, 75%);
    color: hsl(180, 0%, 70%);
}
.header .searchInput {
    display: grid;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 2%;
}
.header .weirdInput {
    display: grid;
    grid-row: 3/4;
    grid-column: 2/3;
    margin-left: -10rem;
    margin-bottom: 1rem;
}
.header .searchBtn {
    display: grid;
    grid-row: 2/3;
    grid-column: 3/4;
    justify-self: start;
    padding: 0.3rem;
    font-family: montserrat;
    font-weight: 700;
    font-size: 21px;
    background-color: hsl(0, 0%, 75%);
    border: 4px solid;
    border-color: lightgrey gray gray lightgrey; /* top/left light, bottom/right dark */
}
</style>
