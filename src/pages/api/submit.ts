import type { APIRoute } from 'astro';
import { neon } from '@neondatabase/serverless';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const {
      name, email, whatsapp, company,
      sector, employees, pain, usesAI,
      budget,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      gclid, fbclid,
    } = body;

    if (!name || !email || !whatsapp || !company) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios ausentes' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const sql = neon(import.meta.env.DATABASE_URL);

    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        whatsapp TEXT NOT NULL,
        company TEXT NOT NULL,
        sector TEXT,
        employees TEXT,
        pain TEXT,
        uses_ai TEXT,
        budget TEXT,
        utm_source TEXT,
        utm_medium TEXT,
        utm_campaign TEXT,
        utm_content TEXT,
        utm_term TEXT,
        gclid TEXT,
        fbclid TEXT
      )
    `;

    await sql`
      INSERT INTO leads (
        name, email, whatsapp, company,
        sector, employees, pain, uses_ai,
        budget,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        gclid, fbclid
      ) VALUES (
        ${name}, ${email}, ${whatsapp}, ${company},
        ${sector ?? null}, ${employees ?? null}, ${pain ?? null}, ${usesAI ?? null},
        ${budget ?? null},
        ${utm_source ?? null}, ${utm_medium ?? null}, ${utm_campaign ?? null},
        ${utm_content ?? null}, ${utm_term ?? null},
        ${gclid ?? null}, ${fbclid ?? null}
      )
    `;

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[submit] error:', err);
    return new Response(JSON.stringify({ error: 'Erro interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
