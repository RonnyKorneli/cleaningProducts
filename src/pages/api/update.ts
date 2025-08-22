import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const product1 = formData.get("product1");
  const product2 = formData.get("product2");
  const product3 = formData.get("product3");

  console.log({ product1, product2, product3 });

  // 🔹 Here you can later save to Google Sheets, DB, etc.

  return new Response(
    JSON.stringify({ success: true, product1, product2, product3 }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
