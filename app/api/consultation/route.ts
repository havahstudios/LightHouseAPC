import { saveConsultationRequest } from "@/lib/consultation";

// Receives the free consultation form and hands it to the consultation service.
export async function POST(request: Request) {
  console.log("[api/consultation] request received");

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    console.log("[api/consultation] invalid JSON");
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden "website" field: real people leave it empty, spam bots fill it in.
  if (body.website) {
    console.log("[api/consultation] spam blocked");
    return Response.json({ ok: true });
  }

  const result = await saveConsultationRequest(body);

  console.log("[api/consultation] finished", result.ok ? "ok" : `error ${result.status}`);
  if (!result.ok) return Response.json({ error: result.error }, { status: result.status });
  return Response.json({ ok: true });
}
