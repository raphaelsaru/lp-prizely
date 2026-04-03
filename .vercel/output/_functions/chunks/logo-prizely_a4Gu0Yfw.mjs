import { c as createComponent, a as createAstro, e as addAttribute, r as renderHead, g as renderSlot, d as renderTemplate } from './astro/server_C-5P-AUZ.mjs';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Prizely \u2014 Intelig\xEAncia Artificial para PMEs",
    description = "Implante IA nos processos da sua empresa com estrat\xE9gia e sem complica\xE7\xE3o. Diagn\xF3stico gratuito para PMEs."
  } = Astro2.props;
  return renderTemplate`<html lang="pt-BR"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><link rel="icon" type="image/png" href="/favicon.png"><title>${title}</title>${renderHead()}</head> <body class="antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/charbellelopes/ag-prizely/src/components/layout/BaseLayout.astro", void 0);

const logoPrizely = new Proxy({"src":"/_astro/logo-prizely.CvcAoj5Z.png","width":451,"height":174,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/charbellelopes/ag-prizely/src/assets/logo-prizely.png";
							}
							
							return target[name];
						}
					});

export { $$BaseLayout as $, logoPrizely as l };
