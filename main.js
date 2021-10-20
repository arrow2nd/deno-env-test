import { listenAndServe } from "https://deno.land/std@0.112.0/http/server.ts";

console.log("Listening on http://localhost:8080");
await listenAndServe(":8080", (_req) => {
  const msg = Deno.env.get("MESSAGE");

  return new Response(`MESSEAGE = ${msg}`, {
    headers: { "content-type": "text/plain" },
  });
});
