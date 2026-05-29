<script setup lang="ts">
import ShoppingMall from "./components/ShoppingMall.vue";
import WindowHeader from "./components/WindowHeader.vue";
</script>

/* Pinia possible apps/list Slots for main content */

<template>
    <div class="appWindow">
        <WindowHeader class="appHeader" />
        <ShoppingMall class="appContent" />
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
.appWindow {
    scale: 90%;
    left: 180px;
    position: absolute;
    max-width: 60%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    grid-template-areas:
        "header"
        "content";
}
.appHeader {
    grid-area: header;
    max-width: 100%;
}
.appContent {
    grid-area: content;
    max-width: 100%;
}
</style>
