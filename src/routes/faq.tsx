import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/cta-button";
import { WHATSAPP_URL } from "@/components/site-header";

const FAQS = [
  {
    q: "¿Cuánto tarda en estar lista mi página?",
    a: "Un sitio tipo Escaparate Digital se entrega entre 5 y 10 días hábiles. Proyectos más grandes (catálogos, captura de leads) entre 2 y 4 semanas, dependiendo del contenido que me pases.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Cada proyecto se cotiza después de la consulta gratuita. Trabajo con precio fijo y cerrado: lo que acordamos es lo que pagas, sin sorpresas.",
  },
  {
    q: "¿Qué pasa con el dominio y el hosting?",
    a: "Te asesoro en la compra del dominio (tu .com) y configuro el hosting más adecuado para tu caso. Puedes pagarlo a tu nombre, siempre quedas como dueño de todo.",
  },
  {
    q: "¿Ofreces soporte después de entregar?",
    a: "Sí. El primer mes de cambios pequeños y soporte está incluido. Después puedes contratar un plan mensual o pagar por cambios puntuales.",
  },
  {
    q: "¿Necesito tener listos los textos y las fotos?",
    a: "Es ideal, pero si no los tienes te ayudo con guías y ejemplos. Para fotos profesionales puedo recomendarte fotógrafos locales en Massachusetts.",
  },
  {
    q: "¿Trabajas solo en Massachusetts?",
    a: "Mi enfoque principal son los negocios locales de Massachusetts, pero trabajo con clientes en cualquier parte de Estados Unidos y Latinoamérica, siempre en español o inglés.",
  },
] as const;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes — Alex Rojas | Desarrollo Web" },
      {
        name: "description",
        content:
          "Plazos, precios, hosting, soporte y dominio. Resuelve tus dudas sobre el desarrollo de tu página web profesional.",
      },
      { property: "og:title", content: "Preguntas frecuentes — Alex Rojas" },
      {
        property: "og:description",
        content: "Todo lo que necesitas saber antes de empezar tu página web.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Preguntas <span className="text-primary text-glow">frecuentes</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Lo que la mayoría de mis clientes pregunta antes de empezar.
          </p>
        </header>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">¿No encontraste tu respuesta?</p>
          <CtaButton
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            Pregúntame por WhatsApp
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
