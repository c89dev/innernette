<script setup lang="ts">
import { useMallStore } from "@/stores/mall";

const mall = useMallStore();
</script>

<template>
    <div class="mallSidebar">
        <div class="navButtons">
            <p
                v-for="cat in mall.categories"
                :key="cat.id"
                @click="mall.setCurrentCat(cat.id)"
            >
                {{ cat.id.charAt(0).toUpperCase() + cat.id.slice(1) }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.mallSidebar {
    display: grid;
    grid-row: 3/4;
    grid-column: 1/2;
    grid-area: sidebar;
    height: 100%;
    box-sizing: border-box;
    background-color: hsl(190, 45%, 70%);
}
.mallSidebar .navButtons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1.5rem;
    padding-left: 1rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: 800;
    font-size: 25px;
    font-weight: bold;
}
.mallSidebar .navButtons p {
    margin: 0;
}
</style>
