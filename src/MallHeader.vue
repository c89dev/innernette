<template>
    <div class="mallHeader">
        <img src="/src/assets/svg/logo_alt1.png" />

        <span class="shopHd" style="font-weight: 800">
            I<span style="font-size: 22px">NNERNETTE</span> S<span
                style="font-size: 22px"
                >HOPPING</span
            >
            M<span style="font-size: 22px">ALL</span>
        </span>
    </div>
</template>

<style scoped>
.mallHeader {
    display: grid;
    grid-template-areas: "logo text";
    grid-template-columns: 14% auto;
    margin-right: 28px;
    margin-left: 28px;
    padding: 20px;
    font-size: 30px;
    font-family: montserrat;
    background: hsl(0, 1%, 98%);
}
.mallHeader > img {
    padding-top: 10px;
    display: grid;
    grid-area: logo;
    object-fit: contain;
    max-width: 8rem;
    width: auto;
    height: auto;
}
.shopHd {
    padding-top: 18px;
    padding-bottom: 18px;
    max-width: 85%;
    font-family: montserrat;
    letter-spacing: 3px;
    background: linear-gradient(
        to right,
        hsl(1, 100%, 100%),
        hsl(180, 65%, 80%)
    );
}
</style>
