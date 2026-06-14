import { createFileRoute } from "@tanstack/react-router";
import { CtaButton } from "@/components/cta-button";
import { WHATSAPP_URL } from "@/components/site-header";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Alex Rojas | Desarrollo Web certificado" },
      {
        name: "description",
        content:
          "Soy Alex Miguel Rojas. Construyo páginas web con infraestructura sólida: Google IT, Linux Essentials, Cisco CCNA y fundamentos de ciberseguridad.",
      },
      { property: "og:title", content: "Sobre mí — Alex Rojas" },
      {
        property: "og:description",
        content:
          "No soy el típico diseñador web. Construyo infraestructura rápida, segura y optimizada.",
      },
      { property: "og:url", content: "/sobre-mi" },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
  }),
  component: AboutPage,
});

const TAGS = [
  "Google IT Certified",
  "Cisco Linux Essentials",
  "Cisco CCNA Networking",
  "Cybersecurity",
] as const;

function AboutPage() {
  return (
    <>
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            No soy el típico diseñador web.
            <br />
            <span className="text-primary text-glow">Construyo infraestructura.</span>
          </h1>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Hola, soy <span className="font-semibold text-foreground">Alex Miguel Rojas</span>.
              Muchos creadores de páginas web solo se preocupan por que el sitio se vea bonito.
              Yo me aseguro de que sea rápido, seguro y funcione impecablemente por debajo.
            </p>
            <p>
              Cuento con certificaciones oficiales en{" "}
              <strong className="text-foreground">Google IT Support</strong>, además de{" "}
              <strong className="text-foreground">Linux Essentials</strong>,{" "}
              <strong className="text-foreground">Introduction to Cybersecurity</strong> y{" "}
              <strong className="text-foreground">Redes (CCNA) por Cisco</strong>. Esto significa
              que tu presencia digital estará construida sobre cimientos técnicos sólidos,
              configurada con altos estándares de seguridad y optimizada para no fallar.
            </p>
            <p>
              Mi enfoque ético de trabajo garantiza total transparencia: sin costos ocultos, sin
              lenguaje técnico confuso, solo resultados reales para hacer crecer tu negocio local.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <CtaButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Hablemos de tu proyecto
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
