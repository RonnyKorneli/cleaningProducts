export async function handler(event) {
  const data = JSON.parse(event.body);

  const response = await fetch("https://script.google.com/macros/s/AKfycbxyzYbc7gFBkwj1gTeJCZ_hQWJ9xMv0hlPcVG4XEiZ2a_IVaYsv7oA-H0ZRZC8CUhSxYw/exec",{
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
