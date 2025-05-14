<script setup lang="ts">
import type { DeliveryAddress } from '~/types/cart';

interface Props {
  deliveryAddress: DeliveryAddress,
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'updateDeliveryMethod', updated: { id: number; methodName: string }): void
}>()

const handleChange = (event: Event) => {
  const methodName = (event.target as HTMLInputElement).value
  emit('updateDeliveryMethod', {
    id: props.deliveryAddress.id,
    methodName,
  })
}

</script>


<template>

  <div class="main-container">
    <div class="sub-container1">
      <div class="deliveryCount">{{ props.deliveryAddress.id + 1 }}件目</div>
      <div class="deliveryName">{{ props.deliveryAddress.name }}様
        <div class="deliveryAddress">{{ props.deliveryAddress.postalCode }} {{ props.deliveryAddress.address }}</div>
      </div>
      <div>
        <p>配送方法：{{ props.deliveryAddress.deliveryMethod.name }}</p>
        <p>配送希望日：{{ props.deliveryAddress.deliveryMethod.hopeDate }}</p>
        <p>配送希望時間帯：{{ props.deliveryAddress.deliveryMethod.hopeTime }}</p>
      </div>
    </div>

    <div class="sub-container2">
      <!-- 商品情報 -->
      <details class="shipWrap accordion-006">
        <summary>
          <span>出荷{{ props.deliveryAddress.id + 1 }}<span class="shipItems">対象の商品はこちら</span></span>
        </summary>
        <div class="item-image">
          <div>
            <img class="opcItem_itemImage" src="/cat.jpg" title="画像をクリックして詳細ページへ" alt="十二単「満開」(お米2合×12個)">
            <span class="item-name">十二単「満開」(お米2合×12個)</span>
          </div>
        </div>
      </details>

      <!-- 宅配便 -->
      <div class="deliveryMethod">
        <div class="deliveryName">
          <input v-model="props.deliveryAddress.deliveryMethod.name"
            id="deliveryAddress.id" type="radio" :name="'method_' + props.deliveryAddress.id"
            value="宅配便">
          <label for="deliveryAddress.id">宅配便</label>
        </div>
        <div class="deliveryMethodSelect" v-show="props.deliveryAddress.deliveryMethod.name == '宅配便'">
          <div class="opcDeliveryMethod_normalShippingDetailAndLabelGroup_edit">
            <div class="opcDeliveryMethod_hopeDeliveryDateAndLabelGroup_edit">
              <span class="opcDeliveryMethod_hopeDeliveryDateLabel_edit opcCommonReferenceLabel">お届け希望日</span><span
                class="attention">2025/2/7～2/19 でご指定いただけます。</span>
              <div>
                <select v-model="props.deliveryAddress.deliveryMethod.hopeDate"
                  class="opcDeliveryMethod_hopeDeliveryDate_edit opcCommonInputSelect">
                  <option value="">指定無し</option>
                  <option value="2月7日">2月7日（金）【仏滅】</option>
                  <option value="2月8日">2月8日（土）【大安】</option>
                  <option value="2月9日">2月9日（日）【赤口】</option>
                  <option value="2月10日">2月10日（月）【先勝】</option>
                  <option value="2月11日">2月11日（火）【友引】</option>
                  <option value="2月12日">2月12日（水）【先負】</option>
                  <option value="2月13日">2月13日（木）【仏滅】</option>
                </select>
                <select class="opcDeliveryMethod_hopeDeliveryAuspiciousText_edit opcCommonInputSelect">
                  <option value="1">仏滅を避けた最短お届け日を希望する</option>
                  <option value="2">仏滅でもよいので、最短に届く日に手配依頼をしたい</option>
                </select>
              </div>
            </div>

            <!-- 希望時間帯 -->
            <div class="opcDeliveryMethod_hopeDeliveryTimeAndLabelGroup_edit">
              <span class="opcDeliveryMethod_hopeDeliveryTimeLabel_edit opcCommonReferenceLabel">お届け希望時間帯</span>
              <select v-model="props.deliveryAddress.deliveryMethod.hopeTime"
                class="opcDeliveryMethod_hopeDeliveryTime_edit opcCommonInputSelect">
                <option value="">指定無し</option>
                <option value="午前中">午前中</option>
                <option value="14時～16時">14時～16時</option>
                <option value="16時～18時">16時～18時</option>
                <option value="18時～20時">18時～20時</option>
                <option value="19時～21時">19時～21時</option>
              </select>
            </div>
          </div>
        </div>
        <div class="deliveryComent" v-show="props.deliveryAddress.deliveryMethod.name == '宅配便'">
          <details class="accordion-006">
            <summary>配送コメント</summary>
            <div>ここに配送コメント</div>
          </details>
        </div>

      </div>

      <!-- メール便 -->
      <div class="deliveryMethod">
        <div class="deliveryName">
          <input
          v-model="props.deliveryAddress.deliveryMethod.name"
          type="radio"
          :name="'method_' + deliveryAddress.id"
            value="メール便">メール便
        </div>

        <div class="deliveryComent" v-show="props.deliveryAddress.deliveryMethod.name == 'メール便'">
          <details class="accordion-006">
            <summary>配送コメント</summary>
            <div>ここに配送コメント</div>
          </details>
        </div>
      </div>

      <!-- 店舗受け取り -->
      <div class="deliveryMethod">
        <div class="deliveryName">
          <input type="radio" :name="'method_' + props.deliveryAddress.id" v-model="props.deliveryAddress.deliveryMethod.name"
            value="店舗受取">店舗受取
        </div>
        <div class="deliveryMethodSelect" v-show="props.deliveryAddress.deliveryMethod.name == '店舗受取'">
          <div class="opcDeliveryMethod_normalShippingDetailAndLabelGroup_edit">
            <div class="opcDeliveryMethod_hopeDeliveryDateAndLabelGroup_edit">
              <span class="opcDeliveryMethod_hopeDeliveryDateLabel_edit opcCommonReferenceLabel">受取希望日</span>
              <span class="attention">2025/2/7～2/19 でご指定いただけます。</span>
              <div class="receiveHopeDate">
                <select v-model="props.deliveryAddress.deliveryMethod.hopeDate"
                  class="opcDeliveryMethod_hopeDeliveryDate_edit opcCommonInputSelect">
                  <option value="">指定無し</option>
                  <option value="2月7日">2月7日（金）【仏滅】</option>
                  <option value="2月8日">2月8日（土）【大安】</option>
                  <option value="2月9日">2月9日（日）【赤口】</option>
                  <option value="2月10日">2月10日（月）【先勝】</option>
                  <option value="2月11日">2月11日（火）【友引】</option>
                  <option value="2月12日">2月12日（水）【先負】</option>
                </select>
              </div>
            </div>
            <div class="opcDeliveryMethod_hopeDeliveryTimeAndLabelGroup_edit">
              <span class="opcDeliveryMethod_hopeDeliveryTimeLabel_edit opcCommonReferenceLabel">受取希望時間帯</span>
              <select v-model="props.deliveryAddress.deliveryMethod.hopeTime"
                class="opcDeliveryMethod_hopeDeliveryTime_edit opcCommonInputSelect">
                <option value="">指定無し</option>
                <option value="午前中">午前中</option>
                <option value="14時～16時">14時～16時</option>
                <option value="16時～18時">16時～18時</option>
                <option value="18時～20時">18時～20時</option>
                <option value="19時～21時">19時～21時</option>
              </select>
            </div>
          </div>
        </div>

        <div class="deliveryComent" v-show="props.deliveryAddress.deliveryMethod.name == '店舗受取'">
          <details class="accordion-006">
            <summary>店舗受取コメント</summary>
            <div>ここに店舗受取コメント</div>
          </details>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.bulkGitfSetting {
  margin-bottom: 20px;
}

