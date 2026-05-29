<script setup lang="ts">
import AppWindow from "./AppWindow.vue";
import Shortcut from "./components/Shortcut.vue";
</script>

<template>
    <div class="desktop">
        <AppWindow />
        <Shortcut
            title="My Files"
            imgSrc="../src/assets/raster/icon_folder.png"
        />
        <Shortcut
            title="The Innernette"
            imgSrc="../src/assets/raster/icon_1.png"
        />
        <Shortcut title="Nette Tunes" imgSrc="/src/assets/raster/icon_1.png" />
        <Shortcut title="Inner Chat" imgSrc="../src/assets/raster/icon_1.png" />
    </div>
</template>

<style scoped>
.desktop {
    height: 95vh;
    width: auto;
    display: grid;
    padding-left: 1rem;
    padding-top: 1rem;
    row-gap: 2rem;
    grid-template-rows: repeat(16, 1fr);
    grid-auto-flow: column;
    background-image: url("/src/assets/raster/cinco_walp_2.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}
</style>

<style>
* {
    cursor:
        url("/src/assets/raster/mouse.png") 0 0,
        auto;
}

button,
select,
input,
a,
[role="button"] {
    cursor:
        url("/src/assets/raster/mouse.png") 0 0,
        pointer;
}
</style>
