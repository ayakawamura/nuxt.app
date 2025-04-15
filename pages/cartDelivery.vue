<script setup lang="ts">
import { ref } from 'vue'

type Recipient = {
  id: number
  name: string
  postalCode: string
  address: string
  phone: string
  isSelected: boolean
}

type Product = {
  id: number
  name: string
  price: number
  quantity: number
  selected: boolean
}

const recipients = ref<Recipient[]>([
  {
    id: 1,
    name: '山田 太郎',
    postalCode: '100-0001',
    address: '東京都千代田区千代田1-1',
    phone: '090-1234-5678',
    isSelected: false,
  },
  {
    id: 2,
    name: '佐藤 花子',
    postalCode: '150-0001',
    address: '東京都渋谷区神宮前1-1-1',
    phone: '080-9876-5432',
    isSelected: false,
  },
])

const products = ref<Product[]>([
  { id: 1, name: '商品1', price: 1000, quantity: 0, selected: false },
  { id: 2, name: '商品2', price: 2000, quantity: 0, selected: false },
  { id: 3, name: '商品3', price: 1500, quantity: 0, selected: false },
])

const selectedRecipient = ref<Recipient | null>(recipients.value[0])
const selectedProducts = ref<Product[]>([])
const showProductSelection = ref(false)
const slideInProductSelection = ref(false)

const selectRecipient = (id: number) => {
  recipients.value.forEach(r => {
    r.isSelected = r.id === id
  })
  selectedRecipient.value = recipients.value.find(r => r.id === id) || null
  showProductSelection.value = !!selectedRecipient.value
}

const toggleProductSelection = (product: Product) => {
  const index = selectedProducts.value.findIndex(p => p.id === product.id)
  if (index === -1) {
    selectedProducts.value.push(product)
  } else {
    selectedProducts.value.splice(index, 1)
  }
}

const updateQuantity = (product: Product, quantity: number) => {
  const prod = selectedProducts.value.find(p => p.id === product.id)
  if (prod) {
    prod.quantity = quantity
  }
}

const closeProductSelection = () => {
  slideInProductSelection.value = false
}

const openProductSelection = () => {
  slideInProductSelection.value = true
  console.log(slideInProductSelection.value)
}

</script>

<template>
  <div class="delivery-container">
    <h1 class="title">お届け先を選択</h1>

    <div v-for="recipient in recipients" :key="recipient.id" class="recipient-card">
      <label>
        <input
          type="radio"
          name="recipient"
          :value="recipient.id"
          v-model="selectedRecipient"
          :checked="selectedRecipient?.id === recipient.id"
          @change="selectRecipient(recipient.id)"
        />
        <strong>{{ recipient.name }}</strong>
        <p>{{ recipient.postalCode }}</p>
        <p>{{ recipient.address }}</p>
        <p>{{ recipient.phone }}</p>
      </label>
    </div>

    <h2 class="subtitle">新しいお届け先を追加</h2>
    <form class="new-recipient-form">
      <div class="form-group">
        <label>名前</label>
        <input type="text" placeholder="お名前を入力" />
      </div>
      <div class="form-group">
        <label>郵便番号</label>
        <input type="text" placeholder="例: 123-4567" />
      </div>
      <div class="form-group">
        <label>住所</label>
        <input type="text" placeholder="住所を入力" />
      </div>
      <div class="form-group">
        <label>電話番号</label>
        <input type="text" placeholder="例: 090-1234-5678" />
      </div>
      <button type="submit">追加する</button>
    </form>

    <!-- 商品選択ボタン -->
    <button
      v-if="showProductSelection"
      @click="openProductSelection"
      class="product-selection-btn"
    >
      商品選択
    </button>

    <!-- 商品選択スライドイン画面 -->
    <div
      v-show="slideInProductSelection"
      class="product-selection-slide"
    >
      <button @click="closeProductSelection" class="close-btn">×</button>
      <h2>商品選択</h2>
      <div v-for="product in products" :key="product.id" class="product-card">
        <label>
          <input
            type="checkbox"
            v-model="product.selected"
            @change="toggleProductSelection(product)"
          />
          <span>{{ product.name }} ({{ product.price }}円)</span>
        </label>
        <div v-if="product.selected">
          <label>数量:</label>
          <input
            type="number"
            v-model="product.quantity"
            @input="updateQuantity(product, product.quantity)"
            min="1"
            max="10"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delivery-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  background: #fdfdfd;
  border-radius: 6px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.recipient-card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  background: #fafafa;
}

.recipient-card label {
  display: block;
  cursor: pointer;
}

.subtitle {
  font-size: 20px;
  margin: 30px 0 10px;
}

.new-recipient-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

input[type="text"], input[type="number"] {
  padding: 6px 10px;
  font-size: 16px;
  border: 1px solid #aaa;
  border-radius: 4px;
}

button[type="submit"], button {
  padding: 10px 20px;
  background-color: #0072bc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
}

.product-selection-btn {
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.product-selection-slide {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 100;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.product-selection-slide.active {
  transform: translateX(0);
}

.product-card {
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 6px;
  background-color: #f9f9f9;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
}
</style>