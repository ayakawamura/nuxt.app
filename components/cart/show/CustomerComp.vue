<script setup lang="ts">
import EditButton from '~/components/parts/EditButton.vue';
import { getCustomer } from '~/composables/cart/getApi'

const client = getCustomer()

</script>

<template>
  <div class="information">
    <div class="lastPageTitle">ご注文者情報</div>
    <table>
      <tbody>
        <tr>
          <th>お名前</th>
          <td>{{ client.name }}</td>
        </tr>
        <tr>
          <th>mail</th>
          <td>{{ client.mail }}</td>
        </tr>
        <tr>
          <th>住所</th>
          <td>{{ client.address }}</td>
        </tr>
        <tr>
          <th>TEL</th>
          <td>{{ client.phone }}</td>
        </tr>
        <tr>
          <th>性別</th>
          <td>{{ client.gender }}</td>
        </tr>
        <tr>
          <th>メルマガ</th>
          <td>{{ client.mailMagazine }}</td>
        </tr>
      </tbody>
    </table>

    <EditButton text="変更する" link="" />
  </div>
</template>
