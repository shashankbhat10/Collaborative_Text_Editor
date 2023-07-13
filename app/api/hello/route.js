export async function GET(req) {
  const res = { name: "Hello World!" };
  return new Response(JSON.stringify(res));
}
