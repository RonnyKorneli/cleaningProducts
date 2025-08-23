export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbz2cTJfFVoyC2ruvcRYeeAEidM_Uo-DeYWe5Yoxg2_pkYSjM9MiTUAUg0bfb7Lv4OUa7A/exec",{
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
