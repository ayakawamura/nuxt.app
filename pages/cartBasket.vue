<script setup lang="ts">
// import { ref, computed } from 'vue'
import CartTable from '~/components/cart/CartTable.vue'
import CompleteButton from '~/components/parts/CompleteButton.vue';
import HeaderParts from '~/components/parts/HeaderParts.vue'

// 外部CSS読み込み
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://kawamura-test.aispr.jp/css/user.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://kawamura-test.aispr.jp/css/parts.css?cacheKey=1745227843'
    }
  ],
})

import { onMounted, nextTick } from 'vue';

onMounted(async () => {
  await nextTick()

  // すでに読み込まれてたらスキップ
  if (!document.querySelector('script[src="https://kawamura-test.aispr.jp/js/userAfterLoading.js"]')) {
    const script = document.createElement('script')
    script.src = 'https://kawamura-test.aispr.jp/js/userAfterLoading.js'
    script.defer = true
    document.head.appendChild(script)
  }
})

</script>

<template>
  <HeaderComp />

  <!-- 機能パーツ -->
  <HeaderParts />

  <div id="cart-container">
    <h1 class="cart-title">バスケット</h1>

    <!-- <client-only> -->
    <CartTable />
    <!-- </client-only> -->

    <table class="cart-table">
      <thead>
        <tr>
          <th>商品名</th>
          <th>単価</th>
          <th>数量</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>商品A</td>
          <td>100円</td>
          <td class="quantity-cell">1
            <!-- <button @click="updateQuantity(item.id, -1)">−</button>
          <span class="quantity">{{ item.quantity }}</span>
          <button @click="updateQuantity(item.id, 1)">＋</button> -->
          </td>
          <td>100円</td>
        </tr>
      </tbody>
    </table>

    <div class="cart-total">
      合計: <strong>1000円</strong>
    </div>

    <CompleteButton nextButtonText="購入手続きへ進む" link="/cartDeliveryAddress"/>


  </div>
  <FooterComp />
</template>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fafafa;
  border-radius: 6px;
}

.cart-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
}

.cart-table th,
.cart-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.quantity-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.quantity-cell button {
  width: 30px;
  height: 30px;
  font-size: 18px;
  background-color: #eee;
  border: 1px solid #bbb;
  border-radius: 4px;
  cursor: pointer;
}

.quantity {
  display: inline-block;
  min-width: 24px;
}

.cart-total {
  margin-top: 20px;
  font-size: 18px;
  text-align: right;
}
</style>
