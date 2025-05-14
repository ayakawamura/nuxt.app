export default defineEventHandler(async () => {
  const res = await fetch('https://console.stg3.moroco.biz/api/backyard/largeCouponList')
  // const res = await fetch('https://console.moroco.ln/api/backyard/largeCouponList')

  if (!res.ok) {
    // 失敗時にエラーを投げる（Nuxt のエラーページにも反映される）
    throw createError({
      statusCode: res.status,
      statusMessage: res.statusText,
    })
  }

  const data = await res.json()
  return data
})