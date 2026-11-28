import { ArrowUpRight } from "lucide-react";
import type { Local } from "@/lib/locales";

const BASE =
  "group flex h-36 w-full flex-col items-center justify-center rounded-2xl border border-line bg-tile px-4 text-center transition duration-300 md:h-44";

export function LocalTile({ local }: { local: Local }) {
  const content = (
    <>
      <div className="flex h-16 w-full items-center justify-center md:h-20">
        {local.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={local.logo} alt={`Logo de ${local.name}`} className="max-h-full max-w-full object-contain" />
        ) : (
          <span className="font-display text-2xl leading-tight">{local.name}</span>
        )}
      </div>
      <span className="mt-4 flex items-center gap-1 text-[11px] font-medium uppercase tracking-[.2em] text-muted group-hover:text-accent">
        {local.url ? (<>Ver menú <ArrowUpRight size={12} aria-hidden /></>) : "Próximamente"}
      </span>
    </>
  );

  if (!local.url) {
    return (
      <div className={BASE} aria-label={`${local.name}: próximamente`}>
        {content}
      </div>
    );
  }
  return (
    <a
      href={local.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver menú de ${local.name} (se abre en una pestaña nueva)`}
      className={`${BASE} hover:-translate-y-1 hover:bg-tile-hover active:scale-[.98]`}
    >
      {content}
    </a>
  );
}
