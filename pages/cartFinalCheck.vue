<script setup lang="ts">
// import { ref } from 'vue';
import ClientComp from '~/components/cart/show/ClientComp.vue';
import CustomerComp from '~/components/cart/show/CustomerComp.vue';
import SummaryComp from '~/components/cart/show/SummaryComp.vue';
import DeliveryComp from '~/components/cart/show/DeliveryComp.vue'
import PaymentMethodComp from '~/components/cart/show/PaymentMethodComp.vue'
import RemarksComp from '~/components/cart/show/RemarksComp.vue'
import CompleteButton from '~/components/parts/CompleteButton.vue';
import EditButton from '~/components/parts/EditButton.vue';

</script>

<template>
  <div id="sysMain">
    <h1>最終確認画面</h1>
    <hr>

    <div class="lastPageWrap">
      <!-- サマリ -->
      <div id="summury">
        <SummaryComp />
        <CompleteButton nextButtonText="注文を確定する" link=""/>
        <EditButton text="買い物かごに戻る" link=""/>
      </div>

      <!-- 一覧 -->
      <div id="sysOpc" class="opc">

        <!-- ご注文者情報 -->
        <CustomerComp />

        <!-- 依頼主 -->
        <ClientComp />

        <!-- お届け先情報 -->
        <DeliveryComp />

        <!-- 支払い情報 -->
        <PaymentMethodComp />

        <!-- 備考 -->
        <RemarksComp />
      </div>

    </div>
  </div>
</template>

<style>
/* 共通 */

.lastPageTitle {
  background: #EEEEEE;
  border: none;
  font-weight: bold;
  padding: 0px 10px !important;
  font-size: 19px;
  height: 40px;
  line-height: 40px;
  text-align: left;
  border-bottom: 1px solid #d0d0d0;
  margin-bottom: 25px;
}

.lastPageWrap {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
}

div#summury {
  /* postion: -webkit-sticky; */
  position: sticky;
  top: 20px;
  margin-top: 43px;
  flex-basis: 32%;
  padding: 20px;
}

#sysOpc {
  width: 60%;
  top: 20px;
  margin-top: 43px;
  margin-right: auto;

}

.information {
  padding-bottom: 100px;
}

table {
  width: 95%;
  text-align: left;
  border-collapse: collapse;
  margin: 0 auto;
}

th,
td {
  border: 1px solid #d0d0d0;
  padding: 10px;
}

table tr th {
  background-color: #EEEEEE;
}

/*------------------------------------------------------------
  4. ブロック個別スタイル
  ------------------------------------------------------------*/
/*------------------------------------------------------------
  4-1. 注文確認
  ------------------------------------------------------------*/
/* 注文ボタン枠の装飾 */
.opcConfirm {
  background-color: #fff;
  color: black;
  text-align: center;
}

/* 注文確定ボタン、 入力状況ボタン*/
.opcConfirm_order,
.opcConfirm_order_disable {
  width: 90%;
  color: #fff;
}

/* 注文確定ボタン（有効）、 入力状況ボタン（有効） */
.opcConfirm_order {
  background-color: #da4636;
}

/* エラーメッセージ */
.opcConfirm_initialErrorMessage {
  width: 90%;
  display: inline-block;
  text-align: left;
}


/*------------------------------------------------------------
  4-2. お支払い情報
  ------------------------------------------------------------*/
/* 合計金額＋ラベルグループ */
.opcOrderSummary_totalPricesAndLabelGroup {
  font-size: 16px;
  font-weight: bold;
  padding: 2px 5px;
  margin: 1px 0px;
  border-bottom: 1px dotted;
  overflow: hidden;
}

/* 合計金額グループ */
.opcOrderSummary_totalPricesGroup,
.opcOrderSummary_totalAmount,
.opcOrderSummary_totalPoint {
  float: right;
  font-size: 16px;
  text-align: right;
}

.opcOrderSummary_totalAmountGroup {
  clear: both;
}

/* 内訳金額グループ */
.opcOrderSummary_priceBreakDownGroup {
  padding-left: 1em;
}

/* 内訳金額の右寄せ */
.opcOrderSummary_totalItemPricesGroup,
.opcOrderSummary_deliveryCost,
.opcOrderSummary_totalCartOptionPrice,
.opcOrderSummary_fee,
.opcOrderSummary_itemDiscount,
.opcOrderSummary_useCouponPrice,
.opcOrderSummary_usePointPrice,
.opcOrderSummary_getPoint,
.opcOrderSummary_getPointIfLoginLabel,
.opcOrderSummary_prospectPoint,
.opcOrderSummary_isolatedIslandCostMessage,
.opcOrderSummary_remainFreeShippingCost {
  float: right;
  text-align: right;
}

/* 内訳金額の右寄せをclearfix */
.opcOrderSummary_priceBreakDownGroup::after,
.opcOrderSummary_totalItemPricesAndLabelGroup,
.opcOrderSummary_deliveryCostAndLabelGroup,
.opcOrderSummary_isolatedIslandCostMessageAndLabelGroup,
.opcOrderSummary_totalCartOptionPriceAndLabelGroup,
.opcOrderSummary_feeAndLabelGroup,
.opcOrderSummary_itemDiscountAndLabelGroup,
.opcOrderSummary_useCouponPriceAndLabelGroup,
.opcOrderSummary_usePointPriceAndLabelGroup,
.opcOrderSummary_getPointAndLabelGroup,
.opcOrderSummary_getPointIfLoginLabelGroup,
.opcOrderSummary_prospectPointAndLabelGroup,
.opcOrderSummary_remainFreeShippingCostAndLabelGroup {
  content: "";
  display: block;
  clear: both;
}

/* 内訳金額内の罫線 */
.opcOrderSummary_feeAndLabelGroup,
.opcOrderSummary_usePointPriceAndLabelGroup {
  border-bottom: 1px dotted;
}


.point-coupon {
  padding: 10px;
  background: aliceblue;
  font-weight: 700;
}

.points {
  margin-bottom: 10px;
}

span.pointLabel {
  margin-right: 20px;
}

span.pointLabel:after {
  content: "：";
}

span.couponsLabel {
  margin-right: 20px;
}

span.couponsLabel:after {
  content: "：";
}

.point-coupon button {
  padding: 2px 8px;
  background: #fff;
  /* color: #fff; */
  border-radius: 4px;
  border: 1px solid #1f1f1f;
}

.opcConfirm span {
  font-size: 1.4rem;
  display: inline-block;
  margin-bottom: 20px;
}

.opcOrderBackToBasketArea {
  /* margin: 0 auto; */
  text-align: center;
  font-size: 1.5rem;
  /* padding: 0 40px !important; */
}

.couponDetails {
  font-size: 1.2rem;
  font-weight: 400;
  flex-grow: 2;
  text-align: right;
}

.couponDetail p {
  font-size: 1.3rem !important;
}

p {
  margin: 0 !important;
  padding: 2px !important;
}

span.aberablePoint {
  font-weight: 700;
  display: inline-block;
  margin: 0 2px;
  color: red;
}

.averablePoints {
  font-weight: 400;
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.point-coupon button {
  font-size: 1.3rem;
  font-weight: 500;
}

.hako input[type="radio"] {
  display: none !important;
}

/* ご注文者情報 */
.sysOpcBody #sysAll #sysWrap #sysMain #sysOpc .lastPageTitle:not(.opcItemCommonOptionsTitle) {
  background: #EEEEEE;
  border: none;
  font-weight: bold;
  padding: 0px 10px !important;
  font-size: 19px;
  height: 40px;
  line-height: 40px;
}
</style>