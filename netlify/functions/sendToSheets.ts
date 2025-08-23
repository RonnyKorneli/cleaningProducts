export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbwQIPC6z00aSc7cmuPIP4u8IOSQ4JuAxJSI3NPN8F4zkF3ljO5yp--yOgt3ofcAJGndNg/exec",{
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
