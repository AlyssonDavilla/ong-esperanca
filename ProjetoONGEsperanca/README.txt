# 🌿 ONG Esperança - Plataforma Web (SPA)

Aplicação Web desenvolvida para a **ONG Esperança**, focada na apresentação de iniciativas de impacto social e na captação de voluntários comunitários. O projeto foi construído utilizando **Vanilla JavaScript (ES6+)**, **HTML5 Semântico** e **CSS3**, seguindo as diretrizes de acessibilidade **WCAG 2.1 (Nível AA)**.

---

## 🚀 Funcionalidades Principais

- **Single Page Application (SPA):** Roteamento dinâmico baseado em *hashchange* sem recarregamento de página.
- **Formulário com Máscaras:** Validação e formatação em tempo real de CPF, Telefone e CEP utilizando a biblioteca **IMask.js**.
- **Persistência Local:** Salvamento de cadastros diretamente no `localStorage` do navegador.
- **Acessibilidade Inclusiva (WCAG 2.1 AA):**
  - Navegação fluida por teclado (`Tab`, `Escape`).
  - Atributos **WAI-ARIA** (`aria-label`, `role="dialog"`, `role="status"`).
  - Alto contraste cromático e suporte ao *Dark Mode* do sistema.
- **Performance & Responsividade:** Layout flexível com Flexbox/CSS Grid e carregamento diferido de imagens (`loading="lazy"`).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e acessível.
- **CSS3:** Estilização responsiva, variáveis CSS e suporte a acessibilidade.
- **JavaScript (ES6+):** Manipulação dinâmica do DOM, consumo de APIs nativas e gerenciamento de rotas.
- **IMask.js:** Biblioteca externa para aplicação de máscaras em campos de texto.

---

## 📂 Estrutura do Projeto

```text
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── logo.png
│   │   └── voluntarios.jpg
│   └── js/
│       └── main.js
├── index.html
└── README.md