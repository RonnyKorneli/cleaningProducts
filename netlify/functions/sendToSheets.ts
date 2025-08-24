export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbxDcZeKfT0xGWERduxU0UBatp4mflZTndhQyDL_rYT_38xNade92sdrNoYVyHFBhTTvYw/exec",{
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
