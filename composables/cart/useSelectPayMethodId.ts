// useStateを使用する場合（リロードで消える）
// export const useSelectPayMethodId = () => {
//   return useState<number | undefined>('selectPayMethodId', () => undefined)

// }


// useCookieを使用する場合
export const useSelectPayMethodId = () => {
  const cookie = useCookie<number>('selectPayMethodId', {
    default: () => 0,
    maxAge: 60 * 60 * 24, // 1日保存（必要に応じて調整してOK）
  })

  return cookie
}


// localStorageを使用する場合
// import { ref, watch } from 'vue'

// export const useSelectPayMethodId = () => {
//   const storageKey = 'selectPayMethodId'

//   // 最初にlocalStorageから値を読む
//   const selectPayMethodId = ref<number | null>(null)
//   if (process.client) {
//     const saved = localStorage.getItem(storageKey)
//     selectPayMethodId.value = saved !== null ? Number(saved) : null
//   }

//   // 値が変わったらlocalStorageにも保存
//   watch(selectPayMethodId, (newVal) => {
//     if (process.client) {
//       if (newVal === null) {
//         localStorage.removeItem(storageKey)
//       } else {
//         localStorage.setItem(storageKey, newVal.toString())
//       }
//     }
//   })

//   return selectPayMethodId
// }