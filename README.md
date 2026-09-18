# Nidus

Landing de [nidu.app](https://nidu.app): tarjetas de fidelización en Apple Wallet y Google Wallet para negocios locales.

## Desarrollo

```sh
npm install
npm run dev
```

El servidor de desarrollo corre en `http://localhost:4321`.

## Build

```sh
npm run build
npm run preview
```

## Deploy en Vercel

El proyecto es un sitio estático de Astro. Vercel lo detecta solo (`astro build` → `dist`).

1. Sube el repo a GitHub (ya está en `crycodex/nidus-web`).
2. En [vercel.com/new](https://vercel.com/new) importa el repo.
3. Framework: **Astro**. Build: `npm run build`. Output: `dist`.
4. Añade el dominio `nidu.app` en Project → Settings → Domains.

O desde la CLI, autenticado:

```sh
npx vercel --prod
```

Node 22+ (ver `.nvmrc`).
