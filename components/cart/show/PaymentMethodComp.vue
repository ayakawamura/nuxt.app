<script setup lang="ts">
// import {ref} from 'vue'
import EditButton from '~/components/parts/EditButton.vue';
import { getPaymentMethod } from '~/composables/cart/getApi'
import { useSelectPayMethodId } from '~/composables/cart/useSelectPayMethodId'


const selectPayMethodId = useSelectPayMethodId()
const paymentMethod = getPaymentMethod()

const selectPaymentMethod = paymentMethod.filter((payMethod) => payMethod.id == selectPayMethodId.value)

</script>

<template>
  <div class="information">
    <div class="lastPageTitle">支払い方法</div>
    <p>{{ selectPaymentMethod[0].name }}</p>

    <EditButton text="変更する" link="" />
  </div>
</template>
