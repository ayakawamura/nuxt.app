<script setup lang="ts">
import { ref, computed } from 'vue'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

const cartItems = ref<CartItem[]>([
  { id: 1, name: '商品1', price: 1000, quantity: 0 },
  { id: 2, name: '商品2', price: 2000, quantity: 0 },
  { id: 3, name: '商品3', price: 1500, quantity: 0 },
])

const updateQuantity = (id: number, amount: number) => {
  const item = cartItems.value.find(i => i.id === id)
  if (item) {
    item.quantity = Math.max(1, item.quantity + amount)
  }
}

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>

<template>
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
      <tr v-for="item in cartItems" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.price.toLocaleString() }}円</td>
        <td class="quantity-cell">
          <button @click="updateQuantity(item.id, -1)">−</button>
          <span class="quantity">{{ item.quantity }}</span>
          <button @click="updateQuantity(item.id, 1)">＋</button>
        </td>
        <td>{{ (item.price * item.quantity).toLocaleString() }}円</td>
      </tr>
    </tbody>
  </table>

  <div class="cart-total">
    合計: <strong>{{ totalPrice.toLocaleString() }}円</strong>
  </div>
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
