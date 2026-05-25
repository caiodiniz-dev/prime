# Prime Company — Site React + Tailwind

Site institucional da Prime Company construído com React 18, Tailwind CSS e Framer Motion.

## Stack
- **React 18** + Vite
- **Tailwind CSS 3** (design system customizado Prime)
- **Framer Motion** — animações de scroll, parallax, hover
- **react-intersection-observer** — reveal on scroll
- **react-countup** — contadores animados
- **lucide-react** — ícones

## Como rodar

```bash
cd prime-site
npm install
npm run dev
```

Acesse: http://localhost:5173

## Como fazer build

```bash
npm run build
```

O `dist/` gerado pode ser servido em qualquer hospedagem estática (Vercel, Netlify, etc).

## Estrutura

```
src/
  components/
    Navbar.jsx       — Navegação fixa com scroll behavior
    Hero.jsx         — Hero com parallax e video frame animado
    Marquee.jsx      — Faixa de clientes animada
    About.jsx        — Sobre a agência
    Services.jsx     — Verticais Prime Football + Agência
    Portfolio.jsx    — Galeria de vídeos e fotos com filtros
    Results.jsx      — Números com CountUp animado
    Clients.jsx      — Grid de clientes parceiros
    Testimonials.jsx — Depoimentos
    Process.jsx      — Método Prime (4 etapas)
    CTA.jsx          — Call to action final
    Footer.jsx       — Rodapé
    VideoModal.jsx   — Modal de vídeo (reutilizável)
  App.jsx
  main.jsx
  index.css          — Tailwind + classes customizadas
```

## Cores (Tailwind)

| Token              | Hex       | Uso |
|--------------------|-----------|-----|
| `gold`             | #C9A84C   | Destaques, títulos, CTAs |
| `gold-light`       | #E6CC7A   | Hover states |
| `gold-dark`        | #A07830   | Sombras gold |
| `prime-black`      | #0A0A0A   | Fundo principal |
| `prime-charcoal`   | #141414   | Seções alternadas |
| `prime-charcoal2`  | #1E1E1E   | Cards |

## Fontes

- **Playfair Display** — Títulos de display
- **Montserrat** — Corpo de texto e UI
- **Cormorant Garamond** — Citações e ênfase
