import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Camera, Settings2, Check, MessageSquare, FileText, Hammer, Package } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { WHATSAPP_URL } from "@/components/site-header";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Alex Rojas | Desarrollo Web" },
      {
        name: "description",
        content:
          "Escaparate digital, catálogo visual y captura de prospectos. Sitios web rápidos, seguros y optimizados para negocios locales en Massachusetts.",
      },
      { property: "og:title", content: "Servicios — Alex Rojas" },
      {
        property: "og:description",
        content: "Tres soluciones web pensadas para que tu negocio local consiga más clientes.",
      },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

const DETAILS = [
  {
    icon: Rocket,
    title: "El Escaparate Digital",
    desc: "Una página web profesional, simple y directa para que los clientes locales te encuentren y te contacten.",
    bullets: [
      "Página única optimizada (one-page)",
      "Botón directo a WhatsApp y mapa",
      "SEO local para Google Maps",
      "Hosting rápido y certificado SSL",
    ],
  },
  {
    icon: Camera,
    title: "Catálogo Visual",
    desc: "Galería estructurada para exhibir tus proyectos, productos o trabajos terminados.",
    bullets: [
      "Galería filtrable por categorías",
      "Imágenes optimizadas (carga rápida)",
      "Páginas individuales por proyecto",
      "Listo para compartir en redes",
    ],
  },
  {
    icon: Settings2,
    title: "Captura de Prospectos",
    desc: "Formularios y embudos pensados para que recibas solo a clientes calificados.",
    bullets: [
      "Formulario que llega a tu correo",
      "Preguntas para filtrar curiosos",
      "Integración con WhatsApp",
      "Aviso instantáneo de cada lead",
    ],
  },
] as const;

const PROCESS = [
  { icon: MessageSquare, title: "1. Consulta gratuita", desc: "Charlamos 20 minutos sobre tu negocio y tus objetivos." },
  { icon: FileText, title: "2. Propuesta clara", desc: "Te paso por escrito qué incluye, plazos y precio fijo." },
  { icon: Hammer, title: "3. Construcción", desc: "Desarrollo tu sitio con revisiones en cada etapa." },
  { icon: Package, title: "4. Entrega + soporte", desc: "Publicación, capacitación y soporte el primer mes." },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="px-5 py-16 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Mis <span className="text-primary text-glow">Servicios</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Tres soluciones pensadas para distintos momentos de tu negocio. Cada una se
          entrega con infraestructura web rápida, segura y bien configurada.
        </p>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {DETAILS.map(({ icon: Icon, title, desc, bullets }) => (
            <article
              key={title}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-4 inline-flex w-fit rounded-2xl border border-primary/40 bg-background p-3 text-primary">
                <Icon className="size-7" aria-hidden />
              </div>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="mt-3 text-muted-foreground">{desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/40 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Cómo <span className="text-primary">trabajamos juntos</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6">
                <Icon className="size-7 text-primary" aria-hidden />
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          ¿Cuál es la mejor opción para ti?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Lo decidimos juntos en una llamada gratis. Sin presión, sin tecnicismos.
        </p>
        <CtaButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8">
          Agendar Consulta Gratis
        </CtaButton>
      </section>
    </>
  );
}
