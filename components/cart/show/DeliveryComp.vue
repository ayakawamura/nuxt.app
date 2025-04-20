<script setup lang="ts">
import EditButton from '~/components/parts/EditButton.vue';
import {getDeliveryAddressList} from '~/composables/cart/getApi'

const deliveryAddressList = getDeliveryAddressList()

</script>

<template>
  <div class="information">
    <div class="lastPageTitle">お届け先・お届け方法・商品情報</div>

    <div v-for="address in deliveryAddressList" :key="address.id" >
      <div class="opcDeliveryAddressHeader">
        <span>お届け先({{ address.id + 1 }}件目)</span>
        <input type="button" class="open-modal-delete" value="削除する" data-modaal-scope="modaal_1744882130242180566578b885">
      </div>

      <div class=deliveryAddressWrap>
        <div class="deliveryAddressSubTitle">
          <div>お届け先</div>
          <div>
            <input type="button" value="変更する" >
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th>お名前</th>
              <td>{{ address.name }}</td>
            </tr>
            <tr>
              <th>住所</th>
              <td>{{ address.address }}</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>{{ address.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class=deliveryAddressWrap>
        <div class="deliveryAddressSubTitle">
          <div>お届け方法・お届け希望日</div>
          <div>
            <input type="button" value="変更する" >
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <th>お届け方法</th>
              <td>{{ address.deliveryMethod.name }}</td>
            </tr>
            <tr>
              <th>お届け希望日</th>
              <td>{{ address.deliveryMethod.hopeDate }}</td>
            </tr>
            <tr>
              <th>お届け希望時間帯</th>
              <td>{{ address.deliveryMethod.hopeTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class=deliveryAddressWrap>
        <div class="deliveryAddressSubTitle">
          <div>商品情報</div>
          <div>
            <input type="button" value="商品を変更する" >
          </div>
        </div>

        <p>商品</p>
        <div v-for="item in address.item" :key="item.id" class="opcItem_itemAndLabelGroup">
          <div class="opcItem_itemImageGroup">
            <img :src="item.url" title="画像をクリックして詳細ページへ" alt="十二単「満開」(お米2合×12個)">
          </div>

          <div class="opcItem_itemSummary">
            <div class="opcItem_itemNameGroup">
              <span>{{ item.name }}</span>
            </div>
            <div class="opcItem_itemNumAndPricesAndLabelGroup">
              <div class="itemLabelGroup itemTotalPrice">
                <span>商品小計</span>
                <div class="itemLabelGroupDiv">
                  <span>{{ item.price * item.count }}円（税込）</span>
                </div>
              </div>
              <div class="itemLabelGroup">
                <span>商品単価</span>
                <div class="itemLabelGroupDiv">
                  <span>{{ item.price }}円（税込）</span>
                </div>
              </div>
              <div class="itemLabelGroup">
                <span>数量計</span>
                <div class="itemLabelGroupDiv">
                  <span>{{ item.count }}点</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
    <EditButton text="変更する" link="" />
  </div>
</template>

<style>
.deliveryAddressWrap {
  margin-bottom: 50px;
}
.opcDeliveryAddressHeader {
    background: #7F7F7F;
    color: #fff;
    font-weight: bold !important;
    border: none;
    padding: 5px 10px !important;
    text-align: left !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}

.deliveryAddressSubTitle {
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    margin: 0 0 15px;
    font-size: 20px;
    font-weight: bold;
}

.opcItem_itemAndLabelGroup {
  display: flex;
  flex: wrap;
}
.opcItem_itemImageGroup {
  width: 40%;
}
.opcItem_itemImageGroup img{
  width: 100%;
}

.opcItem_itemNameGroup {
  font-size: 15px;
  margin-bottom: 15px;
}
.opcItem_itemSummary {
  width: 60%;
  font-size: 12px;
}
.itemLabelGroup{
  display: flex;

}
.itemLabelGroup div {
  margin-left: auto;
}
.itemTotalPrice {
  border-bottom: 1px solid ;
}
</style>
