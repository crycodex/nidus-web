# PRD — Web promocional de Nidus

Documento para construir la landing pública de la app. Está pensado para pegárselo a otra IA y que implemente el sitio sin el repo de Flutter.

**Idioma del sitio:** español (latam). Un toggle EN puede quedar como fase 2.

**Esto no es** la página de inscripción del cliente (`nidu.app/j/<cardId>`). Esa ya existe. Esta web es para **convencer al dueño del negocio** de usar Nidus.

---

## Prompt para la IA que construye

Copia esto junto con el resto del documento:

> Construye una landing promocional one-page (más páginas legales) para **Nidus**, una app de tarjetas de fidelización digitales en Apple Wallet y Google Wallet para negocios locales. Paleta **negro / blanco / morado**. Estética editorial, oscura, precisa — no un template SaaS genérico. Usa el copy de este PRD tal cual salvo que esté marcado como placeholder. No inventes números de clientes, testimonios, App Store ratings ni features que el PRD marca como no-lanzadas. El logo es un nido de líneas negras + wordmark NIDUS. El cliente del negocio **no descarga nada**.

---

## 1. Producto

### Qué es

**Nidus** (legal/dominio: **Nidu**, `nidu.app`) es la app para el **negocio**. Emite tarjetas de fidelización reales en **Apple Wallet** y **Google Wallet**. El cliente se inscribe escaneando un QR del mostrador, rellena un formulario corto y guarda el pase en su wallet. Después, el negocio sella o canjea apuntando la cámara de la app al QR del pase.

Metáfora de marca: **el nido**. Los emprendedores consiguen clientes y los pierden porque no hay un nido que los haga volver. Nidus es ese nido.

### Lo que el dueño hace (flujo real)

1. Crea cuenta (email, Apple o Google).
2. Elige rubro (café, barbería, restaurante, gimnasio, ropa, suplementos, farmacia, agencia u otro). Eso prellena sellos y recompensa.
3. Publica negocio + tarjeta.
4. Imprime el QR / afiche y lo pone en el mostrador.
5. El cliente escanea → se une **sin instalar Nidus**.
6. En cada visita, el negocio abre **Sellar**, escanea el pase, suma un sello. Al completar, canjea la recompensa. El pase en el teléfono del cliente se actualiza solo.

### Lo que el cliente hace

- Cero app, cero cuenta, cero contraseña.
- Copy canónico: *«Únete gratis, sin descargar nada.»* / *«Cero contraseñas. Cero cuentas. Cero apps que instalar.»*

### Qué ya existe (sí promocionar)

| Capacidad | Cómo hablarla |
|---|---|
| Pases reales Apple Wallet + Google Wallet | La tarjeta vive donde el cliente ya mira: su wallet |
| Inscripción por QR | Un afiche en el mostrador basta |
| Sellado y canje con cámara | Un tap, un escaneo, listo |
| Plantillas por rubro | En minutos, no en semanas |
| Varios tipos de pase | Fidelización, cupón, entrada, membresía, tarjeta de regalo, pase/invitación |
| Modos | Sellos, puntos, visitas o consumo |
| Sucursales + equipo | Dueño, admin, gerente, mostrador; quién sella y quién canjea |
| Clientes y segmentos | Todos, nuevos, en riesgo, cumpleaños, top, inactivos |
| Niveles | Bronce / Plata / Oro (o los que defina el negocio) |
| Campañas al pase | Mensaje, promoción, descuento; aparecen **en el wallet**, no en un inbox más |
| Felicitación de cumpleaños | Automática, 09:00 hora Ecuador |
| Dashboard y métricas | Sellos, canjes, nuevos vs recurrentes, embudo, tasa de retorno |
| Sugerencias de IA | Lee la actividad y arma **borradores** de campaña; **nunca envía sola** |
| ES / EN en la app | La landing v1 es solo ES |

### Qué no existe todavía (no venderlo como disponible)

- Facturación / planes Semilla–Barrio–Ciudad–Región / prueba 14 días
- Reseñas de Google Business Profile
- WhatsApp Business, sellado desde POS, Zapier, facturación electrónica

Si hace falta, un renglón de roadmap al pie: *«Próximo: reseñas, WhatsApp y cobro desde el punto de venta.»* Nada más.

### No mencionar en la web

AWS, Cognito, Lambda, Aurora, Flutter, CDK, HMAC, «kuti», hackathon, Devpost. Es producto, no infra.

---

## 2. Audiencia y posicionamiento

