# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (already scaffolded in this repo). Static site, no client framework needed; vanilla CSS + a small inline script for scroll-reveal motion.

## Users

Dueño o admin de un negocio local en Ecuador (café, barbería, restaurante, gimnasio, tienda de ropa, suplementos, farmacia, agencia). Bueno operando el local, no escribiendo copy de marketing ni leyendo un churn chart. Llega a menudo desde el teléfono.

## Product Purpose

Nidus (legal/dominio: Nidu, `nidu.app`) es la app para el negocio que emite tarjetas de fidelización reales en Apple Wallet y Google Wallet. El cliente del negocio se inscribe escaneando un QR del mostrador y guarda el pase sin instalar ninguna app ni crear cuenta. El negocio sella o canjea apuntando la cámara de la app al QR del pase. Esta web (`nidu.app`, landing pública) existe para convencer al dueño del negocio de usar Nidus — no es la página de inscripción del cliente (`nidu.app/j/<cardId>`, que ya existe y es otro `MaterialApp`).

## Positioning

El nido está en el wallet del cliente, no en otra app. A diferencia de una tarjeta de cartón (se pierde) o un CRM que el dueño nunca abre, Nidus vive donde el cliente ya mira todos los días: su Apple Wallet o Google Wallet. Cero fricción para el cliente (cero apps, cero cuentas, cero contraseñas); el mostrador solo escanea.

## Operating Context

Flujo del dueño: crea cuenta → elige rubro (prellena sellos/recompensa) → publica negocio + tarjeta → imprime QR/afiche para el mostrador → el cliente escanea y se une sin instalar Nidus → en cada visita el negocio abre "Sellar", escanea el pase, suma sello; al completar, canjea; el pase del cliente se actualiza solo.

Geografía actual: Ecuador primero (felicitación de cumpleaños automática a las 09:00 `America/Guayaquil`). Tono latam, tuteo, no español peninsular ni "tú" corporativo de Silicon Valley.

## Capabilities and Constraints

Ya existe y sí se promociona: pases reales en Apple Wallet + Google Wallet; inscripción por QR; sellado/canje con cámara; plantillas por rubro; varios tipos de pase (fidelización, cupón, entrada, membresía, tarjeta de regalo, pase/invitación); modos (sellos, puntos, visitas, consumo); sucursales + equipo (dueño/admin/gerente/mostrador); clientes y segmentos (nuevos, en riesgo, cumpleaños, top, inactivos); niveles (bronce/plata/oro); campañas al pase (aparecen en el wallet); felicitación de cumpleaños automática; dashboard y métricas (sellos, canjes, nuevos vs recurrentes, embudo, tasa de retorno); sugerencias de IA que arman borradores de campaña y nunca envían solas. La app soporta ES/EN, pero esta landing v1 es solo español.

No existe todavía / no vender como disponible: facturación, planes (Semilla–Barrio–Ciudad–Región), prueba de 14 días, reseñas de Google Business Profile, WhatsApp Business, sellado desde POS, Zapier, facturación electrónica. Si se menciona, un único renglón de roadmap: "Próximo: reseñas, WhatsApp y cobro desde el punto de venta." Nada más.

No mencionar en la web: AWS, Cognito, Lambda, Aurora, Flutter, CDK, HMAC, "kuti", hackathon, Devpost — es producto, no infraestructura.

Terminología: marca pública = "Nidus" (wordmark, H1, nav); legal/dominio/correo = "Nidu" (`nidu.app`, `soporte@nidu.app`); frase del pase = "Hecho con Nidus".

Versión actual de la app: `1.0.0+4`. Tabs del merchant: Home, Tarjetas, Clientes, Perfil (campañas/métricas viven dentro de Clientes/Dashboard; el FAB de IA no reemplaza el botón central de sellar).

## Brand Commitments

Metáfora de marca: el nido — los emprendedores consiguen clientes y los pierden porque no hay un nido que los haga volver.

Logo real disponible en el repo hermano de la app Flutter (`/Volumes/Second Memory/dev/mobile/nidu-app/assets/icon/`): `nidus.png` (nido de arcos negros entrecruzados + wordmark NIDUS negro, sobre degradé pastel lila→rosa→amarillo — **ese degradé está prohibido como fondo de esta web**) y `nidus_bgremove.png` (mismo símbolo sin fondo, para favicon/nav/apple-touch-icon). El nido son líneas finas entrecruzadas tipo paja; nunca emoji de nido ni pájaro clipart. El usuario copia estos PNG a `public/brand/` en este proyecto.

Voz: directa, íntima, corta, tuteo, frases que caben en un cartel. El fundador (Cristhian Recalde) aparece una sola vez, no en cada sección.

Paleta obligatoria negro/blanco/morado, tipografía serif editorial (Fraunces/Newsreader/Source Serif 4) para display + sans geométrica (Geist/Satoshi/Inter) para UI, radios 20/24/28, sombras difusas de bajo contraste, motion 150/250/400ms con `ease-out-cubic` — todo especificado exhaustivamente en `idea.md` (fuente autoritativa del PRD de marketing, no sustituir ni reinterpretar el copy).

Única estadística permitida, con atribución obligatoria: "Un 5% más de retención puede subir tus ganancias hasta un 95%. — Bain & Company, Harvard Business Review". No inventar cifras de tracción, testimonios ni ratings de tienda.

## Evidence on Hand

`idea.md` en la raíz de este repo es el PRD completo de marketing, con copy literal para cada sección, tabla de rubros/plantillas, texto legal canónico (plantilla pendiente de revisión legal, no reescribir) y criterios de aceptación. Es la fuente de verdad para esta landing.

No hay screenshots reales de la app disponibles en este checkout ni testimonios/casos de clientes: el pase de fidelización y el nido se ilustran en SVG/CSS fieles a la descripción del PRD en vez de inventar mockups. No existe aún `og:image` 1200×630 real — queda pendiente como TODO explícito, no se inventa un asset falso.

## Product Principles

- El cliente del negocio nunca instala nada: cada sección debe reforzar esto, no solo el hero.
- El copy es literal del PRD; no se parafrasea, no se agregan features de fases futuras como si ya existieran, no se inventan números.
- "Nidus" es la marca en toda la UI; "Nidu" solo aparece en dominio/legal/correo.
- Prueba racional sobre exageración: una sola estadística citada, cero testimonios inventados.
- Estética editorial oscura y precisa (negro/blanco/morado), nunca un template SaaS genérico (sin blobs morados, sin grid de 3 iconos Lucide, sin mockup de iPhone stock).

## Accessibility & Inclusion

Mobile first (el dueño llega a menudo desde el teléfono). Contraste AA, headings reales, botones con nombre, focus visible, sin cookie banner (no hay analytics de terceros previstos).
