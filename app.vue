<template>
  <!-- <NuxtLayout>
    <div>
      <p v-if="pending">見込み中・・・</p>
      <p v-else-if="error">エラー内容：{{ error.message }}</p>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.id }}:{{user.name}}</li>
      </ul>

      <NuxtPage />
      <div>
        counter is:{{ counter }}
        <button @click="updateCounter(1)">+1</button>
      </div>
    </div>
  </NuxtLayout> -->

  <NuxtLayout>
    <div>
        counter is:{{ counter }}
        <button @click="updateCounter(1)">+1</button>
      </div>

    <HeaderComp />
    <NuxtPage />
    <FooterComp />
  </NuxtLayout>

  <!-- <NuxtLayout>
      <NuxtPage />
    </NuxtLayout> -->
</template>



<script setup lang="ts">
import { useHead } from '#app';

// const message = ref<string>("Hello world!");

type Geo = {
  lat: string;
  lng: string;
}

type Address = {
  city: string
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
}

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

useHead({
  title: 'Nuxt App',
  link: [{
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
  }],
});

const { data: users, error, pending } = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
// console.log(users.value);

const { counter, updateCounter } = useCounter();
</script>