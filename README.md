# Altos del Río — Demo unificada

Aplicación única para presentar la experiencia gastronómica de Altos del Río: landing institucional, selector de locales, cartas digitales y panel administrativo.

## Stack
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- PWA instalable (manifest + service worker)
- Datos demo persistidos en `localStorage`
- Esquema SQL preparado para futura integración con Supabase/PostgreSQL

## Requisitos y ejecución
Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Rutas
- `/` landing institucional.
- `/menu` selector de locales. El QR general debe apuntar a esta ruta.
- `/menu/local/[slug]` carta pública de cada local.
- `/admin` panel de administración demo.
- `/admin/login` acceso demo.

## Locales incluidos
- Francesco · Pizza Napoletana
- Francesco · Casa de Pastas
- Francesco · Street Food

Se conservan dos registros inactivos para futuros locales, sin mostrarlos como confirmados.

## Reemplazar logos cuando llegue el material oficial
Los archivos están preparados para reemplazarse directamente dentro de `public/images/`, conservando los nombres:

| Recurso | Archivo |
|---|---|
| Marca central Altos del Río | `logo-altos-del-rio.svg` |
| Francesco Pizza Napoletana | `logo-francesco-pizza.svg` |
| Francesco Casa de Pastas | `logo-francesco-pastas.svg` |
| Francesco Street Food | `logo-francesco-street.svg` |

Al reemplazar cada archivo por el logo oficial con el mismo nombre y extensión, no hace falta tocar componentes ni datos. Si el diseñador entrega PNG o WEBP, se puede guardar con esa extensión y actualizar la ruta `logo` correspondiente en `src/lib/seed.ts`.

Las instrucciones también están en `public/images/README.txt`. La identidad visual y las fotografías actuales son provisionales para la demo.

## Acceso demo
- Usuario: `admin@altosdelrio.demo`
- Contraseña: `altos2026`

El acceso es ilustrativo. La autorización real debe implementarse en servidor antes de producción.

## Persistencia
El panel permite crear, editar y desactivar productos y categorías. Los cambios se guardan en el navegador mediante `localStorage`; no se comparten entre dispositivos.

## Próxima integración recomendada
1. Crear proyecto Supabase/PostgreSQL.
2. Ejecutar `supabase/schema.sql`.
3. Sustituir el almacenamiento local por consultas a Supabase.
4. Implementar Supabase Auth y RLS por `local_id`.
5. Crear roles `super_admin` y `local_admin`.
6. Guardar imágenes en Supabase Storage.

## Importante
Esta es una base de demostración, no una versión lista para producción. Antes de publicar con datos reales hay que implementar autenticación segura, autorización en backend, validación de archivos, auditoría y persistencia centralizada.
