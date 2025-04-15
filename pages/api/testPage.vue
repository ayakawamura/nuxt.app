<script setup lang="ts">
import { ref } from 'vue';

interface Customer {
  customer_id: number;
  mailaddress: string;
  name: string;
  name_kana: string;
  gender: string;
}

interface ApiResponse {
  customers: Customer[];
}

const customerList = ref<Customer[]>([]);
const loading = ref<boolean>(false);
const error = ref<string>('');


const getApi = async () => {
  const { data: apiData } = await useFetch<ApiResponse>('/api/customers');

    customerList.value = apiData.value?.customers ?? [];
    console.log(customerList.value);
}

</script>

<template>
  <div>
    <button @click="getApi">顧客情報を取得</button>
    <h3>顧客一覧</h3>
    <p v-if="loading">読み込み中</p>
    <p v-else-if="error">エラー：{{ error }}</p>
    <ul v-else>
      <li v-for="customer in customerList" :key="customer.customer_id">
        <p>顧客ID: {{ customer.customer_id }}</p>
        <p>メールアドレス: {{ customer.mailaddress }}</p>
        <p>名前: {{ customer.name }}</p>
        <p>フリガナ: {{ customer.name_kana }}</p><br>
      </li>
    </ul>
  </div>

</template>

<style></style>