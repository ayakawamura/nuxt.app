
export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const res = await fetch(`${config.apiBase}/customers`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': config.apiKey,
      'X-Version': '1.0',
      // 'X-API-Key': '',
      // 'X-Version': '1.0',
    }
  });

  if (!res.ok) {
    const text = await res.text()
    console.error('Laravel API Error:', res.status, text)
    throw createError({
      statusCode: res.status,
      statusMessage: 'Laravel API error',
    })
  }

  return await res.json(); // そのままフロントに返す
});