**Quién paga:** dueño o admin de un negocio local — café, barbería, restaurante, gym, tienda, farmacia. Bueno operando el local, no escribiendo copy de marketing ni leyendo un churn chart.

**Geografía actual:** Ecuador primero (cumpleaños a las 09:00 `America/Guayaquil`). Tono latam, no España peninsular, no «tú» corporativo de Silicon Valley.

**Job-to-be-done:** que el cliente que ya vino, vuelva.

**Promesa:** fidelización digital sin fricción. El nido está en el wallet del cliente; el mostrador solo escanea.

**Anti-promesa (competencia implícita):** no es otra app que el cliente tiene que descargar. No es una tarjeta de cartón que se pierde. No es un CRM que el dueño nunca abre.

**Prueba racional (única estadística permitida, con atribución):**

> Un 5% más de retención puede subir tus ganancias hasta un 95%.  
> — Bain & Company, Harvard Business Review

No inventar «+10.000 negocios» ni ratings de tienda.

---

## 3. Marca

| Uso | Nombre |
|---|---|
| Marca pública, wordmark, H1, nav | **Nidus** |
| Legal, dominio, correo | Nidu · `nidu.app` · `soporte@nidu.app` |
| Frase del pase | «Hecho con Nidus» |

**Logo** (archivos en el repo de la app):

- `assets/icon/nidus.png` — nido de 6 arcos negros + wordmark `NIDUS` en negro, sobre degradé lila → rosa → amarillo suave. **No uses ese degradé como fondo de la web.** Recorta el nido + wordmark (o usa `nidus_bgremove.png`) sobre negro o blanco.
- `assets/icon/nidus_bgremove.png` — mismo símbolo sin fondo. Favicon, nav, apple-touch-icon.
- El nido son líneas finas entrecruzadas, como paja. Nunca un emoji de nido, nunca un pájaro clipart.

**Voz**

- Directa, íntima, corta. Como la intro de la app, no como un deck de Salesforce.
- Tuteo. Frases que caben en un cartel.
- Fundador visible una vez (Cristhian Recalde), no en cada sección.

**Copy de la intro de la app (canon de tono, reutilizar):**

- *Hola. Bienvenido.*
- *Si estás aquí, es porque estás listo para aumentar tu rentabilidad.*
- *¿Te has dado cuenta? Tus clientes no vuelven.*
- *Por eso creé Nidus: para que cada negocio pueda crear un nido con sus clientes y construir lealtad de verdad.*
- Headline de auth: **Fideliza a tus clientes sin fricción**

---

## 4. Diseño visual

### Paleta (obligatoria)

Negro, blanco, morado. El morado es puntuación, no un baño de color.

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#111111` | Texto, nav oscura, botones primarios, scanner |
| `paper` | `#FFFFFF` | Superficies, botones outline |
| `canvas` | `#F5F5F5` | Fondos claros de sección |
| `muted` | `#757575` | Secundario |
| `faint` | `#B0B0B0` | Hints |
| `purple` | `#7C3AED` | Acento (pase default de la app, `morado`) |
| `purple-deep` | `#4C1D95` | Extremo del degradé del pase |
| `purple-brand` | `#7C5CBF` | Acento más suave del logo; usar en texto sobre claro si `#7C3AED` grita |
| `purple-tint` | `rgba(124, 58, 237, 0.12)` | Chips, glows mínimos |
| `nav` | `#111111` | Barra tipo app; iconos activos blancos |

**Prohibido en esta web:** el degradé pastel lila/azul/amarillo de la intro de la app (`#C9B6F2 → #B8C8F5 → #F6E7A8`). Ese es onboarding in-app, no marketing.

**Hero de la landing:** fondo `ink`, texto blanco, un solo acento morado (línea, nido, o el pase). Secciones siguientes alternan `ink` y `canvas`.

### Tipo

La app no trae font custom (sans del sistema + serif solo en la carta del fundador).

- **Display / H1:** serif editorial con carácter (Fraunces, Newsreader o Source Serif 4). Eco de la carta de bienvenida.
- **UI / body / nav:** sans geométrica tight (Geist, Satoshi o Inter como fallback). Títulos de producto en **extrabold (800)**, como la app (`28 / 800` y `22 / 800`).
- Wordmark del logo: sans black, tracking cerrado, cajas (la D y la U del logo son casi rectángulos). No sustituir `NIDUS` por otra font en el isotipo.

### Forma (copiar de la app)

