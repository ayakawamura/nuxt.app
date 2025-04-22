<script setup lang="ts">

const emit = defineEmits<{
  (e: 'update:remark', text: string): void
}>()

const handleTextInput = (event: Event) => {
  const text = String((event.target as HTMLInputElement).value)

    emit('update:remark', text)
}

// ページ遷移時のAPI実行
const saveApi = () => {
  // ここでAPI実行
  console.log('備考保存')
}
defineExpose({ saveApi })

</script>

<template>
<h1>備考</h1>
<hr>

<div class="remarkWrap">
  <div class="opcRemarksArea">
    <div class="opcRemarks_edit">
      <span class="opcRemarks_remarkDescription_edit">ご要望等ございましたら、備考にご入力ください。</span>
      <textarea class="opcRemarks_remark_edit" @input="handleTextInput"></textarea>
    </div>
  </div>
</div>
</template>

<style>
.remarkWrap {
  background: #fafafa;
  padding: 20px;
  font-size: 15px;
}

.opcRemarksArea {
  margin-bottom: 80px;
}

.opcRemarks_edit .opcRemarks_remark_edit {
  margin: 10px 10px;
  width: calc(100% - 20px);
}

.opcRemarks_remark_edit {
    font-size: 19px;
    line-height: 1.6;
    letter-spacing: 0;
    background: #fff;
    border: 1px solid #969696;
    border-radius: 0;
    min-height: 200px;
  }

</style>