<template>
  <div>
    <h1>トップページ</h1>
    <hr>

    <NuxtLink to="/about">
      about
    </NuxtLink>
    <br>
    <NuxtLink to="https://www.google.co.jp/">
      google
    </NuxtLink>
    <br>
    <NuxtLink to ="/cartBasket">
      バスケットページ
    </NuxtLink>
    <br>
    <NuxtLink to ="/api/testPage">
      顧客情報API
    </NuxtLink>
    <br>
    <NuxtLink to ="/api/mediumData">
      1000件データ取得
    </NuxtLink>
    <br>
    <NuxtLink to ="/api/largeData">
      大量データ取得
    </NuxtLink>
    <br>
    <NuxtLink to ="/api/largeDom">
      大量DOM
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
//不要
</script>