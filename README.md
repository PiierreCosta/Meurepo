# 🚀 Portfólio Pierre Costa — Arquitetura Modular

Estrutura limpa, moderna, modular e de fácil manutenção para o seu portfólio profissional.

---

## 📁 Estrutura de Pastas e Arquivos

```text
Portfolio/
├── index.html            # Estrutura HTML principal, semântica e acessível
├── README.md             # Guia de organização e customização
├── css/                  # Módulos de estilo (CSS puro sem frameworks pesados)
│   ├── style.css         # Arquivo mestre que importa todos os estilos
│   ├── variables.css     # Paleta de cores, fontes, sombras e espaçamentos
│   ├── base.css          # Reset, botões globais, tipografia e tags
│   ├── header.css        # Barra de navegação, logo e menu
│   ├── hero.css          # Seção inicial (apresentação e chamada de ação)
│   ├── about.css         # Seção "Sobre mim" e card de trajetória
│   ├── skills.css        # Seção "Habilidades" e cards de competências
│   ├── projects.css      # Seção "Projetos" com cards e tags de tecnologia
│   ├── experience.css    # Seção "Experiência" e linha do tempo de formação
│   ├── contact.css       # Seção "Contato" e card escuro moderno
│   ├── footer.css        # Rodapé e botão de voltar ao topo
│   └── responsive.css    # Regras de adaptação para celular e tablet
├── js/                   # Comportamentos e interatividades
│   ├── main.js           # Menu mobile, scrollspy ativo, cópia de e-mail e voltar ao topo
│   └── animations.js     # Efeito de revelação ao rolar a página (Scroll Reveal)
└── assets/               # Imagens, currículo (PDF), ícones e mídias
    ├── icons/
    └── images/
```

---

## 🎯 Guia Rápido: O que alterar e onde mexer

| O que você quer alterar? | Arquivo correspondente |
| :--- | :--- |
| **Cor azul / Cores do tema** | `css/variables.css` (Altere `--primary`) |
| **Menu e barra de navegação** | `css/header.css` e `index.html` (`<header>`) |
| **Texto e visual da tela inicial** | `css/hero.css` e `index.html` (`<section class="hero">`) |
| **Biografia e trajetória** | `css/about.css` e `index.html` (`<section id="sobre">`) |
| **Cards e tags de habilidades** | `css/skills.css` e `index.html` (`<section id="habilidades">`) |
| **Projetos, links e badges** | `css/projects.css` e `index.html` (`<section id="projetos">`) |
| **Experiência profissional e cursos** | `css/experience.css` e `index.html` (`<section id="experiencia">`) |
| **Bloco de contato e redes sociais**| `css/contact.css` e `index.html` (`<section id="contato">`) |
| **Ajustes para celular e tablet** | `css/responsive.css` |
| **Animações de entrada e efeitos** | `js/animations.js` |
| **Menu mobile e ação de copiar email** | `js/main.js` |

---

## ✨ Recursos Inclusos

1. **Scrollspy Inteligente**: O menu destaca automaticamente o link da seção em que o usuário está navegando.
2. **Copiar E-mail com 1 Clique**: O botão de e-mail copia o endereço diretamente para a área de transferência com notificação Toast visual agradável.
3. **Menu Mobile Totalmente Funcional**: Botão hambúrguer com transição suave para telas pequenas.
4. **Scroll Reveal Nativo**: Animações fluidas de entrada ao rolar a página sem bibliotecas externas pesadas.
5. **Design Tokens Centralizados**: Troque a identidade visual do site alterando apenas o arquivo `variables.css`.

---

## 🌐 Como Visualizar no Navegador

Basta dar dois cliques no arquivo `index.html` ou utilizar uma extensão como o **Live Server** no VS Code / Antigravity IDE.
