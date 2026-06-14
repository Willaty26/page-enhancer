import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, Clock } from "lucide-react";
import { WHATSAPP_URL } from "@/components/site-header";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Alex Rojas | Desarrollo Web" },
      {
        name: "description",
        content:
          "Escríbeme por WhatsApp o llena el formulario. Respondo en menos de 24 horas. Consulta inicial gratuita.",
      },
      { property: "og:title", content: "Contacto — Alex Rojas" },
      {
        property: "og:description",
        content: "Hablemos sobre tu negocio. Respondo en menos de 24 horas.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Hola Alex, soy ${form.nombre} (${form.email}).\n\n${form.mensaje}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            <span className="text-primary text-glow">Hablemos</span> de tu proyecto
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Cuéntame brevemente qué necesitas. Respondo en menos de 24 horas, en español.
          </p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Info de contacto */}
          <div className="space-y-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
            >
              <MessageCircle className="size-6 text-primary" aria-hidden />
              <div>
                <div className="font-bold">WhatsApp directo</div>
                <div className="text-sm text-muted-foreground">
                  La forma más rápida de contactarme.
                </div>
              </div>
            </a>
            <a
              href="mailto:hola@alexoscp.com"
              className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/60"
            >
              <Mail className="size-6 text-primary" aria-hidden />
              <div>
                <div className="font-bold">Correo electrónico</div>
                <div className="text-sm text-muted-foreground">hola@alexoscp.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6">
              <Clock className="size-6 text-primary" aria-hidden />
              <div>
                <div className="font-bold">Tiempo de respuesta</div>
                <div className="text-sm text-muted-foreground">Menos de 24 horas, días hábiles.</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Correo
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
                  Cuéntame de tu proyecto
                </label>
                <textarea
                  id="mensaje"
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[var(--shadow-glow-lg)] hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4" aria-hidden /> Enviar por WhatsApp
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Al enviar, se abrirá WhatsApp con tu mensaje ya redactado.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
