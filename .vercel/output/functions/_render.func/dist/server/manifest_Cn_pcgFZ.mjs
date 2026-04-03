import { p as decodeKey } from './chunks/astro/server_C-5P-AUZ.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BlJb26i5.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/charbellelopes/ag-prizely/","cacheDir":"file:///Users/charbellelopes/ag-prizely/node_modules/.astro/","outDir":"file:///Users/charbellelopes/ag-prizely/dist/","srcDir":"file:///Users/charbellelopes/ag-prizely/src/","publicDir":"file:///Users/charbellelopes/ag-prizely/public/","buildClientDir":"file:///Users/charbellelopes/ag-prizely/dist/client/","buildServerDir":"file:///Users/charbellelopes/ag-prizely/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-2zp6q64z],[data-astro-cid-2zp6q64z]:before,[data-astro-cid-2zp6q64z]:after{box-sizing:border-box;margin:0;padding:0}body{font-family:system-ui,sans-serif;background:#0f172a;color:#e2e8f0;min-height:100vh}.login-wrap[data-astro-cid-2zp6q64z]{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:1rem}.login-card[data-astro-cid-2zp6q64z]{background:#1e293b;border:1px solid #334155;border-radius:16px;padding:2.5rem;width:100%;max-width:360px}.login-card[data-astro-cid-2zp6q64z] h1[data-astro-cid-2zp6q64z]{font-size:1.25rem;font-weight:700;margin-bottom:.25rem}.login-card[data-astro-cid-2zp6q64z] p[data-astro-cid-2zp6q64z]{font-size:.85rem;color:#94a3b8;margin-bottom:1.5rem}.login-card[data-astro-cid-2zp6q64z] input[data-astro-cid-2zp6q64z]{width:100%;padding:.75rem 1rem;border-radius:8px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;font-size:.95rem;margin-bottom:1rem;outline:none}.login-card[data-astro-cid-2zp6q64z] input[data-astro-cid-2zp6q64z]:focus{border-color:#6366f1}.btn-primary[data-astro-cid-2zp6q64z]{width:100%;padding:.75rem;border-radius:8px;border:none;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;font-weight:600;cursor:pointer;font-size:.95rem}.error[data-astro-cid-2zp6q64z]{color:#f87171;font-size:.8rem;margin-top:.5rem}.admin-wrap[data-astro-cid-2zp6q64z]{padding:1.5rem;max-width:1400px;margin:0 auto}.admin-header[data-astro-cid-2zp6q64z]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:gap;gap:1rem}.admin-header[data-astro-cid-2zp6q64z] h1[data-astro-cid-2zp6q64z]{font-size:1.25rem;font-weight:700}.badge[data-astro-cid-2zp6q64z]{background:#1e293b;border:1px solid #334155;border-radius:999px;padding:.25rem .75rem;font-size:.75rem;color:#94a3b8}.table-wrap[data-astro-cid-2zp6q64z]{overflow-x:auto;border-radius:12px;border:1px solid #1e293b}table[data-astro-cid-2zp6q64z]{width:100%;border-collapse:collapse;font-size:.8rem}thead[data-astro-cid-2zp6q64z]{background:#1e293b}th[data-astro-cid-2zp6q64z]{padding:.65rem .75rem;text-align:left;font-weight:600;color:#94a3b8;white-space:nowrap}td[data-astro-cid-2zp6q64z]{padding:.65rem .75rem;border-top:1px solid #1e293b;vertical-align:top}tr[data-astro-cid-2zp6q64z]:hover td[data-astro-cid-2zp6q64z]{background:#1e293b55}.source-badge[data-astro-cid-2zp6q64z]{display:inline-block;padding:.2rem .5rem;border-radius:999px;font-size:.7rem;font-weight:600;background:#4f46e520;color:#818cf8;border:1px solid #4f46e540}.source-google[data-astro-cid-2zp6q64z]{background:#16a34a20;color:#4ade80;border-color:#16a34a40}.source-meta[data-astro-cid-2zp6q64z]{background:#1d4ed820;color:#60a5fa;border-color:#1d4ed840}.empty[data-astro-cid-2zp6q64z]{text-align:center;padding:3rem;color:#475569}a[data-astro-cid-2zp6q64z].back{color:#94a3b8;font-size:.8rem;text-decoration:none}a[data-astro-cid-2zp6q64z].back:hover{color:#e2e8f0}.export-btn[data-astro-cid-2zp6q64z]{padding:.5rem 1rem;border-radius:8px;border:1px solid #334155;background:transparent;color:#94a3b8;cursor:pointer;font-size:.8rem}.export-btn[data-astro-cid-2zp6q64z]:hover{background:#1e293b;color:#e2e8f0}\n"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit.ts","pathname":"/api/submit","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DrgbqrOP.css"}],"routeData":{"route":"/obrigado","isIndex":false,"type":"page","pattern":"^\\/obrigado\\/?$","segments":[[{"content":"obrigado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/obrigado.astro","pathname":"/obrigado","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DrgbqrOP.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/charbellelopes/ag-prizely/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["/Users/charbellelopes/ag-prizely/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/charbellelopes/ag-prizely/src/pages/obrigado.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/submit@_@ts":"pages/api/submit.astro.mjs","\u0000@astro-page:src/pages/obrigado@_@astro":"pages/obrigado.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Cn_pcgFZ.mjs","/Users/charbellelopes/ag-prizely/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BOql3Ey6.mjs","/Users/charbellelopes/ag-prizely/src/pages/admin.astro?astro&type=script&index=0&lang.ts":"_astro/admin.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/Users/charbellelopes/ag-prizely/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BQGeXs4x.js","/Users/charbellelopes/ag-prizely/src/components/ui/PrivacyPolicyModal.astro?astro&type=script&index=0&lang.ts":"_astro/PrivacyPolicyModal.astro_astro_type_script_index_0_lang.D-fESXIJ.js","/Users/charbellelopes/ag-prizely/src/components/react/ContactForm":"_astro/ContactForm.ByNZMTR_.js","@astrojs/react/client.js":"_astro/client.cczbvjaZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/charbellelopes/ag-prizely/src/pages/admin.astro?astro&type=script&index=0&lang.ts",""],["/Users/charbellelopes/ag-prizely/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts","const c=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\");c?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\")});const s=t?.querySelectorAll(\"a\");s?.forEach(e=>{e.addEventListener(\"click\",()=>{t?.classList.add(\"hidden\")})});document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",function(o){o.preventDefault();const n=document.querySelector(this.getAttribute(\"href\")||\"\");if(n){const i=n.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:i,behavior:\"smooth\"})}})});"],["/Users/charbellelopes/ag-prizely/src/components/ui/PrivacyPolicyModal.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"privacy-modal\"),a=document.querySelectorAll(\"[data-privacy-modal-open]\"),t=document.getElementById(\"privacy-modal-close\"),n=document.getElementById(\"privacy-modal-backdrop\");function l(){d.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"}function o(){d.classList.add(\"hidden\"),document.body.style.overflow=\"\"}a.forEach(e=>{e.addEventListener(\"click\",c=>{c.preventDefault(),l()})});t&&t.addEventListener(\"click\",o);n&&n.addEventListener(\"click\",o);document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&!d.classList.contains(\"hidden\")&&o()});"]],"assets":["/_astro/logo-prizely.CvcAoj5Z.png","/_astro/index.DrgbqrOP.css","/favicon.png","/favicon.svg","/robots.txt","/_astro/ContactForm.ByNZMTR_.js","/_astro/client.cczbvjaZ.js","/_astro/index.Be8AcK8B.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"pt1ChphbE8oTJhxguKUP34q5bDk55xstT9k2dJhSmPE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