- Radios: **20** (cards), **24** (paneles), **28** (hero CTA / pases).
- Botón primario: alto **52**, radius **20**, fill `ink` o `purple`, label blanco **700**.
- Botón outline: blanco, borde `rgba(0,0,0,0.12)` 1.5px, texto `ink`.
- Sombras: difusas, poco contraste (`0 2px 8px rgba(0,0,0,0.04)` / `0 8px 20px rgba(0,0,0,0.06)`). Nada de drop shadows duras.
- Nav de la app (referencia visual, no copiar el widget): píldora negra, iconos blancos, CTA central de escanear.

### Motion

`150 / 250 / 400ms`, curva `ease-out-cubic`. Un overshoot suave (`ease-out-back`) solo al entrar cards. Respeta `prefers-reduced-motion`.

### Dirección estética (evitar lo genérico)

No: blobs morados, grid de 3 features con iconos Lucide, mockup de iPhone stock de unsplash, Inter 16px sobre blanco, «Get started today».

Sí: composición tipo **revista + producto**. Mucho negro. Un pase 3D (gradiente `#7C3AED → #4C1D95`, sellos, «Hecho con Nidus»). El nido como motivo lineal, no como mascota. Tipografía grande, pocas palabras. Un teléfono con el wallet, no un dashboard falso lleno de charts inventados.

### Pase de ejemplo (composición)

Usar siempre el default de onboarding, no un invento:

- Color: morado `#7C3AED → #4C1D95`, diagonal top-left → bottom-right
- Nombre: «Tarjeta de sellos» o el del negocio de demo («Café Aurora»)
- Regla: **8 sellos = café gratis**
- Footer: «Hecho con Nidus»
- No poner logo de Apple/Google encima del pase; esos botones viven en el flujo del cliente, no en el marketing del negocio

Otros colores de pase (solo si hay un carrusel de tipos, no como paleta de la web): tomate, negro, azul, verde, fucsia, dorado, turquesa, grafito.

---

## 5. Arquitectura de la página

Landing **one-page** + 2 rutas legales. Sticky nav.

### Nav

- Izquierda: isotipo nido + **Nidus**
- Anchors: Producto · Cómo · Para quién · IA
- Derecha: **Descargar** (primario, píldora negra o morada)

Mobile: hamburguesa o links colapsados; CTA siempre visible.

### Sección A — Hero

Fondo `ink`. Serif grande.

**Eyebrow:** Nidus

**H1:** Fideliza a tus clientes sin fricción

**Lead:** Tus clientes no tienen que descargar nada. La tarjeta vive en Apple Wallet y Google Wallet. Tú solo escaneas.

**CTAs:**
1. Descargar la app (App Store + Google Play, o un botón «Descargar» que abra ambos)
2. Ver cómo funciona (scroll a sección C)

**Visual:** un pase morado a tamaño hero + silueta de iPhone/Android con el wallet, o el nido lineal enorme en stroke blanco 1px. No un screenshot crudo de toda la app.

**Microcopy bajo los botones:** Disponible para iOS y Android. El cliente no instala Nidus.

### Sección B — Tensión (3 líneas)

Fondo `ink` o un strip `canvas` con serif 30px+, como el stepper in-app. Una línea a la vez o las tres en columna, no un párrafo.

1. Hola. Bienvenido.
2. ¿Te has dado cuenta? Tus clientes no vuelven.
3. Un 5% más de retención puede subir tus ganancias hasta un 95%.  
   *Fuente en 13px muted: Bain & Company, Harvard Business Review*

### Sección C — Cómo funciona (3 pasos)

Fondo `canvas`. Números grandes, no iconos genéricos.

1. **Publica tu tarjeta** — Eliges el rubro. Nidus arma sellos y recompensa. Imprimes el QR.
2. **El cliente se une en 20 segundos** — Escanea, pone su nombre, guarda el pase. Cero apps.
3. **Tú sellas en el mostrador** — Abres Sellar, apuntas al pase, listo. Cuando completa, canjeas. El wallet se actualiza solo.

### Sección D — El nido del cliente

Dos columnas. Izquierda copy, derecha el pase.

**H2:** El nido está en su wallet, no en otra app.

**Body:** Cada sello, cada promoción y cada felicitación de cumpleaños aparecen en Apple Wallet o Google Wallet. El cliente ya abre esa app. Nidus no le pide otra.

Bullet corto:

- Únete gratis, sin descargar nada
- Cero contraseñas, cero cuentas
- El pase se actualiza después de cada sello

