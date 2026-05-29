<script setup lang="ts">
import MallProduct from "./MallProduct.vue";
</script>

<template>
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
</template>

<style scoped>
.menu {
    display: grid;
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: left;
    align-self: start;
    margin-left: 0.5rem;
    gap: 0.6rem;
}
.menu select {
    border: 3px solid;
    border-color: lightgray white white lightgray; /* top/left light, bottom/right dark */
}
</style>
