export default defineEventHandler(async () => {
  const res = await fetch('https://api.rep-aispr.xyz/customers', {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'f4ba2047-c8f8-4d8e-9023-5b241dae2a23',
      'X-Version': '1.0',
    }
  });

  return await res.json(); // そのままフロントに返す
});