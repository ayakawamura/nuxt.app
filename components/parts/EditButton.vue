<script setup lang="ts">

interface Props {
  text: string,
  link: string,
}

const props = defineProps<Props>();
</script>


<template>
  <div class="edit">
    <NuxtLink :to="props.link" class="editLink">
      {{ props.text }}
    </NuxtLink>
  </div>
</template>


<style>
.edit {
  background-color: #FFF;
  border: 1px solid gray;
  /* border: none; */
  height: auto;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: 20px auto;
  max-width: 150px;

}

.editLink {
  color: gray;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
}
</style>