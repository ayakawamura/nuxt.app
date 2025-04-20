<!-- <script setup lang="ts"></script> -->

<template>
  <div>
    <header>カスタムレイアウト</header>
    <slot />
    <footer>カスタムレイアウト</footer>
  </div>
</template>

<style>
header {
  background: #000;
  color: #fff;
}
footer {
  background: orange;
  text-align: center;
}
</style>