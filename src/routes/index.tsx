import { createFileRoute, Link } from "@tanstack/react-router";
import { Rocket, Camera, Settings2, ShieldCheck, Zap, Search } from "lucide-react";
import { CtaButton } from "@/components/cta-button";
import { WHATSAPP_URL } from "@/components/site-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rojas | Desarrollo Web Profesional — Massachusetts" },
      {
        name: "description",
        content:
          "Diseño web rápido, seguro y sin complicaciones para negocios locales. Infraestructura técnica certificada para conseguir más clientes en Massachusetts.",
      },
      { property: "og:title", content: "Alex Rojas | Desarrollo Web Profesional" },
      {
        property: "og:description",
        content:
          "Diseño web rápido, seguro y sin complicaciones para dueños de negocios que quieren conseguir más clientes.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Rocket,
    title: "El Escaparate Digital",
    desc: "Tu negocio en línea en tiempo récord. Una página directa y optimizada para que los clientes locales te encuentren en Google y te contacten a un solo clic.",
  },
  {
    icon: Camera,
    title: "Catálogo Visual",
    desc: "Muestra la calidad de tu trabajo al mundo. Galerías estructuradas y profesionales para contratistas, fotógrafos o creadores que exhiben proyectos.",
  },
  {
    icon: Settings2,
    title: "Captura de Prospectos",
    desc: "Filtra a los curiosos. Formularios estratégicos que envían la información de clientes listos para comprar directo a tu correo.",
  },
] as const;

const BENEFITS = [
  { icon: Zap, title: "Velocidad real", desc: "Carga en menos de 2 segundos en móviles." },
  { icon: ShieldCheck, title: "Seguro por diseño", desc: "Buenas prácticas de ciberseguridad incluidas." },
  { icon: Search, title: "Listo para Google", desc: "SEO técnico configurado desde el día uno." },
] as const;

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-5 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          Tu Negocio Online,
          <br />
          <span className="text-primary text-glow">Más Rápido y Seguro.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Diseño web rápido, seguro y sin complicaciones para dueños de negocios que
          quieren conseguir más clientes. Construido con tecnología de servidores de
          alto nivel.
        </p>
        <CtaButton
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
        >
          Obtener Consulta Gratuita
        </CtaButton>
      </section>

      {/* Beneficios rápidos */}
      <section className="border-y border-border bg-card/40 px-5 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="rounded-xl border border-primary/40 bg-background p-3 text-primary">
                <Icon className="size-6" aria-hidden />
              </div>
              <div>
                <h2 className="font-bold">{title}</h2>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Digitalízate ya para <span className="text-primary">Tu Negocio</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-primary/40 bg-background p-3 text-primary">
                  <Icon className="size-7" aria-hidden />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/servicios"
              className="text-sm font-semibold text-primary hover:text-glow"
            >
              Ver el detalle de cada servicio →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="border-t border-border bg-card/40 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold md:text-4xl">
            Lo que dicen mis <span className="text-primary">clientes</span>
          </h2>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            (Testimonios de ejemplo — editables cuando me pases los reales)
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "María Hernández",
                role: "Salón de belleza, Lawrence MA",
                quote:
                  "Alex me entregó la página en 5 días. Empecé a recibir mensajes de clientes nuevos por WhatsApp esa misma semana.",
              },
              {
                name: "Carlos Pérez",
                role: "Contratista de pintura, Lowell MA",
                quote:
                  "Subió mis fotos de trabajos como un catálogo profesional. Ahora cierro presupuestos sin tener que explicar nada por teléfono.",
              },
              {
                name: "Diana Vargas",
                role: "Repostería casera, Boston MA",
                quote:
                  "Explica todo en español claro, sin tecnicismos. La página se ve bonita y carga rapidísimo en el celular.",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <blockquote className="text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 py-20 text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          ¿Listo para <span className="text-primary text-glow">empezar</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Cuéntame de tu negocio en una llamada gratis de 20 minutos. Sin compromiso,
          sin tecnicismos.
        </p>
        <CtaButton
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          Hablemos por WhatsApp
        </CtaButton>
      </section>
    </>
  );
}
