import { c as createComponent, a as createAstro, r as renderHead, b as renderScript, d as renderTemplate, e as addAttribute } from '../chunks/astro/server_C-5P-AUZ.mjs';
import 'clsx';
import { neon } from '@neondatabase/serverless';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const ADMIN_PASSWORD = "prizely2025";
  let leads = [];
  let authError = false;
  let isAuthenticated = false;
  const method = Astro2.request.method;
  if (method === "POST") {
    const form = await Astro2.request.formData();
    const senha = form.get("senha")?.toString() ?? "";
    if (senha === ADMIN_PASSWORD) {
      isAuthenticated = true;
    } else {
      authError = true;
    }
  }
  if (isAuthenticated) {
    try {
      const sql = neon(undefined                            );
      leads = await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT 500`;
    } catch (e) {
      leads = [];
    }
  }
  const formatDate = (d) => new Date(d).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit" });
  const painLabel = {
    processos: "Processos manuais",
    atendimento: "Atendimento",
    produtividade: "Produtividade",
    conhecimento: "Gestão conhecimento",
    dados: "Análise de dados",
    outro: "Outro"
  };
  const budgetLabel = {
    "nao-sei": "Ainda não sabe",
    "ate-2k": "Até R$ 2k",
    "2k-5k": "R$ 2k–5k",
    "acima-5k": "Acima R$ 5k"
  };
  return renderTemplate`<html lang="pt-BR" data-astro-cid-2zp6q64z> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Leads — Prizely Admin</title><meta name="robots" content="noindex,nofollow">${renderHead()}</head> <body data-astro-cid-2zp6q64z> ${!isAuthenticated ? renderTemplate`<div class="login-wrap" data-astro-cid-2zp6q64z> <div class="login-card" data-astro-cid-2zp6q64z> <h1 data-astro-cid-2zp6q64z>Prizely Admin</h1> <p data-astro-cid-2zp6q64z>Acesso restrito — leads do formulário</p> <form method="POST" data-astro-cid-2zp6q64z> <input type="password" name="senha" placeholder="Senha" autofocus required data-astro-cid-2zp6q64z> ${authError && renderTemplate`<p class="error" data-astro-cid-2zp6q64z>Senha incorreta.</p>`} <button type="submit" class="btn-primary" data-astro-cid-2zp6q64z>Entrar</button> </form> </div> </div>` : renderTemplate`<div class="admin-wrap" data-astro-cid-2zp6q64z> <div class="admin-header" data-astro-cid-2zp6q64z> <div data-astro-cid-2zp6q64z> <h1 data-astro-cid-2zp6q64z>Leads</h1> <span class="badge" data-astro-cid-2zp6q64z>${leads.length} registros</span> </div> <div style="display:flex;gap:0.75rem;align-items:center;" data-astro-cid-2zp6q64z> <button class="export-btn" onclick="exportCSV()" data-astro-cid-2zp6q64z>⬇ Exportar CSV</button> <a href="/" class="back" data-astro-cid-2zp6q64z>← Voltar ao site</a> </div> </div> ${leads.length === 0 ? renderTemplate`<div class="empty" data-astro-cid-2zp6q64z>Nenhuma lead ainda. Os dados aparecem aqui após o primeiro envio de formulário.</div>` : renderTemplate`<div class="table-wrap" data-astro-cid-2zp6q64z> <table id="leads-table" data-astro-cid-2zp6q64z> <thead data-astro-cid-2zp6q64z> <tr data-astro-cid-2zp6q64z> <th data-astro-cid-2zp6q64z>Data</th> <th data-astro-cid-2zp6q64z>Nome</th> <th data-astro-cid-2zp6q64z>WhatsApp</th> <th data-astro-cid-2zp6q64z>E-mail</th> <th data-astro-cid-2zp6q64z>Empresa</th> <th data-astro-cid-2zp6q64z>Setor</th> <th data-astro-cid-2zp6q64z>Funcionários</th> <th data-astro-cid-2zp6q64z>Dor principal</th> <th data-astro-cid-2zp6q64z>Usa IA?</th> <th data-astro-cid-2zp6q64z>Orçamento</th> <th data-astro-cid-2zp6q64z>Origem</th> <th data-astro-cid-2zp6q64z>Campanha</th> </tr> </thead> <tbody data-astro-cid-2zp6q64z> ${leads.map((lead) => {
    const source = lead.utm_source || (lead.gclid ? "google" : lead.fbclid ? "meta" : "—");
    const sourceClass = source === "google" ? "source-badge source-google" : source === "meta" || source === "facebook" ? "source-badge source-meta" : "source-badge";
    return renderTemplate`<tr data-astro-cid-2zp6q64z> <td style="white-space:nowrap;color:#94a3b8;" data-astro-cid-2zp6q64z>${formatDate(lead.created_at)}</td> <td style="font-weight:600;" data-astro-cid-2zp6q64z>${lead.name}</td> <td data-astro-cid-2zp6q64z> <a${addAttribute(`https://wa.me/55${lead.whatsapp}`, "href")} target="_blank" style="color:#4ade80;text-decoration:none;" data-astro-cid-2zp6q64z> ${lead.whatsapp} </a> </td> <td style="color:#94a3b8;" data-astro-cid-2zp6q64z>${lead.email}</td> <td data-astro-cid-2zp6q64z>${lead.company}</td> <td style="color:#94a3b8;" data-astro-cid-2zp6q64z>${lead.sector ?? "—"}</td> <td style="color:#94a3b8;" data-astro-cid-2zp6q64z>${lead.employees ?? "—"}</td> <td data-astro-cid-2zp6q64z>${painLabel[lead.pain] ?? lead.pain ?? "—"}</td> <td style="color:#94a3b8;" data-astro-cid-2zp6q64z>${lead.uses_ai ?? "—"}</td> <td data-astro-cid-2zp6q64z>${budgetLabel[lead.budget] ?? lead.budget ?? "—"}</td> <td data-astro-cid-2zp6q64z><span${addAttribute(sourceClass, "class")} data-astro-cid-2zp6q64z>${source}</span></td> <td style="color:#94a3b8;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"${addAttribute(lead.utm_campaign ?? "", "title")} data-astro-cid-2zp6q64z>${lead.utm_campaign ?? "—"}</td> </tr>`;
  })} </tbody> </table> </div>`} </div>`} ${renderScript($$result, "/Users/charbellelopes/ag-prizely/src/pages/admin.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/charbellelopes/ag-prizely/src/pages/admin.astro", void 0);
const $$file = "/Users/charbellelopes/ag-prizely/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
