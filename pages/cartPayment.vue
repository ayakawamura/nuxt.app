<script setup lang="ts">
import { ref } from 'vue';
import type { PaymentMethod, Point, Coupon } from '~/types/cart'
import CouponComp from '~/components/cart/edit/CouponComp.vue'
import PaymentMethodComp from '~/components/cart/edit/PaymentMethodComp.vue'
import PointComp from '~/components/cart/edit/PointComp.vue'
import RemarksComp from '~/components/cart/edit/RemarksComp.vue'
import CompleteButton from '~/components/parts/CompleteButton.vue'
import BackButton from '~/components/parts/BackButton.vue'
import { getCouponList, getPaymentMethod, getPointInfo } from '~/composables/cart/getApi'
import { useSelectPayMethodId } from '~/composables/cart/useSelectPayMethodId'


// お支払い方法
const paymentMethodList = ref<PaymentMethod[]>(getPaymentMethod())

const selectPayMethodId = useSelectPayMethodId()

// ポイント
const pointInfo = ref<Point>(getPointInfo())

// クーポン
const couponList = ref<Coupon[]>(getCouponList())

const handleCouponChange = ({ id, isUse }: { id: number, isUse: boolean }) => {
  const target = couponList.value.find(coupon => coupon.id == id)
  if (target) {
    target.isUse = isUse
  }

}

// 備考
const remarks = ref<string>('')

// 次へボタン押下で各コンポーネントでAPI実行
const paymentCompRef = ref()
const pointCompRef = ref()
const couponCompRef = ref()
const remarksCompRef = ref()

const handleNext = () => {
  paymentCompRef.value.saveApi()
  pointCompRef.value.saveApi()
  couponCompRef.value.saveApi()
  remarksCompRef.value.saveApi()
}

</script>

<template>
  <div id="sysMain">

    <div class="itemImage">
      <img class="opcItem_itemImage" src="/cat.jpg" title="画像をクリックして詳細ページへ" alt="りんご">
    </div>

    <!-- お支払い方法選択 -->
    <PaymentMethodComp :paymentMethodList="paymentMethodList"
      :selected="selectPayMethodId"
      @update:selectedId="selectPayMethodId = $event"
      ref="paymentCompRef" />
    <span>{{ selectPayMethodId }}を選択中</span>

    <!-- ポイント設定 -->
    <PointComp :point="pointInfo" @update:selected="pointInfo.selected = $event"
      @update:usePoint="pointInfo.usePoint = $event"
      ref="pointCompRef" />
    <p>選択肢{{ pointInfo.selected }}</p>
    <p>利用ポイント{{ pointInfo.usePoint }}</p>


    <!-- クーポン設定 -->
    <CouponComp :couponList="couponList" @update:isUse="handleCouponChange" ref="couponCompRef"/>

    <!-- 備考 -->
     <RemarksComp @update:remark="remarks = $event" ref="remarksCompRef"/>
    <span>備考入力内容：{{ remarks }}</span>

    <CompleteButton nextButtonText="次へ（最終確認画面）" link="/cartFinalCheck" @click="handleNext"/>
    <BackButton link="/cartDeliveryMethod" />

  </div>
</template>

<style>
.itemImage img{
  height: 200px;
  width: auto;
}
</style>