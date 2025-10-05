export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbybG65gfi3TS_ahByxGe67rEdc97sH_6vWZ9TxkVUDw3X_ryLih2Zhl_eBS_8Tfxci1-Q/exec",{
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
