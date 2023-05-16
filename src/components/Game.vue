<template>
  <div class="game flex flex-col">
    <div class="flex" v-for="(row, rowIndex) in renderData" :key="rowIndex">
      <div
        class="w-5 h-5 border border-gray-300"
        v-for="(value, colIndex) in row"
        :key="colIndex"
        :class="{ 'bg-white': value === 0, 'bg-red-500': value === 1 , 'bg-yellow-500': value === 2}"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import { startGame, setSnakeDirection, Direction } from "../game";

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
  bean:{
    position:{
      x:1,
      y:1,
    }
  },
  speed: 200,
});

const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case "ArrowRight":
      setSnakeDirection(Direction.Right);
      break;
    case "ArrowLeft":
      setSnakeDirection(Direction.Left);
      break;
    case "ArrowUp":
      setSnakeDirection(Direction.Up);
      break;
    case "ArrowDown":
      setSnakeDirection(Direction.Down);
      break;
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped></style>
