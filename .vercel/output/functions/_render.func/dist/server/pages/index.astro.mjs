import { c as createComponent, a as createAstro, f as renderComponent, d as renderTemplate, g as renderSlot, m as maybeRenderHead, b as renderScript, e as addAttribute } from '../chunks/astro/server_C-5P-AUZ.mjs';
import { l as logoPrizely, $ as $$BaseLayout } from '../chunks/logo-prizely_a4Gu0Yfw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_EI-5sDxy.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    href,
    type = "button",
    class: className = "",
    fullWidth = false
  } = Astro2.props;
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-gradient-primary text-white hover:opacity-90 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500 shadow-md hover:shadow-lg",
    outline: "border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus:ring-primary-500",
    ghost: "text-slate-700 hover:bg-slate-100 focus:ring-slate-300"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const widthClass = fullWidth ? "w-full" : "";
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;
  const Element = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Element", Element, { "href": href, "type": !href ? type : void 0, "class": classes }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/charbellelopes/ag-prizely/src/components/ui/Button.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"> <nav class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-20"> <!-- Logo --> <a href="/" class="flex items-center"> ${renderComponent($$result, "Image", $$Image, { "src": logoPrizely, "alt": "Prizely", "class": "h-10 w-auto", "loading": "eager" })} </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8"> <a href="#inicio" class="text-slate-700 hover:text-primary-700 font-medium transition-colors">
Início
</a> <a href="#servicos" class="text-slate-700 hover:text-primary-700 font-medium transition-colors">
Serviços
</a> <a href="#contato" class="text-slate-700 hover:text-primary-700 font-medium transition-colors">
Contato
</a> </div> <!-- CTA Button --> <div class="hidden md:block"> ${renderComponent($$result, "Button", $$Button, { "href": "#contato", "size": "md" }, { "default": ($$result2) => renderTemplate`
Diagnóstico gratuito
` })} </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Abrir menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Navigation --> <div id="mobile-menu" class="hidden md:hidden pb-6"> <div class="flex flex-col space-y-4"> <a href="#inicio" class="text-slate-700 hover:text-primary-700 font-medium transition-colors py-2">
Início
</a> <a href="#servicos" class="text-slate-700 hover:text-primary-700 font-medium transition-colors py-2">
Serviços
</a> <a href="#contato" class="text-slate-700 hover:text-primary-700 font-medium transition-colors py-2">
Contato
</a> ${renderComponent($$result, "Button", $$Button, { "href": "#contato", "size": "md", "fullWidth": true }, { "default": ($$result2) => renderTemplate`
Diagnóstico gratuito
` })} </div> </div> </nav> </header> ${renderScript($$result, "/Users/charbellelopes/ag-prizely/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/charbellelopes/ag-prizely/src/components/layout/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20"> <!-- Grid background --> <div class="absolute inset-0" style="background-image: linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px); background-size: 60px 60px;"></div> <!-- Glow blobs --> <div class="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-600 rounded-full opacity-10 blur-3xl -translate-x-1/2"></div> <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary-600 rounded-full opacity-10 blur-3xl translate-x-1/3"></div> <div class="container relative z-10"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <!-- Content --> <div class="text-white"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-300 text-sm font-medium mb-8 animate-slide-down"> <span class="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
Especialistas em Claude · IA para empresas reais
</div> <!-- Headline --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.1] animate-slide-up">
Sua empresa ainda perde tempo com tarefas que a
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400"> IA já resolve</span> </h1> <!-- Sub --> <p class="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed animate-slide-up" style="animation-delay: 0.1s;">
Implante inteligência artificial nos processos da sua PME — com estratégia, sem complicação.
          Do diagnóstico à implementação, você tem um especialista ao lado.
</p> <!-- Trust indicators --> <div class="flex flex-wrap gap-6 mb-10 text-slate-400 text-sm animate-slide-up" style="animation-delay: 0.2s;"> <div class="flex items-center gap-2"> <svg class="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
Diagnóstico gratuito
</div> <div class="flex items-center gap-2"> <svg class="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
Sem jargão técnico
</div> <div class="flex items-center gap-2"> <svg class="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
Resultados mensuráveis
</div> </div> <!-- CTA --> <div class="animate-scale-in" style="animation-delay: 0.3s;"> ${renderComponent($$result, "Button", $$Button, { "href": "#contato", "size": "lg", "class": "shadow-2xl shadow-primary-500/20 hover:scale-105 transition-transform" }, { "default": ($$result2) => renderTemplate`
Quero meu diagnóstico gratuito
<svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg> ` })} </div> </div> <!-- Visual: Process flow diagram --> <div class="hidden lg:flex items-center justify-center animate-fade-in" style="animation-delay: 0.2s;"> <div class="relative w-full max-w-sm"> <!-- Main card --> <div class="rounded-2xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm p-8 shadow-2xl"> <p class="text-xs font-mono text-primary-400 mb-6 tracking-widest uppercase">Processos automatizados com IA</p> <!-- Process steps --> <div class="space-y-3"> ${[
    { label: "Atendimento ao cliente", status: "Automatizado", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Relat\xF3rios internos", status: "Automatizado", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Gest\xE3o de conhecimento", status: "Em progresso", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { label: "An\xE1lise de dados", status: "Planejado", color: "text-slate-400", bg: "bg-slate-700/30" }
  ].map((item) => renderTemplate`<div class="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-slate-700/40"> <span class="text-slate-300 text-sm">${item.label}</span> <span${addAttribute(`text-xs font-medium px-2 py-1 rounded-full ${item.color} ${item.bg}`, "class")}>${item.status}</span> </div>`)} </div> <!-- Bottom stat --> <div class="mt-6 pt-6 border-t border-slate-700/40 flex items-center justify-between"> <div> <p class="text-2xl font-bold text-white">-60%</p> <p class="text-xs text-slate-500">tempo em tarefas repetitivas</p> </div> <div class="w-12 h-12 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center"> <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> </div> </div> <!-- Floating badge --> <div class="absolute -top-4 -right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-lg shadow-primary-500/30 animate-float">
✦ Claude AI
</div> </div> </div> </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"> <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> </section>`;
}, "/Users/charbellelopes/ag-prizely/src/components/sections/Hero.astro", void 0);

