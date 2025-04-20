<script setup lang="ts">
import type { PaymentMethod } from '~/types/cart'

interface Props {
  paymentMethod: PaymentMethod
  selected: number | undefined
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:selectedId', id: number): void
}>()

const handleChange = () => {
  emit('update:selectedId', props.paymentMethod.id)
}
</script>

<template>
  <div class="opcPaymentMethod_paymentMethodAndLabelGroup_edit">
    <input :value="props.paymentMethod.id" type="radio" name="paymethod"
      :checked="props.paymentMethod.id == selected"
      @change="handleChange">
    <label for="">{{ props.paymentMethod.name }}</label>
    <span class="tesuryou">手数料：{{ props.paymentMethod.cost }}円</span>
  </div>

  <div class="deliveryComent" style="display: block;">
    <details class="accordion-006">
      <summary>ご利用詳細はこちら</summary>
      <div>
        <div>
          {{ props.paymentMethod.text }}
        </div>
      </div>
    </details>
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
</style>