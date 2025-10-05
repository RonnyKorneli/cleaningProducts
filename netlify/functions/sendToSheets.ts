export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbzKh16eesZcdrSZBW3eM9V9BCh_md6VRe6jnXraveDKupVTIKsseL1E8eQBZY9vgSl3kw/exec",{
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