.bulkGitfSetting button {
  background-color: #1F1F1F;
  color: #fff;
  margin-bottom: 10px;
  padding: 4px;
}

div#sysWrap {
  overflow: visible !important;
}

details.shipWrap {
  margin-left: 0;
}

.accordion-006 {
  width: 100%;
  margin-bottom: 8px;
  font-size: 1.5rem;
  background: #f6f6f6;
  padding: 10px 5px;
}

.accordion-006 summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #333333;
  font-weight: 600;
  cursor: pointer;
}

.accordion-006 summary::-webkit-details-marker {
  display: none;
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

.accordion-006[open] summary::after {
  transform: rotate(225deg);
}

.accordion-006 p {
  transform: translateY(-10px);
  opacity: 0;
  margin: 0;
  padding: .3em 2em 1.5em;
  color: #333333;
  transition: transform .5s, opacity .5s;
}

.accordion-006[open] p {
  transform: none;
  opacity: 1;
}

details[open] div {
  padding: 0.5em;
  background: #fff;
}

span.shipItems {
  display: inline-block;
  font-size: 1.3rem;
  margin-left: 30px;
}

.item-image {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.deliveryMethod {
  margin: 10px 10px 0 20px;
  font-size: 1.5rem;
  flex-grow: 2;
  flex-basis: 100%;
  border: 1px solid #c8c8c8;
  padding: 10px;
  border-radius: 6px;
}

.opcDeliveryMethod_hopeDeliveryDateLabel_edit,
.opcDeliveryMethod_hopeDeliveryTimeLabel_edit {
  width: auto;
  font-weight: 700;
  margin: 16px 0;
}

span.attention {
  display: inline-block;
  margin: 16px 0;
  font-size: 1.3rem;
}

.deliveryMethodSelect {
  margin-left: 45px;
}

.deliveryComent {
  margin-left: 45px;
  width: 80%;
}

.opcDeliveryMethod_hopeDeliveryDateAndLabelGroup_edit {
  display: flex;
  flex-wrap: wrap;
}

.opcDeliveryMethod_hopeDeliveryTimeAndLabelGroup_edit {
  display: flex;
  flex-wrap: wrap;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

.receiveHopeDate {
  flex-basis: 100%;
}

span.opcDeliveryMethod_hopeDeliveryTimeLabel_edit.opcCommonReferenceLabel {
  flex-basis: 100%;
}

img {
  width: 100%;
}

.nextButtonArea {
  width: 100%;
  margin: 0 auto;
}

input.opcSelectDeliveries_backButton_edit.opcCommonButtonEdit {
  margin: 20px auto 0 auto;
  background-color: #dd685c;
  color: #fff;
}

.main-container {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  border: 1px solid #9b9b9b;
  margin-bottom: 10px;
}

.sub-container1 {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 25%;
  align-items: center;
  padding: 8px !important;
  font-weight: bold;
  font-size: 14px;
}

.sub-container2 {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 75%;
  padding: 10px !important;
}

.item-container {
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  align-items: center;
  padding: 5px;
  border-bottom: 1px dotted #9b9b9b;
}

.item-container:last-of-type {
  border-bottom: none;
}

.deliveryCount {
  flex-basis: 100%;
  text-align: left;
  font-size: 1.5rem;
}

.deliveryName {
  flex-basis: 100%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
}

.deliveryAddress {
  font-size: smaller;
  font-weight: 400;
}

.checkItem {
  flex-basis: 20%;
}

.item-image {
  flex-basis: 20%;
}

.item-image div {
  display: flex;
  justify-content: flex-start;
  flex-basis: 48%;
  margin: 2px;
  border-bottom: 1px solid #eee;
}

.item-image div img.opcItem_itemImage {
  /* flex-basis: 50%; */
  max-width: 20% !important;
}

.item-name {
  flex-basis: 40%;
  text-align: left;
  padding-left: 10px;
  font-size: 1.4rem;
  flex-grow: 2;
}

.item-count {
  flex-basis: 20%;
  text-align: left;
  font-size: 1.4rem;
}

.item-price {
  flex-basis: 100%;
  text-align: left;
}

.item-option {
  flex-basis: 100%;
  text-align: right;
  padding: 10px 0;
}

.noshi {
  flex-basis: 100%;
  /* text-align: right;
  */
  padding: 10px 0;
}

.item-option-change {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 3px;
  color: #000;
  text-decoration: none;
}

.explainMessage {
  font-size: 1.3rem;
  text-align: center;
}

.explainMessage span {
  display: inline-block;
  font-weight: 700;
  font-size: 1.6rem;
  color: blue;
  padding: 0 4px;
}

.optionSetMessage {
  text-align: right;
  flex-basis: 100%;
}

.selectOptionDetail {
  flex-basis: 40%;
  text-align: right;
  margin-top: 5px;
}


.changeGiftOption {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 3px;
  background-color: #1E1E1E;
  color: #fff;
  font-size: 1.4rem;
}

.changeGiftOption:hover {
  background-color: #1E1E1E;
  color: #fff;
  opacity: 0.8;
}

.giftOption {
  text-align: left;
  margin: 20px 0 20px 0;
}

.giftOption div {
  margin: 10px;
}

.optionLavel+select {
  width: 300px !important;
}

span.optionLavel {
  font-size: larger;
  font-weight: bolder;
}

.noshiDetail {
  display: flex;
  flex-wrap: wrap;
}

.noshiRadio {
  flex-basis: 400px;
  margin: 10px;
}

img.itemOptionimg {
  width: 100%;
}

.itemBlock {
  padding: 10px;
}

.opcCommonInputRadio {
  display: none;
}

.opcCommonInputRadio:checked~.itemBlock {
  border: 3px solid #dd685c;
}

.itemOptionNames {
  display: flex;
  flex-wrap: wrap;
}

.itemOptionNames input[type=text] {
  padding: 8px;
  width: 300px;
}

.optionButtonArea {
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.optionHeader {
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bolder;
}

.optionIcon {
  margin-right: 5px;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 20px;
  color: #fff;
  font-size: 1.4rem;
}

.notSelectOptionIcon {
  background: #9b9b9b;
}

.selectOptionIcon {
  background: green;
}

details {
  margin: 0 0 0 auto;
}

details .itemOptionNames input[type=text] {
  width: 150px;
}

details .giftOption {
  background: #f4f5f9;
}

summary.ikkatsuChange {
  margin: 20px;
  padding: 10px;
  /* border: 1px solid;
   */
  width: 300px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  background: burlywood;
}

.add_accordion {
  display: block;
  color: #fff !important;
  font-weight: bold;
  padding: 15px 10px;
  background: #736359;
  background-image: url(../img/arrow_down.png);
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: 95% center;
  width: auto;
  max-width: 260px;
  border-radius: 4px;
  text-align: center;
  margin: 20px;
}

button.countBtn {
  border: none;
  padding: 4px;
}

.selectOptionDetail p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
