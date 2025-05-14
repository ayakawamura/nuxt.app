<script setup>
import CouponApiComp from '~/components/CouponApiComp.vue'
import BackButton from '~/components/parts/BackButton.vue'
</script>

<template>
  <div id="sysMain">
    <BackButton link="/" />

    <!-- クーポン設定 -->
    <CouponApiComp apiLink="medium"/>
  </div>
</template>

<style scoped>

</style>