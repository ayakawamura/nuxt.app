<script setup lang="ts">
import type { Point } from '~/types/cart'

interface Props {
  point: Point
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:selected', selected: number): void
  (e: 'update:usePoint', usePoint: number): void
}>()

// 選択肢変更
const handleRadioChange = (event: Event) => {
  const selectedValue = Number((event.target as HTMLInputElement).value)
  emit('update:selected', selectedValue)

  if (selectedValue == 0) {
    emit('update:usePoint', 0)
  } else if (selectedValue == 2) {
    emit('update:usePoint', props.point.canUsePoint)
  } else {
    const inputEl = document.querySelector<HTMLInputElement>('input[name="usePointInput"]')
    const inputValue = Number(inputEl?.value || 0)
    emit('update:usePoint', inputValue)
  }
}

// ポイント使用料変更
const handleUsePointInput = (event: Event) => {
  const inputValue = Number((event.target as HTMLInputElement).value)
  emit('update:usePoint', inputValue)
  emit('update:selected', 1)
}
</script>

<template>
  <h1>ポイント利用</h1>
  <hr>

  <div class="pointWrap">
    <div class="averablePoints">
      <span class="pointText">利用可能ポイント</span>
      <span class="point">
        <span class="points">{{ props.point.canUsePoint }}</span>
        <span class="pointLabel">ポイント</span>
      </span>
    </div>

    <div class="usePointWrap">
      <div>
        <input type="radio" name="point" class="pointRadio" value="0" :checked="props.point.selected == 0"
          @change="handleRadioChange">ポイントを利用しない
      </div>

      <div class="somePointUse">
        <input type="radio" name="point" class="pointRadio" value="1" :checked="props.point.selected == 1"
          @change="handleRadioChange">一部のポイントを使う
        <div>
          <input type="text" @input="handleUsePointInput" name="usePointInput" :value="props.point.usePoint">
          <span>ポイント</span>
        </div>
      </div>

      <div>
        <input type="radio" name="point" class="pointRadio" value="2" :checked="props.point.selected == 2"
          @change="handleRadioChange">
        すべてのポイントを使う
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ポイント */
.pointWrap {
  background: #fafafa;
  padding: 20px;
  font-size: 15px;
}

.averablePoints {
  margin-bottom: 10px;
}

span.pointText:after {
  content: "：";
}

.usePointWrap div {
  margin: 8px;
}

.somePointUse {
  display: flex;
  align-items: center;
}

.somePointUse input[type="text"] {
  width: 200px;
  padding: 10px;
}

span.points {
  display: inline-block;
  margin: 0 5px;
  font-size: 2.3rem;
  color: red;
}
</style>