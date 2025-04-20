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


// お支払い方法
const paymentMethodList = ref<PaymentMethod[]>(getPaymentMethod())

const selectPayMethodId = ref<number>()

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

</script>

<template>
  <div id="sysMain">
    <!-- 支払い方法選択 -->
    <h1>支払方法</h1>
    <hr>

    <div class="opcOrderSummary_totalPricesAndLabelGroup">
      <span class="opcOrderSummary_totalPriceLabel opcCommonReferenceLabel">お支払い料金合計</span>
      <div class="totalPrice">16,500円</div>
    </div>

    <div v-for="payMethod in paymentMethodList" :key="payMethod.id" class="opcPaymentMethod_edit">
      <PaymentMethodComp :paymentMethod="payMethod" :selected="selectPayMethodId"
        @update:selectedId="selectPayMethodId = $event" />
    </div>
    <span>{{ selectPayMethodId }}を選択中</span>

    <!-- ポイント設定 -->
    <PointComp :point="pointInfo" @update:selected="pointInfo.selected = $event"
      @update:usePoint="pointInfo.usePoint = $event" />
    <p>選択肢{{ pointInfo.selected }}</p>
    <p>利用ポイント{{ pointInfo.usePoint }}</p>


    <!-- クーポン設定 -->
    <CouponComp :couponList="couponList" @update:isUse="handleCouponChange" />

    <!-- 備考 -->
     <RemarksComp @update:remark="remarks = $event"/>
    <span>備考入力内容：{{ remarks }}</span>

    <CompleteButton nextButtonText="次へ（最終確認画面）" link="/cartFinalCheck" />
    <BackButton link="/cartDeliveryMethod" />

  </div>
</template>

<style scoped>
/*------------------------------------------------------------
4-2. お支払い情報
------------------------------------------------------------*/
/* 合計金額＋ラベルグループ */
.opcOrderSummary_totalPricesAndLabelGroup {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 5px;
  border-bottom: 1px dotted;
  overflow: hidden;
  margin: 20px 0;
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fff;
}

.totalPrice {
  text-align: right;
  color: red;
}

.opcPaymentMethod_edit {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
}

.opcPaymentMethod_edit .opcPaymentMethod_paymentMethodAndLabelGroup_edit {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 19px;
  line-height: 1.6;
  letter-spacing: 0;
  font-weight: 700;
  margin-bottom: 10px;
}


</style>