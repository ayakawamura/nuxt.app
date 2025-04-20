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
  font-size: 65%;
}
header, footer{
  background: rgb(130, 128, 128);
  color: #fff;
}
footer {
  text-align: center;
}

/* 全画面共通 */
#sysMain {
  width: 80%;
  margin: 0 auto;
}

.inputBtn {
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  margin: 20px 10px;
}
</style>