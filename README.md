# 🏆 Prizely - Landing Page

Landing page profissional da agência Prizely, desenvolvida com Astro, React, Tailwind CSS e estratégias de conversão baseadas em análise competitiva.

## 🚀 Stack Tecnológica

- **Astro** - Framework web moderno e performático
- **React** - Componentes interativos
- **Tailwind CSS** - Estilização utility-first
- **TypeScript** - Type safety
- **Framer Motion** - Animações suaves
- **React Hook Form** - Gerenciamento de formulários
- **Swiper** - Carrossel de cases
- **Lucide React** - Ícones modernos

## 📂 Estrutura do Projeto

```
ag-prizely/
├── src/
│   ├── components/
│   │   ├── layout/           # Header, Footer, BaseLayout
│   │   ├── sections/         # Seções da landing page
│   │   ├── ui/              # Componentes reutilizáveis (Button, Card, Badge)
│   │   └── react/           # Componentes React interativos
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/
│       └── global.css       # Estilos globais e Tailwind
├── public/                  # Assets estáticos
├── analise-lasenda.md      # Análise estratégica base
└── README.md
```

## 🎨 Seções da Landing Page

1. **Hero** - Headline impactante + CTA principal
2. **Credibilidade** - Números e estatísticas
3. **Identificação** - "Prizely é perfeita para você que..."
4. **Método P.R.I.Z.E.** - Metodologia proprietária
5. **Serviços** - Grid de serviços com cards
6. **Autoridade** - Time e valores da empresa
7. **Cases** - Carrossel de cases de sucesso
8. **Contato/CTA Final** - Formulário de captação

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🎯 Estratégias Implementadas

### Copywriting
- Headlines focadas em dor do cliente
- Gatilhos mentais (autoridade, escassez, prova social)
- CTAs em primeira pessoa
- Copy persuasivo e orientado a resultados

### Conversão
- Campo de qualificação no formulário (investimento mensal)
- Múltiplos CTAs estrategicamente posicionados
- Formulário com validação em tempo real
- Redução de atrito com trust badges

### Design
- Paleta de cores gradiente (roxo, rosa, laranja)
- Animações CSS suaves
- Responsivo mobile-first
- Hierarquia visual clara

### SEO
- Meta tags otimizadas
- Estrutura semântica HTML5
- Performance otimizada com Astro
- robots.txt configurado

## 📝 Customização

### Cores
Edite `tailwind.config.mjs` para alterar a paleta de cores:

```js
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... }
}
```

### Conteúdo
Os textos estão nos componentes em `src/components/sections/`. Edite conforme necessário.

### Formulário
Configure a integração do formulário em `src/components/react/ContactForm.tsx`.

## 🚢 Deploy

O projeto pode ser deployado em:
- Vercel
- Netlify
- Cloudflare Pages
- Qualquer host com suporte a sites estáticos

```bash
npm run build
# Faça upload da pasta dist/ para seu host
```

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 🎨 First Contentful Paint: <1.5s
- ⏱️ Time to Interactive: <2.5s
- 📱 Mobile-optimized

## 🔗 Próximos Passos

- [ ] Adicionar Google Analytics
- [ ] Integrar formulário com CRM
- [ ] Criar blog com Astro Content Collections
- [ ] Adicionar mais cases de sucesso
- [ ] Implementar testes A/B
- [ ] Adicionar chat ao vivo

## 📄 Licença

Projeto proprietário da Prizely © 2025

---

Desenvolvido com ❤️ pela equipe Prizely
# lp-prizely
