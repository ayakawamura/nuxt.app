<script setup lang="ts">
import type { PaymentMethod } from '~/types/cart'

interface Props {
  paymentMethodList: PaymentMethod[]
  selected: number | undefined
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:selectedId', id: number): void
}>()

const handleChange = (event: Event) => {
  const selectedId = Number((event.target as HTMLInputElement).value)
  emit('update:selectedId', selectedId)
}

// ページ遷移時のAPI実行
const saveApi = () => {
  // ここでAPI実行
  console.log('支払い方法保存')
}
defineExpose({ saveApi })

</script>

<template>
  <h1>支払方法</h1>
  <hr>

  <div class="opcOrderSummary_totalPricesAndLabelGroup">
    <span class="opcOrderSummary_totalPriceLabel opcCommonReferenceLabel">お支払い料金合計</span>
    <div class="totalPrice">16,500円</div>
  </div>

  <div v-for="payMethod in props.paymentMethodList" :key="payMethod.id" class="opcPaymentMethod_edit">
    <div class="opcPaymentMethod_paymentMethodAndLabelGroup_edit">
      <input :value="payMethod.id" type="radio" name="paymethod"
        :checked="payMethod.id == selected"
        @change="handleChange">
      <label for="">{{ payMethod.name }}</label>
      <span class="tesuryou">手数料：{{ payMethod.cost }}円</span>
    </div>

    <div class="deliveryComent" style="display: block;">
      <details class="accordion-006">
        <summary>ご利用詳細はこちら</summary>
        <div>
          <div>
            {{ payMethod.text }}
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<style scoped>
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

span.tesuryou {
  font-size: 1.3rem;
  font-weight: 400;
  flex-grow: 2;
  text-align: right;
}

.accordion-006 summary {
  font-weight: 400;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  color: #333333;
  font-weight: 600;
  cursor: pointer;
}

.accordion-006 summary::after {
  transform: translateY(-25%) rotate(45deg);
  width: 7px;
  height: 7px;
  margin-left: 10px;
  border-bottom: 3px solid #333333b3;
  border-right: 3px solid #333333b3;
  content: '';
  transition: transform .3s;
}

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