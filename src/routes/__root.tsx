import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-primary text-glow">404</h1>
          <h2 className="mt-4 text-xl font-semibold">Página no encontrada</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            La página que buscas no existe o ha sido movida.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Esta página no se cargó</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo falló de nuestro lado. Puedes reintentar o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full border-2 border-primary px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2 text-sm font-medium hover:bg-secondary"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#050505" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Alex Rojas — Soluciones Digitales" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        href:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23050505'/%3E%3Ctext x='50%25' y='54%25' font-family='Inter,sans-serif' font-size='38' font-weight='800' text-anchor='middle' fill='%2300e5ff'%3EA%3C/text%3E%3C/svg%3E",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Alex Rojas — Soluciones Digitales",
          description:
            "Desarrollo web rápido, seguro y optimizado para negocios locales en Massachusetts.",
          areaServed: { "@type": "AdministrativeArea", name: "Massachusetts, EE. UU." },
          inLanguage: "es",
          sameAs: ["https://wa.me/qr/6FOXVL5QCY4NN1"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
