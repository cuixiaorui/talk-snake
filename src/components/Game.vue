<template>
  <div class="game flex flex-col">
    <div class="flex" v-for="(row, rowIndex) in renderData" :key="rowIndex">
      <div
        class="w-5 h-5 border border-gray-300"
        v-for="(value, colIndex) in row"
        :key="colIndex"
        :class="{
          'bg-white': value === 0,
          'bg-red-500': value === 1,
          'bg-yellow-500': value === 2,
        }"
      ></div>
    </div>
    <div>
      <button @click="handleJoinPlayer">join player2</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { joinPlayer2, startGame } from "../game";

const renderData = reactive([]);
startGame(renderData, {
  width: 40,
  height: 40,
  snake: {
    position: {
      x: 5,
      y: 0,
    },
  },
  bean: {
    position: {
      x: 1,
      y: 1,
    },
  },
  speed: 200,
});

function handleJoinPlayer() {
  joinPlayer2();
}
</script>

<style scoped></style>
