<script setup lang="ts">
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
          <div class="row mx-0">
            <div class="address-tab-label col col-12 col-md-2 bg-dark text-white rounded-top d-md-flex align-items-center justify-content-center">
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
            <div class="sender">
              <div class="d-flex ml-md-2 mr-md-4">
                <div class="col m-auto">
                  <label class="style-checkbox d-flex">
                    <input type="checkbox" class="style-checkbox-input" name="deliveryAddressId" value="D40482331-20240407173742">
                    <span class="style-checkbox-dummy"></span><span class="style-checkbox-label"></span>
                    <div class="forwarding-name">
                      <span class="font-weight-bold">
                        市村沙月 様</span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="row ml-2 mr-2 mr-md-4">
                <div class="forwarding-address">

                  〒0493519
                  <br class="d-sm-none">
                  北海道山越郡長万部町旭浜4-18

                </div>
              </div>
            </div>
          </div>
          <div class="px-2 px-md-4 pt-3 pb-3 mb-3 card-border">
            <div class="sender">
              <div class="d-flex ml-md-2 mr-md-4">
                <div class="col m-auto">
                  <label class="style-checkbox d-flex">
                    <input type="checkbox" class="style-checkbox-input" name="deliveryAddressId" value="D40482331-20240407173742">
                    <span class="style-checkbox-dummy"></span><span class="style-checkbox-label"></span>
                    <div class="forwarding-name">
                      <span class="font-weight-bold">
                        大友咲季 様</span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="row ml-2 mr-2 mr-md-4">
                <div class="forwarding-address">

                  〒5450034
                  <br class="d-sm-none">
                  大阪府大阪市阿倍野区阿倍野元町1-2-20

                </div>
              </div>
            </div>
          </div>

          <span id="ta" class="anchor"></span>
          <div class="col-12 tny-bg-lightgray3 font-weight-bold px-md-3 px-md-3 py-1 mb-3">
            た
          </div>
          <div class="px-2 px-md-4 pt-3 pb-3 mb-3 card-border">
            <div class="sender">
              <div class="d-flex ml-md-2 mr-md-4">
                <div class="col m-auto">
                  <label class="style-checkbox d-flex">
                    <input type="checkbox" class="style-checkbox-input" name="deliveryAddressId" value="D40482331-20240407173742">
                    <span class="style-checkbox-dummy"></span><span class="style-checkbox-label"></span>
                    <div class="forwarding-name">
                      <span class="font-weight-bold">
                        田中太郎 様</span>
                    </div>
                  </label>
                </div>
              </div>
              <div class="row ml-2 mr-2 mr-md-4">
                <div class="forwarding-address">

                  〒1040061
                  <br class="d-sm-none">
                  東京都中央区銀座123 タワーマンション905号

                </div>
              </div>
            </div>
          </div>
          <span id="ya" class="anchor"></span>
          <div class="col-12 tny-bg-lightgray3 font-weight-bold px-md-3 px-md-3 py-1 mb-3">
            や
          </div>
          <div class="px-2 px-md-4 pt-3 pb-3 mb-3 card-border">
            <div class="sender">
              <div class="d-flex ml-md-2 mr-md-4">
                <div class="col m-auto">
                  <label class="style-checkbox d-flex">
                    <input type="checkbox" class="style-checkbox-input" name="deliveryAddressId" value="D40482331-20240521191223">

                    <span class="style-checkbox-dummy"></span><span class="style-checkbox-label"></span>
                    <div class="forwarding-name">

                      <span class="font-weight-bold">
                        山下次郎 様</span>

                    </div>
                  </label>
                </div>

              </div>
              <div class="row ml-2 mr-2 mr-md-4">
                <div class="forwarding-address">

                  〒1040061
                  <br class="d-sm-none">
                  東京都中央区銀座１２３

                </div>
              </div>
            </div>

          </div>
          <div class="px-2 px-md-4 pt-3 pb-3 mb-3 card-border">
            <div class="sender">
              <div class="d-flex ml-md-2 mr-md-4">
                <div class="col m-auto">
                  <label class="style-checkbox d-flex">
                    <input type="checkbox" class="style-checkbox-input" name="deliveryAddressId" value="D40482331-20240406112308">

                    <span class="style-checkbox-dummy"></span><span class="style-checkbox-label"></span>
                    <div class="forwarding-name">

                      <span class="font-weight-bold">
                        吉田花子 様</span>

                    </div>
                  </label>
                </div>
              </div>
              <div class="row ml-2 mr-2 mr-md-4">
                <div class="forwarding-address">

                  〒6110021
                  <br class="d-sm-none">
                  京都府宇治市宇治123

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input type="button" @click="closeAddressList" class="opcDeliveryAddress_backButton_edit opcCommonButtonEdit save" value="設定する" >

  </div>
</div>
</template>