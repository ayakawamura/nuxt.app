<script setup lang="ts">
import type { Coupon } from '~/types/cart'

interface Props {
  couponList: Coupon[]
}
const props = defineProps<Props>()


const emit = defineEmits<{
  (e: 'update:isUse', payload: {id: number, isUse: boolean}): void
}>()

const handleChange = (id: number, event: Event) => {
  const target = event.target as HTMLInputElement | null

  if (target) {
    const isUse = target.checked
    emit('update:isUse', {id, isUse})
  }
}

</script>

<template>
  <h1>クーポン利用</h1>
  <hr>

  <div class="couponWrap">
    <div class="availableCoupons">
      <span class="couponText">以下のクーポンが適用されています</span>
    </div>

    <div class="useCouponWrap">
      <div v-for="coupon in props.couponList" :key="coupon.id" class="autoCoupon">
        <div class="couponItem">
          <input type="checkbox" class="couponCheck" :checked="coupon.isUse"
            @change="handleChange(coupon.id, $event)">
          <span class="couponName">{{ coupon.name }}</span>
          <span v-show="coupon.heiyou" class="heiyou">
            <span v-show="coupon.isUse">適用中[併用可]</span>
            <span v-show="!coupon.isUse">未適用[併用可]</span>
          </span>
          <span v-show="!coupon.heiyou" class="notHeiyou">
            <span v-show="coupon.isUse">適用中[併用不可]</span>
            <span v-show="!coupon.isUse">未適用[併用不可]</span>
          </span>
        </div>
        <span v-show="coupon.start || coupon.end" class="kikan">
          <span class="kikanlabel">(適用期間)</span>
          <span>{{ coupon.start }}～{{ coupon.end }}</span>
        </span>
      </div>

      <div class="someCouponUse couponCodeWrap">クーポンコードを入力する
        <div class="couponCode">
          <input type="text" value="" placeholder="クーポンコードを入力">
        </div>
        <div class="couponButtonWrap">
          <button class="couponButton">適用</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.couponWrap {
  background: #fafafa;
  padding: 20px;
  font-size: 15px;
}

.availableCoupons {
  margin-bottom: 10px;
}

span.couponText:after {
  content: "：";
}

.useCouponWrap div {
  margin: 8px;
}

.someCouponUse {
  display: flex;
  align-items: center;
}

.someCouponUse input[type="text"] {
  width: 200px;
  padding: 10px;
}

button.couponButton {
  width: 30%;
}

.autoCoupon {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #eee;
  padding: 15px;
  font-size: 1.5rem;
  background: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

input.couponCheck {
  display: inline-block;
  margin-right: 8px;
}

span.couponName {
  font-weight: 700;
  font-size: 1.6rem;
}

span.kikan {
  display: flex;
  flex-wrap: wrap;
}

span.kikanlabel {
  flex-basis: 100%;
}

.couponItem {
  flex-basis: 100%;
}

span.heiyou, span.notHeiyou {
  flex-grow: 2;
  text-align: right;
  display: inline-block;
  margin-right: 20px;
}
.heiyou span, .notHeiyou span {
  display: inline-block;
  padding: 8px 30px;
  font-weight: 700;
  background: aliceblue;
  border-radius: 8px;
}

.notHeiyou span {
  background: #eee !important;
}

.couponItem {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}


button.couponButton {
  width: 200px;
  background: #1f1f1f;
  border-radius: 4px;
  color: #fff;
}

.couponCode {
  margin-left: 20px !important;
}

.couponButtonWrap {
  flex-grow: 2;
  text-align: right;
}

.couponCode input[type="text"] {
  width: 250px !important;
}

.couponButtonWrap {
  flex-grow: 2;
  text-align: center;
}

button.couponButton {
  width: 160px;
  background: #1f1f1f;
  border-radius: 4px;
  color: #fff;
  padding: 6px;
}


button.couponButton {
  width: 30%;
}

input.couponCheck {
  display: inline-block;
  margin-right: 8px;
}

span.couponName {
  font-weight: 700;
  font-size: 1.6rem;
}

span.kikan {
  display: flex;
  flex-wrap: wrap;
}

span.kikanlabel {
  flex-basis: 100%;
}

</style>