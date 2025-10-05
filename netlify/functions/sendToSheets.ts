export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbypvxKKSQ1wP83OiOPAUJXKo8EDmVmZ7vx_9m69q6vuIXFod0igN1OnafGdNVp26CVUcg/exec",{
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
