export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbwjqQZqV6hMvg5Xls24RKZlG93v0NA17eGFqxovFIIQqq78P8cgaCbKwNLN1p710uowIg/exec",{
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
