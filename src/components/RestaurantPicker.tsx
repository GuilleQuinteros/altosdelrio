"use client";
import Link from "next/link";
import { useMenuData } from "@/lib/store";
import { ArrowUpRight } from "lucide-react";

// Logos sin tarjeta de fondo: la página es clara (crema) para que se vean los
// logos negros, azul y dorado con sus colores originales.
const CARD =
  "group flex flex-col items-center justify-center rounded-2xl border border-[#20231f]/10 text-center text-[#20231f] transition duration-300 hover:-translate-y-1 hover:border-[#3c5219]/60 hover:bg-white/50";

export function RestaurantPicker() {
  const { data, ready } = useMenuData();
  const restaurants = data.restaurants.filter(r => r.active).slice(0, 5);

  const card = (r: (typeof restaurants)[number], className: string) => {
  const cls = `${CARD} ${className}`;
  const inner = (
    <>
      <div className="flex h-16 w-full items-center justify-center md:h-20">
        <img src={r.logo} alt={`Logo ${r.name}`} className="max-h-full max-w-full object-contain" />
      </div>
      <span className="mt-4 flex items-center gap-1 text-[11px] uppercase tracking-[.2em] text-[#20231f]/55 group-hover:text-[#3c5219]">
        Ver menú <ArrowUpRight size={12} />
      </span>
    </>
  );
  return r.externalUrl ? (
    <a key={r.id} href={r.externalUrl} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`Ver menú de ${r.name} (se abre en una pestaña nueva)`}>
      {inner}
    </a>
  ) : (
    <Link key={r.id} href={`/menu/local/${r.slug}`} className={cls} aria-label={`Ver menú de ${r.name}`}>
      {inner}
    </Link>
  );
};

  return (
    <main className="min-h-screen overflow-hidden bg-[#f2f0e9] text-[#20231f]">
      <header className="flex items-center justify-between gap-4 px-5 py-5 md:px-12">
        <span className="text-[10px] tracking-[.28em] text-[#20231f]/55">GUÍA GASTRONÓMICA</span>
        <span className="text-[10px] tracking-[.2em] text-[#20231f]/55">
          <span className="md:hidden">FORMOSA</span>
          <span className="hidden md:inline">FORMOSA CAPITAL · FORMOSA, ARGENTINA</span>
        </span>
      </header>

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-5 pb-14 pt-5">
        <p className="mb-8 text-center text-xs uppercase tracking-[.35em] text-[#3c5219]">Elegí tu experiencia</p>

        <div className="relative w-full max-w-5xl">
          {/* Desktop: los locales se reparten alrededor de la marca central. */}
          <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_300px_minmax(0,1fr)] md:grid-rows-[170px_170px_170px] md:items-center md:gap-x-8 md:gap-y-5">
            {ready &&
              restaurants.map((r, i) => {
                const positions =
                  restaurants.length === 3
                    ? ["col-start-1 row-start-1", "col-start-3 row-start-1", "col-start-2 row-start-3"]
                    : ["col-start-1 row-start-1", "col-start-3 row-start-1", "col-start-1 row-start-2", "col-start-3 row-start-2", "col-start-2 row-start-3"];
                return card(r, `h-full min-h-[150px] p-5 ${positions[i] ?? "col-span-1"}`);
              })}

            {/* La marca central mantiene su círculo oscuro como punto focal */}
            <div className="col-start-2 row-start-2 z-10 flex items-center justify-center">
              <img src="/images/logo-altos-del-rio.png" alt="Paseo Altos del Río" className="w-[300px] max-w-full" />
            </div>
          </div>

          {/* Mobile: marca primero y logos debajo. */}
          <div className="flex flex-col items-center md:hidden">
            <img src="/images/logo-altos-del-rio.png" alt="Paseo Altos del Río" className="mb-8 w-72 max-w-[85%]" />
            <div className="grid w-full grid-cols-2 gap-3">
              {ready &&
                restaurants.map((r, index) =>
                  card(r, `min-h-36 p-4 ${restaurants.length % 2 === 1 && index === restaurants.length - 1 ? "col-span-2 mx-auto w-1/2" : ""}`)
                )}
            </div>
          </div>
          {!ready && <p className="mt-8 text-center text-xs text-[#20231f]/55">Cargando propuestas…</p>}
        </div>

        <p className="mt-10 max-w-md text-center text-xs leading-6 text-[#20231f]/55">Un mismo lugar. Diferentes maneras de disfrutar.</p>
      </section>

      <footer className="px-5 pb-7 text-center text-[10px] tracking-[.2em] text-[#20231f]/40">ALTOS DEL RÍO · MENÚS DIGITALES</footer>
    </main>
  );
}