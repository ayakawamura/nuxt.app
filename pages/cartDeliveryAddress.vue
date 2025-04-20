<script setup lang="ts">
import { ref } from 'vue';
import CompleteButton from '~/components/parts/CompleteButton.vue';
import BackButton from '~/components/parts/BackButton.vue';
import type { Customer, DeliveryAddress } from '~/types/cart';
import {getCustomer} from '~/composables/cart/getApi'


const client = ref<Customer>(getCustomer())

const deliveryAddress = ref<DeliveryAddress | null>(null)
const isDeliverySet = ref<boolean>(false);

const sendForClient = () => {
  isDeliverySet.value = true;

  deliveryAddress.value = {
    id: 1,
    name: client.value.name,
    kana: client.value.kana,
    postalCode: client.value.postalCode,
    address: client.value.address,
    phone: client.value.phone,
    deliveryMethod: {
      name: null,
      hopeDate: null,
      hopeTime:null,
    },
    item: [{
      id: 0,
      name: '',
      url: '',
      price: 0,
      count: 0,
    }]
  }
}

</script>

<template>
  <div id="sysMain">
    <h1>お届け先の指定</h1><hr>

    <!-- 依頼主 -->
    <div class="client_info">
      <div class="font-weight-bold irainushichange">
        <span>ご依頼主</span>
        <a href="">変更</a>
      </div>
      <hr>

      <div>
        <div>
          <span>{{ client.name }}</span>
        </div>
        <div>
          {{ client.postalCode }} {{ client.address }}
        </div>
      </div>
    </div>

    <!-- お届け先 -->
    <div calss="deliveryAddress">

      <div class="deliveryAddressView">
        <div class="title">
          <p>お届け先</p>
          <div>
            <span class="icon notSet" v-show="!isDeliverySet">未設定</span>
            <span class="icon doneSet" v-show="isDeliverySet">設定済</span>
          </div>
        </div>
        <div v-show="isDeliverySet && deliveryAddress">
          <p>{{ deliveryAddress?.name }} 様</p>
          <p v-show="isDeliverySet">{{ deliveryAddress?.postalCode }} {{ deliveryAddress?.address }}</p>
          <a href="">変更</a>
          <a href="">削除</a>

          <!-- 商品情報 -->
          <details class="deliverySelectedItems accordion-006" style="display: block;" open=true>
            <summary><span class="shipItems">お届け商品</span></summary>
            <div class="item-image">
              <div>
                <img class="opcItem_itemImage" src="/character_apple.png" title="画像をクリックして詳細ページへ"
                  alt="りんご">
                <span class="item-name">
                  <span class="name">りんご</span><br>
                  <span class="price">商品単価：16,500円（税込）</span><br>
                  <span class="num">2個</span>
                </span>
              </div>
            </div>
            <div class="itemTotalPriceWrap">
              <span>商品合計金額（税込）</span>
              <span class="itemTotalPrice">16,500円</span>
            </div>
          </details>
        </div>
      </div>



      <div class="deliveryAddressInput" v-show="!isDeliverySet">
        <div>
          <button class="inputBtn" @click="sendForClient">ご注文者に送る</button>
          <button class="inputBtn">お届け先リストから選ぶ</button>
        </div>
        <div>
          <label>お名前</label><br>
          <input type="text">
        </div>
        <div>
          <label>フリガナ</label><br>
          <input type="text">
        </div>
        <div>
          <label>郵便番号</label><br>
          <input type="text">
        </div>
        <div>
          <label>都道府県</label><br>
          <input type="text">
        </div>
        <div>
          <label>群市区</label><br>
          <input type="text">
        </div>
        <div>
          <label>それ以降の住所</label><br>
          <input type="text">
        </div>
        <div>
          <label>電話番号</label><br>
          <input type="text">
        </div>
      </div>

      <CompleteButton nextButtonText="お届け先を決定する" link="/cartDeliveryMethod" />
      <BackButton link="/cartBasket" />
    </div>
  </div>
</template>

