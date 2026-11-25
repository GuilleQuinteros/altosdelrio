"use client";
import Link from "next/link";
import { useMenuData } from "@/lib/store";
import { BrandMark } from "./BrandMark";
import { ArrowUpRight } from "lucide-react";

export function RestaurantPicker() {
  const { data, ready } = useMenuData();
  const restaurants = data.restaurants.filter(r => r.active).slice(0, 5);

  return (
    <main className="min-h-screen overflow-hidden bg-[#202521] text-[#f4f1ea]">
      <header className="flex items-center justify-between px-5 py-5 md:px-12">
        <span className="text-[10px] tracking-[.28em] text-white/45">GUÍA GASTRONÓMICA</span>
        <span className="text-[10px] tracking-[.2em] text-white/45">FORMOSA CAPITAL · FORMOSA, ARGENTINA</span>
      </header>

      <section className="mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-5 pb-14 pt-5">
        <p className="mb-8 text-center text-xs uppercase tracking-[.35em] text-[#c3bda9]">
          Elegí tu experiencia
        </p>

        <div className="relative w-full max-w-5xl">
          {/* Desktop: cinco locales ocupan posiciones propias alrededor de la marca.
              La celda central queda reservada exclusivamente para Alto del Río. */}
          <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_240px_minmax(0,1fr)] md:grid-rows-[170px_170px_170px] md:items-center md:gap-x-8 md:gap-y-5">
            {ready && restaurants.map((r, i) => {
              const positions = restaurants.length === 3
                ? ["col-start-1 row-start-1", "col-start-3 row-start-1", "col-start-2 row-start-3"]
                : ["col-start-1 row-start-1", "col-start-3 row-start-1", "col-start-1 row-start-2", "col-start-3 row-start-2", "col-start-2 row-start-3"];
              return (
                <Link
                  key={r.id}
                  href={`/menu/local/${r.slug}`}
                  className={`group flex h-full min-h-[150px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[.035] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#c9c1ad]/60 hover:bg-white/[.08] ${positions[i] ?? "col-span-1"}`}
                >
                  <div className="flex h-16 w-full items-center justify-center md:h-20">
                    <img src={r.logo} alt={`Logo ${r.name}`} className="max-h-full max-w-[85%] object-contain" />
                  </div>
                  <span className="mt-3 text-sm font-medium tracking-wide">{r.name}</span>
                  <span className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[.2em] text-white/40 group-hover:text-[#d6cdb9]">
                    Ver menú <ArrowUpRight size={12} />
                  </span>
                </Link>
              );
            })}

            <div className="col-start-2 row-start-2 z-10 flex h-56 w-56 items-center justify-center justify-self-center rounded-full border border-[#c9c1ad]/50 bg-[#292f2a] shadow-[0_0_90px_rgba(205,192,160,.10)]">
              <div className="absolute h-[calc(14rem-24px)] w-[calc(14rem-24px)] rounded-full border border-white/10" />
              <BrandMark />
            </div>
          </div>

          {/* Mobile: marca primero y tarjetas debajo, sin superposiciones. */}
          <div className="flex flex-col items-center md:hidden">
            <div className="mb-7 flex h-40 w-40 items-center justify-center rounded-full border border-[#c9c1ad]/50 bg-[#292f2a] shadow-[0_0_70px_rgba(205,192,160,.10)]">
              <div className="absolute h-32 w-32 rounded-full border border-white/10" />
              <BrandMark />
            </div>
            <div className="grid w-full grid-cols-2 gap-3">
              {ready && restaurants.map((r, index) => (
                <Link key={r.id} href={`/menu/local/${r.slug}`} className={`group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[.035] p-4 text-center transition hover:border-[#c9c1ad]/60 hover:bg-white/[.08] ${restaurants.length === 3 && index === 2 ? "col-span-2 mx-auto w-1/2" : ""}`}>
                  <div className="flex h-16 w-full items-center justify-center">
                    <img src={r.logo} alt={`Logo ${r.name}`} className="max-h-full max-w-[85%] object-contain" />
                  </div>
                  <span className="mt-3 text-sm font-medium tracking-wide">{r.name}</span>
                  <span className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[.2em] text-white/40 group-hover:text-[#d6cdb9]">
                    Ver menú <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {!ready && <p className="mt-8 text-center text-xs text-white/50">Cargando propuestas…</p>}
        </div>

        <p className="mt-10 max-w-md text-center text-xs leading-6 text-white/40">
          Un mismo lugar. Diferentes maneras de disfrutar.
        </p>
      </section>

      <footer className="px-5 pb-7 text-center text-[10px] tracking-[.2em] text-white/30">
        ALTOS DEL RÍO · MENÚS DIGITALES
      </footer>
    </main>
  );
}