const $$Identification = createComponent(($$result, $$props, $$slots) => {
  const pains = [
    {
      emoji: "\u23F3",
      title: "Horas perdidas em tarefas repetitivas",
      desc: "Sua equipe gasta tempo precioso em atividades que a IA j\xE1 faz em segundos."
    },
    {
      emoji: "\u{1F4AC}",
      title: "Atendimento lento e sobrecarregado",
      desc: "Clientes esperando, equipe esgotada. A IA pode atender 24h sem perder qualidade."
    },
    {
      emoji: "\u{1F4CA}",
      title: "Relat\xF3rios e an\xE1lises feitos na m\xE3o",
      desc: "Dados espalhados, decis\xF5es lentas. A IA organiza e analisa em tempo real."
    },
    {
      emoji: "\u{1F9E0}",
      title: "Conhecimento s\xF3 na cabe\xE7a dos s\xF3cios",
      desc: "Quando algu\xE9m sai, o conhecimento vai junto. A IA cria o segundo c\xE9rebro da empresa."
    },
    {
      emoji: "\u{1F916}",
      title: "Ferramentas de IA gen\xE9ricas sem resultado",
      desc: "ChatGPT aberto no navegador n\xE3o \xE9 estrat\xE9gia. Voc\xEA precisa de implementa\xE7\xE3o real."
    },
    {
      emoji: "\u{1F525}",
      title: "Time sobrecarregado com o operacional",
      desc: "Seus melhores talentos presos no dia a dia. A IA libera para o que importa."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section bg-slate-900"> <div class="container"> <!-- Header --> <div class="max-w-2xl mx-auto text-center mb-16"> <p class="text-primary-400 text-sm font-mono tracking-widest uppercase mb-4">Por que agir agora</p> <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
Você reconhece algum desses <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">problemas?</span> </h2> <p class="text-slate-400 text-lg">
Se sim, sua empresa está deixando dinheiro na mesa. A IA já resolve isso — você só precisa de quem saiba implementar.
</p> </div> <!-- Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"> ${pains.map((pain) => renderTemplate`<div class="group p-6 rounded-xl border border-slate-700/50 bg-slate-800/40 hover:border-primary-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1"> <div class="text-3xl mb-4">${pain.emoji}</div> <h3 class="text-white font-semibold text-lg mb-2 leading-snug">${pain.title}</h3> <p class="text-slate-400 text-sm leading-relaxed">${pain.desc}</p> </div>`)} </div> <!-- CTA --> <div class="text-center"> <p class="text-slate-400 mb-5">Se identificou com 2 ou mais? Vamos conversar.</p> <a href="#contato" class="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors shadow-lg">
Quero meu diagnóstico gratuito
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg> </a> </div> </div> </section>`;
}, "/Users/charbellelopes/ag-prizely/src/components/sections/Identification.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      step: "01",
      title: "Diagn\xF3stico de IA",
      badge: "Gratuito",
      badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      description: "Mapeamos os processos da sua empresa e identificamos onde a IA gera mais impacto \u2014 sem custo e sem compromisso.",
      features: ["Reuni\xE3o de entendimento", "Mapa de oportunidades", "Relat\xF3rio personalizado"]
    },
    {
      step: "02",
      title: "Consultoria Estrat\xE9gica",
      badge: "Popular",
      badgeColor: "text-primary-400 bg-primary-400/10 border-primary-400/20",
      description: "Transformamos o diagn\xF3stico em um roadmap claro de implementa\xE7\xE3o \u2014 com prioridades, cronograma e m\xE9tricas de sucesso.",
      features: ["Roadmap personalizado", "Prioriza\xE7\xE3o por ROI", "Treinamento da equipe"]
    },
    {
      step: "03",
      title: "Implementa\xE7\xE3o",
      badge: "Premium",
      badgeColor: "text-accent-400 bg-accent-400/10 border-accent-400/20",
      description: "N\xF3s implementamos as solu\xE7\xF5es por voc\xEA: automa\xE7\xF5es, integra\xE7\xF5es, segundo c\xE9rebro da empresa, agentes de IA e muito mais.",
      features: ["Automa\xE7\xF5es e integra\xE7\xF5es", "Segundo c\xE9rebro da empresa", "Agentes de IA customizados"]
    },
    {
      step: "04",
      title: "Mentoria Cont\xEDnua",
      badge: "Recorrente",
      badgeColor: "text-secondary-400 bg-secondary-400/10 border-secondary-400/20",
      description: "Acompanhamento mensal para evoluir a IA na sua empresa conforme seu neg\xF3cio cresce e novas necessidades surgem.",
      features: ["Check-in mensal", "Atualiza\xE7\xF5es e melhorias", "Suporte priorit\xE1rio"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicos" class="section bg-white"> <div class="container"> <!-- Header --> <div class="max-w-2xl mx-auto text-center mb-16"> <p class="text-primary-600 text-sm font-mono tracking-widest uppercase mb-4">Como funciona</p> <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
Da ideia à <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">IA funcionando</span> na sua empresa
</h2> <p class="text-slate-500 text-lg">
Quatro etapas pensadas para empresas que querem resultados reais, não experimentos.
</p> </div> <!-- Services Grid --> <div class="grid md:grid-cols-2 gap-6"> ${services.map((service) => renderTemplate`<div class="group relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"> <!-- Step number --> <div class="absolute top-8 right-8 text-6xl font-heading font-bold text-slate-100 group-hover:text-primary-100 transition-colors select-none leading-none"> ${service.step} </div> <!-- Badge --> <span${addAttribute(`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border mb-5 ${service.badgeColor}`, "class")}> ${service.badge} </span> <!-- Title --> <h3 class="text-xl font-heading font-bold text-slate-900 mb-3 relative z-10">${service.title}</h3> <!-- Description --> <p class="text-slate-500 leading-relaxed mb-6 relative z-10">${service.description}</p> <!-- Features --> <ul class="space-y-2 relative z-10"> ${service.features.map((f) => renderTemplate`<li class="flex items-center gap-2 text-sm text-slate-600"> <svg class="w-4 h-4 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${f} </li>`)} </ul> </div>`)} </div> <!-- CTA --> <div class="text-center mt-12"> <p class="text-slate-500 mb-5">Comece pelo diagnóstico — é gratuito e sem compromisso.</p> <a href="#contato" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/20">
Quero começar pelo diagnóstico
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg> </a> </div> </div> </section>`;
}, "/Users/charbellelopes/ag-prizely/src/components/sections/Services.astro", void 0);

const TOTAL_STEPS = 3;
const stepFields = {
  1: ["name", "email", "whatsapp", "company"],
  2: ["sector", "employees", "pain", "usesAI"],
  3: ["budget"]
};
const inp = (err2) => `w-full px-4 py-3 rounded-lg border text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-sm ${err2 ? "border-red-400" : "border-slate-300"}`;
const sel = (err2) => `w-full px-4 py-3 rounded-lg border bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors text-sm ${err2 ? "border-red-400" : "border-slate-300"}`;
const lbl = "block text-sm font-semibold text-slate-700 mb-2";
const err = "mt-1 text-xs text-red-500";
function getTrackingParams() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];
  const result = {};
  for (const k of keys) {
    const v = p.get(k);
    if (v) result[k] = v;
  }
  try {
    const stored = sessionStorage.getItem("prizely_utm");
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...parsed, ...result };
    }
  } catch {
  }
  return result;
}
function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tracking, setTracking] = useState({});
  const { register, trigger, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
  useEffect(() => {
    const params = getTrackingParams();
    setTracking(params);
    if (Object.keys(params).length > 0) {
      try {
        sessionStorage.setItem("prizely_utm", JSON.stringify(params));
      } catch {
      }
    }
  }, []);
  const next = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => s + 1);
  };
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...tracking })
      });
    } catch {
    }
    window.location.href = "/obrigado";
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex gap-1.5 mb-6", children: Array.from({ length: TOTAL_STEPS }).map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-1 flex-1 rounded-full transition-all duration-500 ${i < step ? "bg-primary-600" : "bg-slate-200"}` }, i)) }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mb-6 font-mono", children: [
      "Etapa ",
      step,
      " de ",
      TOTAL_STEPS
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      step === 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "Nome completo *" }),
          /* @__PURE__ */ jsx("input", { ...register("name", { required: "Obrigatório" }), type: "text", placeholder: "Seu nome", className: inp(!!errors.name) }),
          errors.name && /* @__PURE__ */ jsx("p", { className: err, children: errors.name.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "E-mail *" }),
          /* @__PURE__ */ jsx("input", { ...register("email", { required: "Obrigatório", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "E-mail inválido" } }), type: "email", placeholder: "seu@email.com", className: inp(!!errors.email) }),
          errors.email && /* @__PURE__ */ jsx("p", { className: err, children: errors.email.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "WhatsApp *" }),
          /* @__PURE__ */ jsx("input", { ...register("whatsapp", { required: "Obrigatório", pattern: { value: /^[0-9]{10,11}$/, message: "DDD + número (só dígitos)" } }), type: "tel", placeholder: "11999999999", className: inp(!!errors.whatsapp) }),
          errors.whatsapp && /* @__PURE__ */ jsx("p", { className: err, children: errors.whatsapp.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "Nome da empresa *" }),
          /* @__PURE__ */ jsx("input", { ...register("company", { required: "Obrigatório" }), type: "text", placeholder: "Sua empresa", className: inp(!!errors.company) }),
          errors.company && /* @__PURE__ */ jsx("p", { className: err, children: errors.company.message })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: next, className: "w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2", children: "Próximo →" })
      ] }),
      step === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "Setor da empresa *" }),
          /* @__PURE__ */ jsxs("select", { ...register("sector", { required: "Obrigatório" }), className: sel(!!errors.sector), children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Selecione..." }),
            /* @__PURE__ */ jsx("option", { value: "varejo", children: "Varejo / E-commerce" }),
            /* @__PURE__ */ jsx("option", { value: "saude", children: "Saúde / Clínicas" }),
            /* @__PURE__ */ jsx("option", { value: "servicos", children: "Serviços profissionais" }),
            /* @__PURE__ */ jsx("option", { value: "educacao", children: "Educação" }),
            /* @__PURE__ */ jsx("option", { value: "industria", children: "Indústria / Manufatura" }),
            /* @__PURE__ */ jsx("option", { value: "alimentacao", children: "Alimentação / Restaurantes" }),
            /* @__PURE__ */ jsx("option", { value: "imobiliario", children: "Imobiliário" }),
            /* @__PURE__ */ jsx("option", { value: "outro", children: "Outro" })
          ] }),
          errors.sector && /* @__PURE__ */ jsx("p", { className: err, children: errors.sector.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "Número de funcionários *" }),
          /* @__PURE__ */ jsxs("select", { ...register("employees", { required: "Obrigatório" }), className: sel(!!errors.employees), children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Selecione..." }),
            /* @__PURE__ */ jsx("option", { value: "1-5", children: "1 a 5" }),
            /* @__PURE__ */ jsx("option", { value: "6-20", children: "6 a 20" }),
            /* @__PURE__ */ jsx("option", { value: "21-50", children: "21 a 50" }),
            /* @__PURE__ */ jsx("option", { value: "51+", children: "Mais de 50" })
          ] }),
          errors.employees && /* @__PURE__ */ jsx("p", { className: err, children: errors.employees.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "Maior dor da empresa hoje *" }),
          /* @__PURE__ */ jsxs("select", { ...register("pain", { required: "Obrigatório" }), className: sel(!!errors.pain), children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Selecione..." }),
            /* @__PURE__ */ jsx("option", { value: "processos", children: "Processos manuais e repetitivos" }),
            /* @__PURE__ */ jsx("option", { value: "atendimento", children: "Atendimento ao cliente" }),
            /* @__PURE__ */ jsx("option", { value: "produtividade", children: "Produtividade da equipe" }),
            /* @__PURE__ */ jsx("option", { value: "conhecimento", children: "Gestão do conhecimento interno" }),
            /* @__PURE__ */ jsx("option", { value: "dados", children: "Análise de dados e relatórios" }),
            /* @__PURE__ */ jsx("option", { value: "outro", children: "Outro" })
          ] }),
          errors.pain && /* @__PURE__ */ jsx("p", { className: err, children: errors.pain.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "Já usa alguma ferramenta de IA? *" }),
          /* @__PURE__ */ jsxs("select", { ...register("usesAI", { required: "Obrigatório" }), className: sel(!!errors.usesAI), children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Selecione..." }),
            /* @__PURE__ */ jsx("option", { value: "sim", children: "Sim, e está funcionando bem" }),
            /* @__PURE__ */ jsx("option", { value: "tentei", children: "Tentei, mas não obtive resultado" }),
            /* @__PURE__ */ jsx("option", { value: "nao", children: "Não, ainda não usei" })
          ] }),
          errors.usesAI && /* @__PURE__ */ jsx("p", { className: err, children: errors.usesAI.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-2", children: [
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStep(1), className: "flex-1 border border-slate-300 text-slate-600 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors", children: "← Voltar" }),
          /* @__PURE__ */ jsx("button", { type: "button", onClick: next, className: "flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity", children: "Próximo →" })
        ] })
      ] }),
      step === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: lbl, children: "Orçamento mensal para tech / consultoria *" }),
          /* @__PURE__ */ jsxs("select", { ...register("budget", { required: "Obrigatório" }), className: sel(!!errors.budget), children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Selecione..." }),
            /* @__PURE__ */ jsx("option", { value: "nao-sei", children: "Ainda não sei / preciso de ajuda para definir" }),
            /* @__PURE__ */ jsx("option", { value: "ate-2k", children: "Até R$ 2.000" }),
            /* @__PURE__ */ jsx("option", { value: "2k-5k", children: "R$ 2.000 a R$ 5.000" }),
            /* @__PURE__ */ jsx("option", { value: "acima-5k", children: "Acima de R$ 5.000" })
          ] }),
          errors.budget && /* @__PURE__ */ jsx("p", { className: err, children: errors.budget.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-primary-800", children: [
          /* @__PURE__ */ jsx("strong", { children: "O diagnóstico é 100% gratuito." }),
          " Você não precisa ter orçamento definido para começar."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-2", children: [
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setStep(2), className: "flex-1 border border-slate-300 text-slate-600 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors", children: "← Voltar" }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: isSubmitting, className: "flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-4 w-4", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
              /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
            ] }),
            "Enviando..."
          ] }) : "Quero meu diagnóstico gratuito" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-slate-400", children: "Seus dados estão seguros e não serão compartilhados." })
      ] })
    ] })
  ] });
}

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contato" class="section bg-slate-950 text-white relative overflow-hidden"> <!-- Background --> <div class="absolute inset-0" style="background-image: linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px); background-size: 60px 60px;"></div> <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600 rounded-full opacity-5 blur-3xl translate-x-1/3 -translate-y-1/4"></div> <div class="container relative z-10"> <div class="grid lg:grid-cols-2 gap-16 items-start"> <!-- Left Content --> <div class="pt-4"> <p class="text-primary-400 text-sm font-mono tracking-widest uppercase mb-4">Diagnóstico gratuito</p> <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
Descubra como a IA pode transformar
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400"> sua empresa</span> </h2> <p class="text-slate-400 text-lg mb-10 leading-relaxed">
Preencha o formulário ao lado. Nossa equipe entra em contato para entender seu negócio e apresentar as melhores oportunidades com IA.
</p> <!-- What you get --> <div class="space-y-5"> ${[
    { icon: "\u{1F3AF}", title: "Mapeamento dos processos", desc: "Identificamos onde a IA gera mais impacto na sua empresa." },
    { icon: "\u{1F4CB}", title: "Relat\xF3rio personalizado", desc: "Voc\xEA recebe um plano de a\xE7\xE3o concreto, sem jarg\xE3o t\xE9cnico." },
    { icon: "\u{1F4AC}", title: "Conversa sem compromisso", desc: "Nenhuma press\xE3o de venda. S\xF3 informa\xE7\xE3o de valor." }
  ].map((item) => renderTemplate`<div class="flex items-start gap-4"> <div class="text-2xl flex-shrink-0 mt-0.5">${item.icon}</div> <div> <h3 class="font-semibold text-white">${item.title}</h3> <p class="text-slate-400 text-sm mt-0.5">${item.desc}</p> </div> </div>`)} </div> <!-- Trust badges --> <div class="flex flex-wrap gap-3 mt-10"> ${["\u{1F512} Dados protegidos", "\u26A1 Resposta em at\xE9 24h", "\u2705 Sem compromisso"].map((badge) => renderTemplate`<div class="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-xs"> ${badge} </div>`)} </div> </div> <!-- Right Form --> <div class="bg-white rounded-2xl p-8 shadow-2xl shadow-primary-500/10"> <div class="mb-6"> <h3 class="text-xl font-heading font-bold text-slate-900 mb-1">
