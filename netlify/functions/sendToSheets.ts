export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbxVhrw4qUAlGFHnySpSbN36XaFiXYKBar9Uk1pWAd1gwuDWvjxUVdXH-yC6qgLlVmL1UA/exec",{
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
