export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbyEfGbXNXsiADdd_b6RgDlpsokThNm9W6zCQH7UeIFTLe_v-YNuJU8gHnl8-AmKiw3pXA/exec",{
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.text();

  return {
    statusCode: 200,
    body: result,
  };
}
