<script setup lang="ts">
import { useMallStore } from "./stores/mall";

const mall = useMallStore();
</script>

<template>
    <div class="mallProductPage">
        <span class="mallProductTitle">{{ mall.getCurrentCat?.label }}</span>

        <div class="item">
            <img :src="mall.getCurrentCat?.baseImage" alt="" />
            <img
                v-for="layer in mall.getActiveLayers"
                :key="layer"
                :src="layer"
                alt=""
            />
        </div>
        <div class="menu">
            <div v-for="option in mall.getCurrentCat?.options" :key="option.id">
                <select
                    :value="''"
                    @change="
                        mall.setOption(
                            option.id,
                            ($event.target as HTMLSelectElement).value,
                        );
                        ($event.target as HTMLSelectElement).selectedIndex = 0;
                    "
                >
                    <option value="" disabled>
                        {{ option.label }}
                    </option>

                    <option
                        v-for="value in option.values"
                        :key="value"
                        :value="value"
                    >
                        {{ value }}
                    </option>
                </select>
            </div>
        </div>

        <p class="descr">
            <template
                v-for="line in mall.getCurrentCat?.description"
                :key="line"
            >
                {{ line }}<br />
            </template>
        </p>

        <p class="price">
            <template v-for="line in mall.getCurrentCat?.price" :key="line">
                {{ line }}<br />
            </template>
        </p>
        <button onclick="reviewOrder()" class="printBtn">PRINT</button>
    </div>
</template>

<style scoped>
/* PRODUCT / OPTIONS SECTION */
.mallProductPage {
    display: grid;
    max-height: 100%;
    height: 100%;
    min-height: 0;
    grid-template-areas:
        "title title title"
        "item item descr"
        "note note print";
    grid-template-rows: minmax(0, 0.2fr) minmax(0, 1fr) minmax(0, 0.2fr);
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.5fr) minmax(0, 1fr);

    background-color: hsl(0, 1%, 98%);
    padding-left: 1.5rem;
    padding-right: 2rem;
    box-sizing: border-box;
    margin-right: 28px;
    margin-left: 28px;
    font-family: montserrat;
    font-weight: bold;
}
.mallProductPage > * {
    min-width: 0;
    min-height: 0;
}
.mallProductTitle {
    display: grid;
    grid-row: 1/2;
    grid-column: 2/4;
    font-family: montserrat;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 40px;
}
.mallProductPage .item {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    min-width: 0;
    min-height: 0;
    margin-bottom: 2rem;
    overflow: hidden;

    position: relative;
}

.item > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.mallProductPage p {
    font-size: 11px;
    font-family: Georgia, "Times New Roman", Times, serif;
}
.mallProductPage .menu {
    margin-top: 4rem;
    display: grid;
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: left;
    align-self: start;
    gap: 0.6rem;
}
.mallProductPage .menu select {
    font-size: 1rem;
    border: 3px solid;
    border-color: lightgray white white lightgray; /* top/left light, bottom/right dark */
    height: 1.8rem;
    background-color: hsl(0, 1%, 96%);
    font-family: Georgia, "Times New Roman", Times, serif;
    letter-spacing: -0.01rem;
    font-weight: bolder;
    min-width: 100px;
}

.mallProductPage .descr {
    margin-top: 4rem;
    display: grid;
    grid-row: 2/3;
    grid-column: 3/4;
}
.mallProductPage .price {
    display: grid;
    align-self: flex-end;
    grid-row: 3/4;
    grid-column: 1/3;
    padding-bottom: 1rem;
}
.mallProductPage .printBtn {
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
</style>
