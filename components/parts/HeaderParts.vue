<script setup lang="ts">
import {getHeaderParts} from '~/composables/getPartsItem'

const partsItem = getHeaderParts()

</script>

<template>
  <!-- パーツ共通コンテンツ -->
  <div :class="[partsItem.partsId, partsItem.className, partsItem.styleName, partsItem.display_mobile, partsItem.display_tablet, partsItem.display_pc, partsItem.sysLazyload]">
    <!-- 見出し -->
     <component :is="partsItem.parts.headline_element" class="sysHeadline" :class="partsItem.sysAccordion" v-if="partsItem.parts && partsItem.parts.headline_text">
      {{ partsItem.parts.headline_text }}
     </component>

     <!-- パーツ固有コンテンツ -->
    <div class="sysContent" :class="partsItem.sysAccordionInitialHide">

      <!-- nuxt3ではそもそも同期/非同期で処理分けなくていいかも -->
      <!-- 同期読み込み -->
      <template v-if="partsItem.parts && partsItem.rendered">
        <div v-html="partsItem.rendered"></div>
      </template>

      <!-- 非同期読み込み -->
      <template v-if="partsItem.parts && !partsItem.rendered">
          <!-- パーツタイプがテキストの場合は独自タグの変換を行った状態で取得する必要あり -->
          <div v-html="partsItem.parts.contents_html"></div>
          <!-- 以下でもいける -->
          <!-- <EmbeddedContent :uri="partsItem.uri" /> -->
      </template>
      </div>

      <div v-if="partsItem.parts && $partsType == 'funcCartInfo'">
    </div>
  </div>
</template>