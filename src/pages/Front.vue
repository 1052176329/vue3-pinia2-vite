<template>
  <div>count: {{ countStore.num }}</div>
  <div>count: {{ refCount.num }}</div>
  <div><button @click="countStore.increment()">+1</button></div>
  <div><el-button>222</el-button></div>
</template>

<script lang="ts" setup="setup">
import { storeToRefs } from "pinia";
import useCountStore from "../store/modules/useCountStore";

const countStore = useCountStore();
const refCount = storeToRefs(countStore);
import .meta.env.VITE_API_URL
console.log(import .meta.env.VITE_API_URL)
</script>

<style lang="scss" scoped>
</style>