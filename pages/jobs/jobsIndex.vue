<script setup lang="ts">
import type { Job } from '~/types/job';

// setupを使うならimport不要
// import { ref, reactive } from 'vue'

// カスタムテンプレート
// definePageMeta({
//     layout: 'customLayout',
//   });

const { data: jobs, error } = await useFetch<Job[]>(`https://62fe320941165d66bfbabe7e.mockapi.io/apt/v1/jobs`);
</script>

<template>
  <div>
    <h1>求人一覧</h1>
    <!-- コンポーネント -->
    <client-only>
      <jobsItemComp v-for="job in jobs" :key="job.id" :job="job" />
    </client-only>

    <div>------------------------------------------------------------------</div><br><br>
    <p v-if="error">
      エラー内容{{ error.message }}
    </p>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <p>求人ID: {{ job.id }}</p>
        <p>求人タイトル: {{ job.title }}</p>
        <p>求人内容: {{ job.description }}</p>
        <p>
          画像: <img :src="job.cover" alt="">
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>