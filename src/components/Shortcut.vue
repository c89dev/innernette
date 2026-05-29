<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    title: string;
    imgSrc: string;
}>();
</script>

<template>
    <div class="shortcut">
        <img v-bind:src="imgSrc" />
        <p>{{ title }}</p>
    </div>
</template>

<style scoped>
.shortcut {
    display: flex;
    flex-direction: column;
    width: 80px;
    max-width: 80px;
    text-align: center;
}
.shortcut p {
    font-size: 18px;
    color: white;
    background-color: rgba(200, 200, 200, 0.2);
    text-shadow: 4px 5px 10px 7px rgba(1, 1, 1, 0.1);
}

.shortcutSelect {
    background-color: rgba(200, 200, 200, 0.4);
}
</style>
