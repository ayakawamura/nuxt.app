<script setup lang="ts">
import EditButton from '~/components/parts/EditButton.vue';
import { getRemarks } from '~/composables/cart/getApi'

const remarks = getRemarks()

</script>

<template>
  <div v-for="remark in remarks" :key="remark.id" class="information">
    <div class="lastPageTitle">{{ remark .title }}</div>
    <p>{{ remark.content }}</p>

    <EditButton text="変更する" link="" />
  </div>
</template>
