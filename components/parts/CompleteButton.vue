<script setup lang="ts">

interface Props {
  nextButtonText: string,
  link: string,
}

const props = defineProps<Props>();
</script>


<template>
  <div class="complete">
    <!-- <a :href="props.link" class="completeLink">
      {{ props.nextButtonText }}
    </a> -->
    <NuxtLink :to="props.link" class="completeLink">
      {{ props.nextButtonText }}
    </NuxtLink>
  </div>
</template>


<style scoped>
.complete {
  background-color: #f86150;
  border: none;
  height: auto;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  width: 40%;
  /* text-decoration: none; */
}

.completeLink {
  color: #fff;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
}
</style>