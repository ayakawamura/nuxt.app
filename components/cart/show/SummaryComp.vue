<script setup lang="ts">
import { getCouponList, getPointInfo, getSummary } from '~/composables/cart/getApi'
import type { Summary, Point, Coupon } from '~/types/cart';

const summary: Summary = getSummary()
const pointInfo: Point = getPointInfo()
const couponList: Coupon[] = getCouponList()
const useCouponList = couponList.filter(coupon => (coupon.isUse == true))
</script>

<template lang="">
  <div class="opcOrderSummary">
    <div class="opcOrderSummary_totalPricesAndLabelGroup">
      <span class="opcOrderSummary_totalPriceLabel opcCommonReferenceLabel">お支払い料金合計</span>
      <div class="opcOrderSummary_totalPricesGroup">
        <div class="opcOrderSummary_normalTotalPriceAndLabelGroup">
          <span class="opcOrderSummary_normalTotalPrice">
            <span class="sysCartAttention">{{ summary.orderTotalPrice }}</span>
            <span class="">円（税込）</span>
          </span>
        </div>
      </div>
    </div>

    <div class="opcOrderSummary_priceBreakDownGroup">
      <div class="opcOrderSummary_totalItemPricesAndLabelGroup">
        <span class="opcOrderSummary_totalItemPriceLabel opcCommonReferenceLabel">商品代金合計</span>
        <div class="opcOrderSummary_totalItemPricesGroup">
          <div class="opcOrderSummary_normalTotalPriceAndLabelGroup">
            <span class="opcOrderSummary_normalTotalItemPrice">{{ summary.itemTotalPrice }}円（税込）</span>
          </div>
        </div>
      </div>

      <div class="opcOrderSummary_deliveryCostAndLabelGroup">
        <span class="opcOrderSummary_deliveryCostLabel opcCommonReferenceLabel">配送料</span>
        <span class="opcOrderSummary_deliveryCost">{{ summary.deliveryCost }}円（税込）</span>
      </div>
      <div class="opcOrderSummary_isolatedIslandCostMessageAndLabelGroup"></div>
      <div class="opcOrderSummary_totalCartOptionPriceAndLabelGroup">
        <span class="opcOrderSummary_totalCartOptionPriceLabel opcCommonReferenceLabel">オプション料</span>
        <span class="opcOrderSummary_totalCartOptionPrice">{{ summary.option }}円（税込）</span>
      </div>
      <div class="opcOrderSummary_feeAndLabelGroup">
        <span class="opcOrderSummary_feeLabel opcCommonReferenceLabel">手数料</span>
        <span class="opcOrderSummary_fee">{{ summary.cost }}円（税込）</span>
      </div>

      <div class="opcOrderSummary_getPointAndLabelGroup">
        <span class="opcOrderSummary_getPointLabel opcCommonReferenceLabel">獲得予定ポイント</span>
        <span class="opcOrderSummary_getPoint">{{ summary.getPoint }}pt</span>
      </div>
      <div class="opcOrderSummary_getPointIfLoginLabelGroup"></div>

      <div class="point-coupon">
        <div class="averablePoints">ご利用可能な保有ポイントが<span class="aberablePoint">{{ pointInfo.canUsePoint }}</span>ポイントあります</div>
        <div class="points"><span class="pointLabel">ポイント利用</span>
          <span class="usePoints">{{ pointInfo.usePoint }}ポイント</span>
          <div class="pointChange"><button id="open-modal-point" data-modaal-scope="modaal_1744868421212cbcef8d63a2c7">変更する</button></div>
        </div>
        <div class="coupons"><span class="couponsLabel">クーポン利用</span><span class="useCoupons">適用あり</span>
          <div class="couponChange"><button id="open-modal-coupon" data-modaal-scope="modaal_1744868421212b25b1f106798c">変更する</button></div>
          <div class="couponDetails">
            <div v-for="coupon in useCouponList" :key="coupon.id" class="couponDetail">
              <p>（{{ coupon.name }}）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.opcOrderSummary {
  border: 1px solid;
  padding: 20px;
}


</style>