<style scoped>
/* 配送先入力画面CSS */
.client_info {
  background: #f6f6f6;
  font-size: 1.4rem;
  padding: 10px;
  margin: 10px 0;
}

.deliveryAddress {
  padding: 10%;
}

.deliveryAddressInput {
  margin: 0 20px;
}

.deliveryAddressInput input {
  margin: 0;
  width: 100%;
  line-height: 1.4;
  padding: 8px;
}

.item-image {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item-image div img.opcItem_itemImage {
  max-width: 20% !important;
}

span.item-name {
  display: flex;
  flex-wrap: wrap;
}







s div#sysWrap {
  overflow: visible !important;
}

.sysOpcBody #sysAll #sysWrap {
  padding-top: 0px !important;
}

.font-weight-bold {
  font-weight: 700;
}

.irainushi {
  margin-left: 0 !important;
}

.opcDeliveryAddress_edit.opcCommonEditModeBlock {
  margin-top: 10px;
  border: 0;
}

.opcCommonButton {
  font-size: 1.4rem;
  /* background: #1f1f1f !important;
      color: #fff !important; */
  display: inline-block;
  border: 1px solid #999;
}

.irainushichange {
  display: flex;
  justify-content: space-between;
}

.irainushichange a {
  text-decoration: underline;
}

.message {
  font-size: 1.5rem;
  display: inline-block;
  margin: 10px 0 0 10px;
}

.deliveryAddressView {
  background: #f6f6f6;
}

.title {
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
}

.stickyHeader {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #f6f6f6;
  /* padding-bottom: 5px; */
  padding: 10px 10px 10px 0px;
}

.edit {
  text-align: right;
  flex-basis: 100%;
  margin-bottom: 10px;
  margin-right: 10px;
}

.edit a {
  text-decoration: underline;
  display: inline-block;
  margin: 0 3px;
  /* color: red; */
  font-size: 1.4rem;
}

.opcDeliveryAddress_openDialogButtonGroup_edit {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
}

input.opcDeliveryAddress_synchronizeBillingAddressButton_edit.opcCommonButton {
  margin-right: 20px;
  display: inline-block;
}

.deliverySelectedItems {
  border-top: 1px solid #ccc;
}

.second,
.third,
.fourth,
.fifth,
.sixth,
.seventh,
.eighth,
.ninth,
.tenth {
  display: none;
}

.icons {
  margin-left: auto;
}

span.icon {
  font-size: 1.5rem;
}

span.icon.notSet {
  background: #9b9b9b;
  color: #fff;
  padding: 2px 10px;
  border-radius: 25px;
}

span.icon.doneSet {
  background: #191919;
  color: #fff;
  padding: 3px 10px;
  border-radius: 25px;
}

span.icon.setting {
  background: #9b9b9b;
  color: #fff;
  padding: 3px 10px;
  border-radius: 25px;
}

div#checkout-main {
  /* padding: 0 10px; */
}

span.deliveryAddress {
  font-size: 1.4rem;
  margin-left: 15px;
}

.nextStep {
  width: 300px;
}

.nextEdit:disabled,
.nextStep:disabled {
  background: #888 !important;
}

.operationButtons {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: row-reverse;
}

.nextSteps {
  flex-basis: 50%;
}

.completeMessage span {
  font-weight: 700;
  font-size: 1.7rem;
  display: inline-block;
  margin: 0 5px;
  color: #1f1f1f;
}

.bulkSelect {
  text-align: right;
  margin: 30px 0 20px 0;
}

.bulkSelectButton {
  background: #fff !important;
  color: #1f1f1f !important;
}

/* 画面全体のオーバーレイ（背景グレー） */
.overlay-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  /* 背景を薄いグレー */
  visibility: hidden;
  /* 初期状態で非表示 */
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s;
  z-index: 999;
}

/* スライドインするパネル */
.overlay-background .slide-panel {
  position: fixed;
  top: 0;
  right: -400px;
  /* 初期状態で画面外 */
  width: 90vw;
  height: 100vh;
  padding: 20px;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  /* 他の要素より前面に */
  overflow-y: auto;
  /* 内容が多い場合にスクロール可能にする */
}

