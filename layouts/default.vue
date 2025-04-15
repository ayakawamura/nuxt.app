<template>
  <div>
    <header>デフォルトレイアウト</header>
    <!-- 下記slotは、NuxtLayoutコンポーネントの子要素に差し代わる -->
    <slot />
    <footer>&copy; デフォルトレイアウト</footer>
  </div>
</template>

<style>
html {
	/* font-family: "Permanent Marker", cursive; */
}
header, footer{
  background: rgb(130, 128, 128);
  color: #fff;
}
footer {
  text-align: center;
}

</style>