## Objetivo

Convertir tu archivo `index (4).html` en un proyecto React real (TanStack Start) manteniendo la estética **dark + cian neón (#00e5ff)** sobre fondo casi negro (#050505), y resolviendo todo lo que detecté en el análisis previo.

## Estructura de rutas

```
/              → Home (hero + servicios destacados + CTA)
/servicios     → Detalle de los 3 servicios + proceso de trabajo
/sobre-mi      → Tu historia + certificaciones + tags
/contacto      → Formulario + WhatsApp + email
/faq           → Preguntas frecuentes
```

Cada ruta con su propio `<title>`, `description`, `og:title`, `og:description` y `canonical` propio.

## Componentes compartidos

- **Navbar** sticky con links a todas las rutas + CTA "WhatsApp"
- **Footer** con marca, links, copyright (mejorando contraste del actual `#444 sobre #020202`)
- **Botón CTA** reutilizable con la variante "neón cian"
- **Tarjeta** reutilizable para servicios y testimonios

## Contenido nuevo (de ejemplo, editable después)

- **Hero**: tu copy actual, intacto
- **Servicios**: los 3 que ya tienes (Escaparate, Catálogo, Captura), expandidos con bullets y entregables
- **Sobre mí**: tu texto actual + certificaciones como tags
- **Testimonios**: 3 testimonios de ejemplo realistas (negocios locales de Massachusetts) que puedas reemplazar
- **Proceso**: 4 pasos (Consulta → Propuesta → Construcción → Entrega + soporte)
- **FAQ**: 6 preguntas comunes (tiempos, precios, hosting, soporte, dominio, cambios)
- **Contacto**: formulario simple (nombre, email, mensaje) + WhatsApp + sección "respondo en menos de 24h"

> El formulario inicialmente solo abrirá `mailto:` o WhatsApp prellenado. Si después quieres que los mensajes se guarden o lleguen a un email automático, activamos Lovable Cloud — te aviso antes.

## SEO y metadatos

- `<title>` por ruta con tu marca: "Alex Rojas | Desarrollo Web — Massachusetts"
- `<meta name="description">` único por página
- Open Graph completo (`og:title`, `og:description`, `og:type`, `og:url`)
- `<link rel="canonical">` por ruta (relativo, sin dominio hardcodeado)
- **JSON-LD `LocalBusiness`** en home con nombre, área de servicio (Massachusetts), URL de WhatsApp e idioma
- **JSON-LD `FAQPage`** en `/faq`
- Favicon (genero uno simple con la "A" en cian sobre negro)
- `lang="es"` en `<html>` (ya está)

## Diseño (sistema)

Tokens en `src/styles.css` con tus colores actuales:

- `--background`: casi negro (#050505)
- `--foreground`: blanco
- `--primary`: cian neón (#00e5ff) — usado en CTAs, tags, acentos
- `--primary-glow`: para los `text-shadow` y `box-shadow` cian
- `--muted-foreground`: gris claro (#a0aab2)
- `--card`: #0a0a0a con border #1a1a1a
- Gradiente radial del hero como token reutilizable

Tipografía: Inter (similar a Segoe UI pero web-safe y moderna). Bordes redondeados generosos (rounded-2xl/3xl) como en tu diseño actual. Hover con `translateY(-10px)` y glow cian conservados.

## Accesibilidad y bugs corregidos

- Arreglo el `<div class="about-text">` duplicado de las líneas 270-293 (estructura rota)
- Íconos emoji con `aria-label` o reemplazo por iconos Lucide consistentes
- `target="_blank"` siempre con `rel="noopener noreferrer"`
- Subo el contraste del copyright para pasar WCAG AA
- Navegación accesible por teclado en todos los CTAs

## Lo que NO se hace ahora

- No activo Lovable Cloud todavía (el formulario va a WhatsApp/mailto). Si quieres recibir leads por email/dashboard, lo agregamos en un segundo paso.
- No agrego Google Analytics ni píxel — lo añadimos cuando me digas qué herramienta usas.
- No agrego portfolio con imágenes reales hasta que me las pases; uso placeholders neutros en la sección.
- No publico el sitio — lo dejas listo y publicas cuando quieras.

## Detalles técnicos

- Stack: TanStack Start v1 + React 19 + Tailwind v4 (ya configurado en el proyecto)
- Reemplazo del placeholder actual en `src/routes/index.tsx`
- Nuevas rutas: `src/routes/servicios.tsx`, `sobre-mi.tsx`, `contacto.tsx`, `faq.tsx`
- Header/Footer compartidos vía `src/routes/__root.tsx` (envueltos alrededor del `<Outlet />`)
- Componentes shadcn ya disponibles (Button, Card, Input, Textarea, Accordion para FAQ)
