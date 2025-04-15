<script setup lang="ts">
import type { Job } from '~/types/job'
import { useJob } from '~/composables/job'

const { job: jobState } = useJob<Job>()

</script>

<template>
  <div>
    <p>Cover コンポーネント</p>
    <p v-if="jobState">コンポーネント{{ jobState.description }}</p>
  </div>
</template>