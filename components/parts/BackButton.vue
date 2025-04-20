<script setup lang="ts">

interface Props {
  link: string,
}

const props = defineProps<Props>();
</script>


<template>
  <div class="back">
    <NuxtLink :to="props.link" class="backLink">
      戻る
    </NuxtLink>
  </div>
</template>


<style>
.back {
  background-color: #FFF;
  border: 1px solid gray;
  /* border: none; */
  height: auto;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  width: 40%;

}

.backLink {
  color: gray;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
}
</style>