<template>
    <div class="titlebar">
        <div class="titleBtn">
            <button>X</button>
            <button>□</button>
            <button>V</button>
        </div>
    </div>
    <div class="toolbar">
        <img src="/src/assets/svg/logo_alt1.png" />
        <div class="weirdBtnGrp">
            <button>Jibberish</button>
            <button>Jibberish</button>
            <button>Jibberish</button>
        </div>
        <input class="searchInput" />
        <button onclick="console.log('look somewhere else')" class="searchBtn">
            SEARCH
        </button>
        <input class="weirdInput" />
    </div>
</template>

<style scoped>
.titlebar {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 5fr 1fr 0.1fr;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
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
.titlebar > .titleBtn {
    display: flex;
    grid-column: 2/3;
    justify-self: end;
    gap: 0.5rem;
}
.titlebar button {
    height: 35px;
    width: 39px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 700;
    font-size: x-large;
    background-color: lightgrey;
}

.toolbar {
    width: 100%;
    display: grid;
    box-sizing: border-box;
    gap: 1rem;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 2fr 2fr 1fr;
    background-color: hsl(0, 0%, 80%);
    border-bottom: 3px solid gray;
}
.toolbar button {
}
.toolbar img {
    display: grid;
    grid-row: 1/4;
    grid-column: 1/2;
    max-width: 100%;
    padding-left: 1rem;
    margin-bottom: 2rem;
    visibility: visible;
}
.toolbar .weirdBtnGrp {
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
.toolbar .searchInput {
    display: grid;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 2%;
}
.toolbar .weirdInput {
    display: grid;
    grid-row: 3/4;
    grid-column: 2/3;
    margin-left: -10rem;
    margin-bottom: 1rem;
}
.toolbar .searchBtn {
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
