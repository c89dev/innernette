<script setup lang="ts">
import MallHeader from "@/MallHeader.vue";
import MallProduct from "@/MallProduct.vue";
import MallSidebar from "@/MallSidebar.vue";
</script>

<template>
    <div class="shoppingMall">
        <MallSidebar class="mallSidebarCmp" />
        <MallHeader class="mallHeaderCmp" />
        <MallProduct class="mallProductCmp" />
    </div>
</template>

<style scoped>
.shoppingMall {
    min-height: 600px;
    max-height: 600px;
    height: 600px;
    display: grid;
    grid-template-areas:
        "sidebar header"
        "sidebar product";
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 15% minmax(0, 1fr);
    background: linear-gradient(rgb(0, 189, 190), teal);
    box-shadow: 4px 5px 15px 7px rgba(1, 1, 1, 0.1);
}
.shoppingMall > * {
    box-shadow: 0 2px 2px 0px rgba(250, 250, 250, 0.3);
    border: 2px, solid;
    border-color: rgb(0, 180, 240) rgb(90, 90, 90) darkgray darkgray;
}
.shoppingMall button:active {
    background-color: #c0c0c0; /* slightly darker */
    border-color: gray white white gray; /* invert borders */
}
.mallSidebarCmp {
    display: grid;
    grid-area: sidebar;
}
.mallHeaderCmp {
    display: grid;
    grid-area: header;
}
.mallProductCmp {
    display: grid;
    grid-area: product;
}
</style>
