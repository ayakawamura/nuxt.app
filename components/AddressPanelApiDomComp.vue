<script setup>

// お届け先取得
const { data, pending, error } = await useFetch('/api/address')

// const { data, pending, error } = await useFetch(
//   // 'https://console.moroco.ln/api/backyard/addressList'
//   'https://console.stg3.moroco.biz/api/backyard/addressList'
// )
const addressList = computed(() => data.value?.addressList || [])


// お届け先リストクローズ
const closeAddressList = () => {
  const target = document.querySelector('.overlay-background');
  if (target) {
    target.classList.remove('active');
  }
}

</script>

<template>
  <div class="overlay-background">
    <div class="slide-panel">
      <div class="col address-tab-wrapper">
        <div id="submenu" class="row address-tab mb-4 font-weight-bold active">
          <div class="col-12 px-0 address-tab-in">
            <input type="button" @click="closeAddressList"
              class="opcDeliveryAddress_backButton_edit opcCommonButtonEdit save" value="設定する">

            <div class="row mx-0">
              <div
                class="address-tab-label col col-12 col-md-2 bg-dark text-white rounded-top d-md-flex align-items-center justify-content-center">
                お届け先一覧</div>
              <div class="col col-12 col-md-7">
                <div class="address-tab-index row justify-content-center tny-text-gray my-3 my-md-2 pt-1">

                  <div class="col-1 text-center border-right border-dark">あ</div>
                  <div class="col-1 text-center border-right border-dark">か</div>
                  <div class="col-1 text-center border-right border-dark">さ</div>
                  <div class="col-1 text-center border-right border-dark mark"><a href="#ta">た</a></div>
                  <div class="col-1 text-center border-right border-dark">な</div>
                  <div class="col-1 text-center border-right border-dark">は</div>
                  <div class="col-1 text-center border-right border-dark">ま</div>
                  <div class="col-1 text-center border-right border-dark mark"><a href="#ya">や</a></div>
                  <div class="col-1 text-center border-right border-dark">ら</div>
                  <div class="col-1 text-center border-right border-dark">わ</div>
                  <div class="col-2 text-left">他</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="addressSearch">
        <i class="fas fa-search"></i>
        <input type="text" class="addressSearchWord" value="">
      </div>
      <div class="address-list col-lg-12">
        <div class="forwarding-info forwarding-multiple">
          <div class="form-group "> <span id="ta" class="anchor"></span>
            <div class="col-12 tny-bg-lightgray3 font-weight-bold px-md-3 px-md-3 py-1 mb-3">
              あ
            </div>
            <div class="px-2 px-md-4 pt-3 pb-3 mb-3 card-border">
              <div v-if="pending">読み込み中...</div>
              <div v-if="error">エラー: {{ error }}</div>

              <div v-for="address in addressList" :key="address.id" class="sender">
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <div class="d-flex ml-md-2 mr-md-4">
                                      <div class="col m-auto">
                                        <label class="style-checkbox d-flex">
                                          <input type="checkbox" class="style-checkbox-input" name="deliveryAddressId"
                                            value="D40482331-20240407173742">
                                          <span class="style-checkbox-dummy"></span><span
                                            class="style-checkbox-label"></span>
                                          <div class="forwarding-name">
                                            <span class="font-weight-bold">
                                              {{ address.name }} 様</span>
                                          </div>
                                          <div class="forwarding-address">{{ address.kana }}</div>
                                        </label>
                                      </div>
                                    </div>
                                    <div class="row ml-2 mr-2 mr-md-4">
                                      <div class="forwarding-address">

                                        〒{{ address.postalCode }}
                                        <br class="d-sm-none">
                                        {{ address.address }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>