import { LocalTile } from "@/components/LocalTile";
import { locales, paseo } from "@/lib/locales";

// Esta es la página a la que apunta el QR.
export default function Portal() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-5xl flex-col items-center px-5 pb-10 pt-[max(2.5rem,env(safe-area-inset-top))]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={paseo.logo} alt={paseo.name} className="w-64 max-w-[80%] md:w-80" />

      <p className="mb-8 mt-8 text-center text-xs font-medium uppercase tracking-[.35em] text-accent">
        Elegí tu experiencia
      </p>

      <ul className="flex w-full flex-wrap justify-center gap-4">
        {locales.map((l) => (
          <li key={l.id} className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
            <LocalTile local={l} />
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-xs leading-6 text-muted">
        Un mismo lugar. Diferentes maneras de disfrutar.
      </p>
      <footer className="mt-6 text-center text-[10px] tracking-[.2em] text-muted/80">
        PASEO ALTOS DEL RÍO · MENÚS DIGITALES
      </footer>
    </main>
  );
}