### Sección E — Para el negocio

Grid 2×3 o 2×4, cards radius 20, fondo blanco. Títulos 800.

1. **Sellar** — Cámara al QR del pase.
2. **Tarjetas a tu medida** — Sellos, puntos, visitas o consumo. Cupón, entrada, membresía, regalo.
3. **Clientes y niveles** — Quién es nuevo, quién está en riesgo, quién cumple años, quién es top.
4. **Campañas en el pase** — El mensaje llega al wallet, no a un correo que nadie abre.
5. **Equipo y sucursales** — El mostrador sella. El dueño ve el ranking.
6. **Métricas** — Sellos, canjes, nuevos vs recurrentes, embudo de inscripción → primer sello → canje.

### Sección F — Rubros

H2: **Hecho para el local, no para la cadena.**

Chips o mini-cards con la plantilla real (no inventar reglas):

| Rubro | Plantilla |
|---|---|
| Café | 8 sellos = café gratis |
| Barbería | 6 cortes = 1 corte gratis |
| Restaurante | 10 visitas = plato de la casa |
| Gimnasio | 10 visitas = 1 clase gratis |
| Tienda de ropa | 8 compras = 20% off |
| Suplementos | 8 compras = producto de regalo |
| Farmacia | 10 visitas = descuento |
| Agencia | 6 reservas = beneficio de cortesía |
| Otro | Tú defines la regla |

### Sección G — IA (tono contenido)

H2: **Sugerencias, no piloto automático.**

Body: Cuando hay historial de verdad, Nidus lee tus clientes y te arma **borradores** de campaña (quién, qué decir, por qué). Tú revisas. Si te sirve, se prellena el envío. **Nidus no manda nada sola.**

No poner un chat GPT. Un sheet/card con 2 sugerencias de ejemplo, claramente marcadas como ilustración:

- Segmento: En riesgo — *«Hace 3 semanas que no te vemos. Este café te espera — el próximo sello va por nuestra cuenta.»*
- Segmento: Cumpleaños — *«Feliz cumpleaños. Hoy tu recompensa está a un sello.»*

### Sección H — Carta del fundador (corta)

Una card tipo papel (`#FFFCF7` está permitido **solo aquí**, con una raya morada de 3px a la izquierda — es la stationery in-app). No ocupar media página.

> Hola.  
> Vi que los emprendedores consiguen clientes… y los pierden. No hay un nido que los haga volver. Por eso creé Nidus.  
> — Cristhian Recalde, fundador

### Sección I — CTA final

Fondo `purple → purple-deep` o `ink` con un nido stroke. 

**H2:** Pon el nido en el mostrador esta semana.

**CTA:** Descargar Nidus

**Nota:** El cliente sigue sin instalar nada.

### Footer

Nidus · `nidu.app`  
Privacidad · Términos · `soporte@nidu.app`  
© 2026 Nidu

---

## 6. Páginas legales

Rutas `/privacidad` y `/terminos`. Texto **canónico** de la app (plantilla; el PRD legal de producción sigue pendiente de abogado — no reescribir ni «mejorar»):

### Privacidad

Última actualización: 2026.

En Nidu recopilamos únicamente los datos necesarios para operar tu programa de fidelización: nombre, teléfono, correo y, si lo compartes, fecha de nacimiento. Estos datos se usan para emitir tu tarjeta digital en Apple Wallet o Google Wallet, registrar tus sellos y canjes, y comunicarte novedades del negocio si aceptaste recibirlas.

No vendemos tus datos a terceros. Tu información se comparte únicamente con Apple o Google, en la medida necesaria para mostrar tu tarjeta en su respectiva billetera digital.

Puedes solicitar en cualquier momento la eliminación de tus datos o de tu cuenta escribiendo al negocio donde te inscribiste, o directamente a soporte@nidu.app.

Este documento es una plantilla general y debe ser revisada por un profesional legal antes de su uso definitivo en producción.

### Términos

Última actualización: 2026.

Al usar Nidu, ya sea como negocio o como cliente que se inscribe en un programa de fidelización, aceptas estos términos.

Nidu ofrece una plataforma para que negocios locales emitan tarjetas de fidelización digitales. Los sellos, recompensas y condiciones de cada tarjeta son definidos y administrados por el negocio emisor — Nidu no es responsable por el cumplimiento de las recompensas ofrecidas.

