src/domain/
├── about/
│   ├── components/
│   │   └── AboutInfo.astro
│   └── index.ts          # JS/TS con lógica específica de "about"
├── blog/
│   ├── components/
│   │   ├── BlogPostCard.astro
│   │   └── BlogPostList.astro
│   └── index.ts          # Lógica y funciones para el blog
├── home/
│   ├── components/
│   │   ├── HomeHero.astro
│   │   ├── HomePostList.astro
│   │   └── HomeResources.astro
│   └── index.ts
├── links/
│   ├── components/
│   │   ├── LinksFeatures.astro
│   │   ├── LinksFooter.astro
│   │   ├── LinksHero.astro
│   │   ├── SliderPosts.astro
│   │   └── SliderResources.astro
│   └── index.ts
└── # a futuro: resources/ o courses/ si necesitas lógica particular

src/
└── shared/
    └── components/
        ├── ui/
        ├── forms/
        ├── navigation/
        ├── cards/
        ├── logos/
        ├── layout/
        ├── media/
        └── index.ts (opcional)

	•	ui/: Elementos de interfaz muy genéricos (botones, inputs, spinners, alertas, badges).
	•	forms/: Para formularios más complejos o secciones específicas de capturas de datos (ej. LoginForm.astro, EmailCaptureForm.astro).
	•	navigation/: Todo lo referente a menús, navbars, hamburgers, etc.
	•	cards/: Diferentes tipos de tarjetas (ej. “ProductCard.astro”, “ProfileCard.astro”).
	•	logos/: Si manejas distintos logos (ej. “LogoOrbitBrackets.astro”, “PartnerLogo.astro”).
	•	layout/: Aquí algunos devs ponen componentes “layout” pequeños (aunque a veces la carpeta layouts/ vive a la par de components/).
	•	media/: Componentes para manejar imágenes responsivas, videos, sliders, etc.
	•	index.ts (opcional): A veces se usa para re-exportar componentes y facilitar la importación desde un solo lugar.





## Completo

    my-astro-project/
├── content/
│   ├── blog/
│   │   ├── post-1.md
│   │   └── ...
│   └── resources/
│       ├── plantilla-portfolio.md
│       └── ...
├── src/
│   ├── domain/
│   │   ├── about/
│   │   │   ├── components/
│   │   │   │   └── AboutInfo.astro
│   │   │   └── index.ts
│   │   ├── blog/
│   │   │   ├── components/
│   │   │   │   ├── BlogPostCard.astro
│   │   │   │   └── BlogPostList.astro
│   │   │   └── index.ts
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── HomeHero.astro
│   │   │   │   ├── HomePostList.astro
│   │   │   │   └── HomeResources.astro
│   │   │   └── index.ts
│   │   ├── links/
│   │   │   ├── components/
│   │   │   │   ├── LinksFeatures.astro
│   │   │   │   ├── LinksFooter.astro
│   │   │   │   ├── LinksHero.astro
│   │   │   │   ├── SliderPosts.astro
│   │   │   │   └── SliderResources.astro
│   │   │   └── index.ts
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── index.astro           # Home page
│   │   ├── about.astro           # /about
│   │   ├── links.astro           # /links
│   │   ├── blog/                 # /blog
│   │   │   ├── [...page].astro
│   │   │   ├── [...slug].astro
│   │   │   └── tag/
│   │   │       └── [...tag].astro
│   │   └── resources/            # /resources
│   │       ├── [...page].astro
│   │       ├── [...slug].astro
│   │       └── tag/
│   │           └── [...tag].astro
│   ├── shared/
│   │   ├── components/
│   │   │   ├── Headers/
│   │   │   │   ├── HeaderOne.astro
│   │   │   │   └── HeaderTwo.astro
│   │   │   ├── Logo/
│   │   │   │   └── LogoOrbitBrackets.astro
│   │   │   ├── Navbar/
│   │   │   │   ├── components/
│   │   │   │   │   ├── Logo.astro
│   │   │   │   │   ├── MainMenu.astro
│   │   │   │   │   ├── MobileToggle.astro
│   │   │   │   │   └── YoutubeButton.astro
│   │   │   │   └── Navbar.astro
│   │   │   ├── SocialLinks/
│   │   │   │   └── SocialLinksCircles.astro
│   │   │   ├── SocialLinksIcons.astro
│   │   │   └── Tagline/
│   │   │       └── TaglineOrbitBrackets.astro
│   │   ├── layouts/
│   │   │   ├── EmptyLayout/
│   │   │   │   └── EmptyLayout.astro
│   │   │   ├── MainLayout/
│   │   │   │   └── MainLayout.astro
│   │   │   └── partials/
│   │   │       ├── BaseHead.astro
│   │   │       └── BaseScripts.astro
│   ├── styles/
│   │   └── globals.css
│   ├── consts.ts
│   └── content.config.ts
├── astro.config.mjs
└── package.json