Solicite seu diagnóstico gratuito
</h3> <p class="text-slate-500 text-sm">
Leva menos de 3 minutos. Nossa equipe analisa e retorna em até 24h.
</p> </div> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/charbellelopes/ag-prizely/src/components/react/ContactForm", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "/Users/charbellelopes/ag-prizely/src/components/sections/ContactCTA.astro", void 0);

const $$PrivacyPolicyModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="privacy-modal" class="hidden fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"> <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> <!-- Background overlay --> <div class="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity" id="privacy-modal-backdrop"></div> <!-- Center modal --> <div class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</div> <!-- Modal panel --> <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"> <!-- Header --> <div class="bg-gradient-primary px-6 py-4 flex justify-between items-center"> <h3 class="text-2xl font-heading font-bold text-white" id="modal-title">
Política de Privacidade
</h3> <button type="button" id="privacy-modal-close" class="text-white hover:text-slate-200 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Content --> <div class="bg-white px-6 py-8 max-h-[70vh] overflow-y-auto"> <div class="prose prose-slate max-w-none"> <h4 class="text-xl font-heading font-bold text-slate-900 mb-4">Política de Privacidade e Cookies</h4> <p class="text-slate-700 mb-6">
Esta POLÍTICA DE PRIVACIDADE E COOKIES tem como objetivo dar transparência às operações de tratamento de dados feitas pela PRIZELY e se aplica a todo tratamento de dados pessoais coletados pela empresa por meio do site, aplicativos, mídias sociais ou APIs. Ao usar nossos serviços, o titular de dados concorda com nossa política de privacidade e cookies.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">Índice</h4> <ul class="list-disc list-inside text-slate-700 space-y-2 mb-8"> <li>Por que a Prizely coleta dados pessoais?</li> <li>Quais dados pessoais são coletados pela Prizely?</li> <li>Qual a finalidade do tratamento de dados realizado pela Prizely?</li> <li>Qual a base legal para o tratamento de dados realizado pela Prizely?</li> <li>Por quanto tempo a Prizely armazena os dados pessoais?</li> <li>Com quem a Prizely compartilha dados pessoais?</li> <li>Para onde a Prizely transfere os dados?</li> <li>Quais são os direitos do titular de dados perante a Prizely?</li> </ul> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">COOKIES</h4> <ul class="list-disc list-inside text-slate-700 space-y-2 mb-8"> <li>Para que servem?</li> <li>Quais informações são coletadas?</li> <li>Que tipo de cookies utilizamos?</li> <li>Como rejeitar os cookies?</li> </ul> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">POR QUE A PRIZELY COLETA DADOS PESSOAIS?</h4> <p class="text-slate-700 mb-6">
Coletamos dados pessoais para viabilizar nossa atividade comercial e para propiciar aos nossos clientes a melhor experiência possível dentro de nossas plataformas. Temos o compromisso de usar os dados coletados somente em conformidade com esta Política de Privacidade e de acordo com as finalidades previamente informadas.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">QUAL A FINALIDADE DO TRATAMENTO DE DADOS REALIZADO PELA PRIZELY?</h4> <p class="text-slate-700 mb-4">
A Prizely pode tratar os seus dados pessoais para as seguintes finalidades, inerentes aos negócios realizados pela empresa:
</p> <ul class="list-disc list-inside text-slate-700 space-y-2 mb-6"> <li>Fornecer, oferecer e desenvolver os serviços da Prizely, pagos ou gratuitos, inclusive executando contratos de serviço, processando pagamentos, gerenciando a compra e venda de produtos, realizando a entrega de produtos e enviando materiais relacionados aos serviços;</li> <li>Garantir maior segurança ao usuário, mediante sua identificação e autenticação;</li> <li>Gerenciar a conta e as preferências do usuário;</li> <li>Cumprir com obrigações legais e regulatórias;</li> <li>Cumprir com obrigações financeiras e fiscais;</li> <li>Prevenir fraudes e promover análise de crédito;</li> <li>Exercer direito de defesa;</li> <li>Comunicação e relacionamento com o titular: por exemplo, respondendo a dúvidas, solicitando feedbacks, atendendo a solicitações e reclamações, enviando informações administrativas, novos serviços, recursos ou alterações contratuais;</li> <li>Personalizar a navegação do usuário de acordo com as suas preferências pessoais;</li> <li>Para traçar perfis comerciais (profiling), inclusive para otimizar e personalizar a oferta dos seus produtos aos seus clientes e potenciais clientes;</li> <li>Para atividades de marketing, divulgação de sua marca e oferta de produtos em geral;</li> <li>Promover outras atividades de seu escopo social;</li> <li>Para recrutamento de profissionais;</li> <li>Para outros fins específicos, caso subordinados a consentimento;</li> </ul> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">QUAIS DADOS A PRIZELY TRATA?</h4> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Dados cadastrais:</h5> <p class="text-slate-700 mb-4">
Quando o titular se cadastra no site, ou, em outros canais de acesso e comunicação com a Prizely, solicitamos e coletamos as seguintes informações: nome, CPF, RG, telefone residencial e comercial, endereço, data de nascimento e e-mail.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Dados cadastrais em newsletter:</h5> <p class="text-slate-700 mb-4">
Quando o titular assina uma lista de comunicação, nós coletamos o seu e-mail.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Dados das redes sociais:</h5> <p class="text-slate-700 mb-4">
Quando o titular entra em contato com a empresa por meio de suas redes sociais, podemos coletar as informações previamente públicas do seu perfil social, e em conformidade com as políticas e consentimentos existentes na respectiva plataforma, tais como: nome do usuário, contatos, foto do perfil, e-mail de acesso, localização, localização física e características dos dispositivos de acesso do usuário, sexo ou gênero, entre outras que o usuário forneceu à plataforma de rede social e consentiu com a sua publicidade ou compartilhamento.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Dados de navegação:</h5> <p class="text-slate-700 mb-4">
Quando o titular navega em nosso site, coletamos dados que identificam: o endereço de IP, data e hora, geolocalização, características do dispositivo de acesso, navegador e versão, login e informação da conta (nome do utilizador, senha, preferências de marketing e cookies), páginas acessadas, páginas buscadas, tempo gasto nas páginas, informação sobre pagamento e informações sobre o cliente através de parceiros ou afiliados.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Dados de pagamento:</h5> <p class="text-slate-700 mb-4">
Nome, número do cartão de crédito e dados de autenticação são coletados por meio de nossos parceiros para processamento de pagamento e análise de crédito, portanto, não ficam armazenados em nossa base de dados. Em caso de dúvida verifique a política de privacidade da empresa de pagamento.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Outros:</h5> <p class="text-slate-700 mb-6">
Coletados com consentimento ou avisos expressos.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">QUAL A BASE LEGAL PARA O TRATAMENTO DE DADOS REALIZADO PELA PRIZELY?</h4> <p class="text-slate-700 mb-6">
As bases legais para o tratamento dos dados dos usuários são: o legítimo interesse, a execução contratual e o consentimento, previstos no art. 7, I, V e IX da LGPD (Lei 13.709/18).
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">POR QUANTO TEMPO A PRIZELY ARMAZENA ESSES DADOS?</h4> <p class="text-slate-700 mb-4">
A Prizely armazena os dados de seus clientes pelo tempo em que o titular manter a relação comercial com a empresa, ou pelo tempo razoavelmente necessário à realização da finalidade para a qual foram coletados e informados nesta política (inclusive para fins de provas pertinentes às relações jurídicas ocorridas no contexto do site e dos seus serviços).
</p> <p class="text-slate-700 mb-6">
Caso o titular solicite a exclusão dos seus dados, a Prizely pode se recusar à exclusão se necessário ao cumprimento de obrigações legais e defesa jurídica dos seus interesses.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">COM QUEM A PRIZELY COMPARTILHA DADOS PESSOAIS?</h4> <p class="text-slate-700 mb-4">
A Prizely não compartilha dados pessoais de seus clientes com terceiros, exceto em casos em que se revele necessário à prestação de serviços ofertada ou obrigações contratuais e legais às quais esteja sujeita. Quando para finalidades econômicas diversas das inicialmente informadas nesta política a empresa só realizará o compartilhamento mediante consentimento expresso, destacado e específico.
</p> <p class="text-slate-700 mb-4">
Para fornecer os Serviços a você, podemos precisar usar alguns provedores de serviços. Essas empresas processam seus dados na medida necessária para prestar os serviços. Para garantir um elevado nível de proteção de dados pessoais, a Prizely realiza a análise das políticas de dados e a implementação das medidas de segurança necessárias para garantir a proteção de dados adequada.
</p> <p class="text-slate-700 mb-6">
Para atingir os objetivos comerciais da sociedade empresarial, a Prizely pode compartilhar os dados pessoais de seus usuários com empresas parceiras, prestadores de serviços, empresas de marketing, instituições financeiras, entidades que detectam fraude, empresas de proteção ao crédito, à justiça mediante ordem judicial, fornecedores de serviços tecnológicos, parceiros publicitários, empresas de cloud computing, parceiros de logística, entrega e transporte, entre outros.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">Transferência internacional</h4> <p class="text-slate-700 mb-4">
Para possibilitar a prestação de serviços da empresa, pode ser necessário transferir os dados para empresas em outros países, que não detém nível de proteção igual ao fornecido pelo regulamento brasileiro. Para garantir um nível adequado de proteção, a Prizely realiza o mapeamento de risco da transferência internacional e compartilha os dados com países em que existam garantias legais mínimas de proteção e baixo risco de violação de dados. Portanto, a transferência fica condicionada à verificação da base legal estrangeira, existência de selos, certificações, cláusulas contratuais padrões e aos padrões de segurança informados nas políticas de privacidade e termos contratuais.
</p> <p class="text-slate-700 mb-6">
Ressalvado o compromisso da empresa em realizar a transmissão apenas dentro dos limites e finalidades permitidos pela lei brasileira e já mencionados nesta política.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">QUAIS SÃO OS DIREITOS DO TITULAR DE DADOS PERANTE A PRIZELY?</h4> <p class="text-slate-700 mb-4">
Em atenção à regulamentação aplicável, a Prizely respeita os direitos do titular de dados pessoais e informa que, a qualquer momento, o titular pode solicitar, observando os canais e meios disponibilizados pela Prizely:
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Informações sobre tratamento e acesso aos dados</h5> <p class="text-slate-700 mb-4">
O titular pode requerer a confirmação do tratamento de seus dados pela Prizely, bem como solicitar acesso a eles.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Cópia integral ou simplificada dos dados</h5> <p class="text-slate-700 mb-4">
O titular pode requerer cópia impressa ou digital de seus dados, sendo que os custos de disponibilização das cópias estão cobertos pela Prizely, respeitados limites de viabilidade e razoabilidade.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Correção dos dados</h5> <p class="text-slate-700 mb-4">
Considerando que o usuário é o responsável pela veracidade das informações cadastradas, o titular deve solicitar a alteração dos dados que estiverem incorretos, incompletos, inexatos ou desatualizados. Informações cadastrais falsas são de responsabilidade do titular e podem afetar e até interromper a prestação de serviços ao titular. A Prizely se compromete a alterar os dados inexatos de acordo com o pedido do titular.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Eliminação e bloqueio de dados</h5> <p class="text-slate-700 mb-4">
O titular pode pedir a exclusão de dados comprovadamente desnecessários ou excessivos armazenados no banco de dados do controlador.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Portabilidade dos dados</h5> <p class="text-slate-700 mb-4">
O titular pode solicitar a transmissão dos dados para outros fornecedores de serviços e produtos, desde, observados os segredos comerciais e industriais, por meio dos padrões técnicos adotados pela Prizely, respeitados os limites de viabilidade e razoabilidade.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Revogação do consentimento</h5> <p class="text-slate-700 mb-6">
O titular pode revogar o consentimento ou pedir a destruição daqueles dados que são desnecessários ou excessivos para o cumprimento do contrato ou da finalidade informada, ressalvadas os permissivos legais de legítima recusa pela Prizely. Assim, não existindo nenhuma outra base legítima, a Prizely pode excluir as informações de sua base de dados, a pedido do titular. Consequentemente, alguns dos serviços, para os quais os dados seriam pertinentes, podem ser limitados ou encerrados.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">PARA QUE SERVEM OS COOKIES?</h4> <p class="text-slate-700 mb-6">
O objetivo da utilização de COOKIES é personalizar a navegação do usuário de acordo com as preferências pessoais e por meio da análise dos hábitos do usuário na plataforma. Os cookies determinam as preferências, interesses, a utilidade e número de utilizações dos sites, permitindo uma navegação mais rápida e eficiente para o usuário.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">QUAIS INFORMAÇÕES SÃO COLETADAS?</h4> <p class="text-slate-700 mb-6">
As informações coletadas (dispositivo utilizados, local, horário) são genéricas, e, em regra, não podem identificar o usuário. Aquelas informações que, eventualmente, possam identificar o usuário, como quando o usuário já é cadastrado, seguem as mesmas disposições desta Política de Privacidade.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">QUE TIPO DE COOKIES UTILIZAMOS?</h4> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Cookies essenciais</h5> <p class="text-slate-700 mb-4">
São aqueles sem os quais o usuário não pode se beneficiar de recursos essenciais do site da Prizely, como por exemplo, a realização de compras ou obtenção de informações no site.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Cookies analíticos</h5> <p class="text-slate-700 mb-4">
São aqueles usados para analisar a forma que os usuários interagem com o site, permitindo a identificação de possíveis melhorias de navegação e experiência do usuário, por exemplo. Esses cookies não identificam os usuários, mas coletam informações anonimizadas que servem apenas para análises estatísticas.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Cookies de funcionalidade</h5> <p class="text-slate-700 mb-4">
São aqueles que servem para gravar preferências do usuário e algumas decisões que ele já tomou no site, evitando que a cada nova visita o usuário tenha que tomar as mesmas ações novamente.
</p> <h5 class="text-lg font-heading font-semibold text-slate-900 mt-6 mb-3">Cookies de publicidade</h5> <p class="text-slate-700 mb-4">
São aqueles utilizados para direcionar a publicidade de acordo com os interesses do usuário e medir a eficiência dessa publicidade.
</p> <h4 class="text-xl font-heading font-bold text-slate-900 mt-8 mb-4">COMO REJEITAR OS COOKIES?</h4> <p class="text-slate-700 mb-6">
O usuário pode rejeitar os cookies usando as configurações do navegador a qualquer momento (janela anônima), mas a recusa pode prejudicar a experiência de navegação.
</p> <p class="text-slate-700 text-sm mt-8 pt-6 border-t border-slate-200">
Para mais informações, entre em contato conosco através do formulário de contato disponível no site.
</p> </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/charbellelopes/ag-prizely/src/components/ui/PrivacyPolicyModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/charbellelopes/ag-prizely/src/components/ui/PrivacyPolicyModal.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-900 text-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="flex flex-col md:flex-row justify-between items-center gap-4"> <div class="flex items-center mb-4 md:mb-0"> ${renderComponent($$result, "Image", $$Image, { "src": logoPrizely, "alt": "Prizely", "class": "h-8 w-auto brightness-0 invert" })} </div> <div class="flex flex-col md:flex-row items-center gap-4"> <a href="#" data-privacy-modal-open class="text-slate-400 hover:text-white transition-colors text-sm underline">
Política de Privacidade
</a> <p class="text-slate-400 text-sm">
Prizely - Todos os direitos reservados.
</p> </div> <button onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" class="mt-4 md:mt-0 text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-1"> <span>Voltar ao topo</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path> </svg> </button> </div> </div> ${renderComponent($$result, "PrivacyPolicyModal", $$PrivacyPolicyModal, {})} </footer>`;
}, "/Users/charbellelopes/ag-prizely/src/components/sections/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Identification", $$Identification, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/charbellelopes/ag-prizely/src/pages/index.astro", void 0);

const $$file = "/Users/charbellelopes/ag-prizely/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
