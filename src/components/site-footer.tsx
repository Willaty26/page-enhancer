import { Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#020202] px-5 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="text-xl font-bold tracking-wide text-foreground">
          Alex Rojas <span className="text-primary">|</span> Soluciones Digitales
        </div>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          Impulsando el crecimiento de negocios locales en Massachusetts y de todo el
          mundo con infraestructura web rápida, segura y efectiva.
        </p>
        <p className="max-w-xl text-base text-muted-foreground">
          ¿Listo para transformar tu negocio?
          <br />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary transition-all hover:text-foreground hover:text-glow"
          >
            Escríbeme por WhatsApp aquí
          </a>
        </p>

        <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/servicios" className="hover:text-primary">Servicios</Link>
          <Link to="/sobre-mi" className="hover:text-primary">Sobre mí</Link>
          <Link to="/faq" className="hover:text-primary">FAQ</Link>
          <Link to="/contacto" className="hover:text-primary">Contacto</Link>
        </nav>

        <p className="mt-6 text-sm text-muted-foreground/80">
          &copy; {new Date().getFullYear()} AlexOSCP. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
