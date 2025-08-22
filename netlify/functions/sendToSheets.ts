export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbxg2dyVqdv2LQhf768rC_99itxSpm8HUCIPlcKgqferDQQEJqaKy9RINGovwNhHquU65g/exec",{
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
