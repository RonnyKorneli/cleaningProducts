export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbwUVNO_yBYmOhtQsCA5RSm5KQwPkmhMdlQItP2tK5VCF1sUyk_098NL9Pd8G258epzzyQ/exec",{
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
