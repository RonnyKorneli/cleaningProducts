export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbz262z0kxv0JUeY2fwD2TRxTDG3ahYzh5ZCV5EU3rOdwDxK3MGUyXGJqcqFxdJA2DjIsg/exec",{
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
