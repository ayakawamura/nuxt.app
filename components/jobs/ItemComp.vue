<script setup lang="ts">
import type { Job } from '~/types/job'

type Props = {
  job: Job,
}

const props = withDefaults(defineProps<Props>(), {
  job: () => {
    return {
      id: 0,
      title: '',
      description: '',
      cover: '',
      content: '',
      createdAt: '',
    }
  }
})
</script>

<template>
  <div>
    <h3>jobs/ItemCompです</h3>
    <li>
      <p>求人ID: {{ props.job.id }}</p>
      <p>求人タイトル: {{ props.job.title }}</p>
      <p>求人内容: {{ props.job.description }}</p>
      <p>
        画像: <img
          :src="props.job.cover"
          alt=""
        >
      </p>
      <p>
        <NuxtLink :to="`/jobs/${job.id}`">
          求人詳細へ
        </NuxtLink>
      </p>
    </li>
  </div>
</template>