El uso del servicio debe hacerse de forma lícita y de buena fe. Nos reservamos el derecho de suspender cuentas que hagan un uso indebido de la plataforma.

Este documento es una plantilla general y debe ser revisada por un profesional legal antes de su uso definitivo en producción.

---

## 7. CTAs y placeholders

Hasta tener URLs reales:

```
APP_STORE_URL=https://apps.apple.com/app/nidus   # TODO
PLAY_STORE_URL=https://play.google.com/store/apps/details?id=…  # TODO
SUPPORT_EMAIL=soporte@nidu.app
CANONICAL=https://nidu.app
```

Si las tiendas aún no están publicadas: un solo CTA **«Avisarme cuando esté lista»** con email, o **«Crear cuenta»** apuntando al signup de la app cuando exista deep link. No fingir badges de App Store clicables a `#`.

Deep links de inscripción de clientes (`/j/<id>`) **no van** en esta web.

---

## 8. SEO / meta

- **Title:** Nidus — Fideliza a tus clientes sin fricción
- **Description:** Tarjetas de fidelización digitales en Apple Wallet y Google Wallet para negocios locales. El cliente no descarga nada. Tú sellas en el mostrador.
- **og:image:** pase morado + nido sobre negro, 1200×630
- Favicon: nido negro sobre blanco (y blanco sobre negro en `media=prefers-color-scheme:dark`)
- `theme-color`: `#111111`
- Lang: `es`
- JSON-LD `SoftwareApplication` con name Nidus, applicationCategory BusinessApplication, operatingSystem iOS, Android. Sin `aggregateRating` inventado.

---

## 9. Stack sugerido

Landing estática. Prioridad: rápida, barata, fácil de hospedar en CloudFront / `nidu.app`.

Recomendado: **Astro** o HTML+CSS+JS mínimo. Tailwind está bien si la dirección visual se cumple. Next.js solo si hace falta el form de espera.

**No** empaquetar esto dentro del Flutter web (`web/` del repo es la app, no marketing). Repo aparte o carpeta `marketing/` que no toque `lib/`.

Requisitos:

- Mobile first (el dueño a menudo llega desde el teléfono)
- Lighthouse accesible: contraste AA, headings reales, botones con nombre, focus visible
- Sin cookie banner si no hay analytics de terceros; si hay, consent mínimo
- Sin stock photos de «equipo sonriente en cowork»

---

## 10. Assets que debe pedir / copiar

Del repo de la app:

- `assets/icon/nidus.png`
- `assets/icon/nidus_bgremove.png`

Recortar el nido+wordmark para usarlo en claro y en oscuro. No redibujar el nido con otra cantidad de líneas.

Si hay screenshots reales de Home / Sellar / el pase, usarlos con frame de teléfono; si no, ilustrar el pase en CSS/SVG (gradiente + 8 dots + reward). Preferible un pase ilustrado fiel antes que un mockup genérico.

---

## 11. Criterios de aceptación

- [ ] Se entiende en 5 segundos que el **cliente no instala Nidus**
- [ ] Paleta solo negro / blanco / morado (más grises de texto)
- [ ] Marca escrita **Nidus** en UI; Nidu solo en legal/dominio/email
- [ ] Copy del hero y de cómo-funciona coincide con este PRD
- [ ] No hay features de Fase 2/3 vendidas como listas
- [ ] No hay números de tracción inventados
- [ ] Legal usa el texto canónico
- [ ] Desktop y mobile; el CTA de descarga no se esconde
- [ ] Favicon y OG image con el nido
- [ ] No se parece a un template de SaaS (revisar: ¿hay blobs? ¿hay 3 iconos Lucide iguales? recortar)

---

## 12. Notas de contexto (por si la otra IA pregunta)

- Versión actual de la app: `1.0.0+4`.
- Tabs del merchant: Home, Tarjetas, Clientes, Perfil. Campañas y métricas viven dentro de Clientes / Dashboard. El FAB de IA no reemplaza el botón central de sellar.
- La página pública de enroll es otro `MaterialApp` (ruta `/j/...`), no la app del negocio.
- `docs/` de backend (auth, database, web.md) no está en este checkout; no hace falta para la landing.
- Idiomas in-app: `app_es.arb` es la plantilla, `app_en.arb` existe.

---

*PRD de marketing, 2026. Fuente: app Flutter Nidu/Nidus (copy de `lib/l10n/app_es.arb`, tema en `lib/core/theme/`, producto en `lib/features/`). No sustituye el PRD de producto.*