/* オーバーレイ表示時 */
.overlay-background.active {
  visibility: visible;
  opacity: 1;
}

/* パネルがスライドイン */
.overlay-background.active .slide-panel {
  right: 0;
}

/* オーバーレイ表示中はページのスクロールを無効化 */
body.no-scroll {
  overflow: hidden;
}

.d-flex.link-underline {
  display: flex;
  justify-content: flex-start;
  font-size: 1.4rem;
}

.d-flex.link-underline>div {
  margin-right: 10px;
  text-decoration: underline;
}


.d-flex {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

input.style-checkbox-input {
  display: inline-block;
  margin-right: 10px;
  font-weight: 700;
}

.forwarding-address {
  margin-left: 28px;
}

.forwarding-name {
  font-size: 1.7rem;
  font-weight: 700;
}

.col.col-12.col-md-7 {
  /* display: flex; */
}

.address-tab-index.row.justify-content-center.tny-text-gray.my-3.my-md-2.pt-1 {
  display: flex;
  justify-content: flex-start;
  font-size: 1.4rem;
}

.col-1,
.col-2 {
  padding: 8px;
  border-right: 1px solid #ccc;
  margin-bottom: 10px;
}

.row.mx-0 {
  display: flex;
  align-items: flex-start;
}

.address-tab-label.col.col-12.col-md-2.bg-dark.text-white.rounded-top.d-md-flex.align-items-center.justify-content-center {
  margin-right: 10px;
  background: black;
  color: #fff;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

div#submenu {
  margin-top: 20px;
}


.mark {
  font-weight: 700;
}

.address-list {
  border: 1px solid;
  padding: 30px;
}

.tny-bg-lightgray3 {
  background: #eee;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.card-border {
  margin-left: 20px;
  margin-bottom: 20px;
}

.co-delivery-handler.btn-dark {
  background: black;
  padding: 6px;
  color: #fff;
  font-size: 1.4rem;
}

.float-right {
  text-align: right;
  margin-top: 20px;
}

.addDeliverAddress>a {
  display: inline-block;
  padding: 10px !important;
  font-size: 1.5rem !important;
  font-weight: 700;
}

.attention {
  background: beige;
  padding: 15px;
  text-align: center;
  margin-top: 10px;
  font-size: 1.4rem;
}

.attention .count {
  font-weight: 700;
  font-size: 1.6rem;

}

input.addressSearchWord {
  width: 60% !important;
  height: 30px !important;
  margin: 10px !important;
  padding: 4px 40px !important;
  padding-left: 30px;
  /* アイコンのスペース */
  border-radius: 20px !important;
}

.addressSearch {
  position: relative;
  display: inline-block;
  width: 100%;
}

.addressSearch .fa-search {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
}

.item-container {
  margin: 20px 0;
}

.item-price {
  margin-top: 10px;
}

.deliveryItemSelect {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: #fff;
  /* margin-top: 30px; */
  padding: 10px 0;
  font-size: 1.4rem;
  /* border-bottom: 1px solid #eee; */
  z-index: 9;
}

.slide-panel.cartItemsWrap {
  padding: 0 30px 30px 30px;
}

.deliveryItemSelect .deliveryName {
  text-align: center;
}

@media only screen and (max-width: 760px) {
  .opcDeliveryAddress_openDialogButtonGroup_edit {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  input.opcDeliveryAddress_synchronizeBillingAddressButton_edit.opcCommonButton {
    margin-right: 0px;
    display: inline-block;
  }

  .operationButtons {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }

  .nextSteps {
    flex-basis: 100%;
  }

  .row.mx-0 {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .col-1,
  .col-2 {
    padding: 6px;
    border-right: 1px solid #ccc;
    margin-bottom: 10px;
  }

  .address-tab-label.col.col-12.col-md-2.bg-dark.text-white.rounded-top.d-md-flex.align-items-center.justify-content-center {
    margin-right: 10px;
    background: #eee;
    color: black;
    padding: 10px;
    border-radius: 0;
    width: 100%;
  }

  input.addressSearchWord {
    width: 90% !important;
  }
}
</style>