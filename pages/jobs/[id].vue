
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Job } from '~/types/job'
import { useJob } from '~/composables/job'

const name = ref<string>('');
// const nameWithSan = ref<string>('');
const isShowProfile = ref<boolean>(false);

const person = reactive({
  id: 1,
  name: 'sato',
  age: 20,
});

const jobs = ref<Job[]>([]);
jobs.value = [
  { id: 1, title: '求人1', description: '',cover: '', content: '求人1の仕事内容です。',createdAt:'' },
  { id: 2, title: '求人2', description: '',cover: '', content: '求人2の仕事内容です。',createdAt:'' },
  { id: 3, title: '求人3', description: '',cover: '', content: '求人3の仕事内容です。',createdAt:'' },
];

// urlのパラメータを取得
const route = useRoute();
const id = route.params.id
const { data: job, error, pending } = await useFetch<Job>(`https://62fe320941165d66bfbabe7e.mockapi.io/apt/v1/jobs/${id}`, {initialCache:false});
// console.log(job);
// const jobData = computed(() => {
//   // job が null でない場合にプロパティにアクセス
//   return job.value ? job.value : { id: '', title: '', description: '', cover: '', createdAt: '' };
// });
const { setJob } = useJob();
setJob(job.value);

const addSan = () => {
  person.name = name.value + 'さん';
}

const showProfile = () => {
  isShowProfile.value = !isShowProfile.value;
}

</script>

<template>
  <div>
    <input v-model="name" type="text" name="name"><br><br><br>
    <button type="button" @click="addSan">
      登録
    </button><br><br>

    <p>あなたの名前は<strong>{{ person.name }}</strong>です。</p><br><br>

    <button type="button" @click="showProfile">
      プロフィールを表示
    </button> <br><br>
    <p v-if="isShowProfile">
      id: {{ person.id }}
    </p>
    <p v-if="isShowProfile">
      name: {{ person.name }}
    </p>
    <p v-if="isShowProfile">
      age: {{ person.age }}
    </p>

    <div>------------------------------------------------------------------</div><br><br>
    <h2>求人詳細</h2>
    <NuxtLink to="/jobs/jobsIndex">一覧へ戻る</NuxtLink>

    <p v-if="pending">読み込み中</p>
    <p v-else-if="error">読み込みに失敗しました</p>
    <section v-if="job">
      <h3>{{ job.title }}</h3>
      <div>
        <h4>概要</h4>
        <p>{{ job.description }}</p>
        <h4>カバー</h4>
        <p>
          <img :src="job.cover" alt="">
        </p>
        <h4>作成日</h4>
        <p>{{ job.createdAt }}</p>
      </div>
    </section>
    <jobs-CoverComp />
  </div>
</template>



<style></style>