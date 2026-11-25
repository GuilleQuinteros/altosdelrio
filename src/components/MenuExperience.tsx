"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useMenuData, money } from "@/lib/store";
import { ArrowLeft, ChevronRight, Clock3, Leaf, Search } from "lucide-react";
export function MenuExperience({ slug }: { slug: string }) {
  const { data, ready } = useMenuData();
  const restaurant = data.restaurants.find(r => r.slug === slug && r.active);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const categories = useMemo(() => restaurant?.categories.filter(c => c.active).sort((a,b) => a.order-b.order) ?? [], [restaurant]);
  const products = useMemo(() => restaurant?.products.filter(p => p.active && (!selected || p.categoryId === selected) && (p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))) ?? [], [restaurant, selected, search]);
  if (!ready) return <div className="grid min-h-screen place-items-center">Preparando menú…</div>;
  if (!restaurant) return <main className="grid min-h-screen place-items-center p-6 text-center"><div><h1 className="font-serif text-3xl">Menú no disponible</h1><p className="mt-2 text-sm text-muted">Este establecimiento no está publicado.</p><Link className="mt-6 inline-block underline" href="/menu">Volver a locales</Link></div></main>;
  return <main className="min-h-screen bg-[#f4f1ea]">
    <section className="relative flex min-h-[260px] items-end overflow-hidden bg-[#282d28] px-5 pb-7 pt-16 text-white md:min-h-[340px] md:px-12" style={{ backgroundImage: `linear-gradient(90deg,rgba(20,24,21,.82),rgba(20,24,21,.22)),url(${restaurant.background})`, backgroundPosition: "center", backgroundSize: "cover" }}>
      <Link href="/menu" className="absolute left-5 top-5 flex items-center gap-2 text-xs text-white/80 hover:text-white md:left-12"><ArrowLeft size={15}/> Todos los locales</Link>
      <div className="relative z-10 w-full max-w-6xl">
        <img src={restaurant.logo} alt={restaurant.name} className="mb-5 h-14 max-w-48 object-contain object-left md:h-20"/>
        <p className="text-xs uppercase tracking-[.25em] text-white/65">Carta digital · demostración</p>
        <h1 className="mt-2 max-w-2xl font-serif text-3xl md:text-5xl">{restaurant.tagline}</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">{restaurant.description}</p>
      </div>
    </section>
    <div className="sticky top-0 z-30 border-b border-black/5 bg-[#f4f1ea]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 md:px-8">
        <button onClick={() => setSelected("")} className={`shrink-0 rounded-full px-4 py-2 text-xs transition ${!selected ? "bg-[#252b26] text-white" : "bg-white text-[#555b54]"}`}>Todo</button>
        {categories.map(c => <button key={c.id} onClick={() => setSelected(c.id)} className={`shrink-0 rounded-full px-4 py-2 text-xs transition ${selected===c.id ? "bg-[#252b26] text-white" : "bg-white text-[#555b54] hover:bg-[#e7e3da]"}`}>{c.name}</button>)}
      </div>
    </div>
    <section className="mx-auto max-w-6xl px-4 py-7 md:px-8 md:py-12">
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-[10px] uppercase tracking-[.3em] text-[#858a7e]">Nuestra propuesta</p><h2 className="mt-2 font-serif text-3xl md:text-4xl">{selected ? categories.find(c=>c.id===selected)?.name : "Explorá la carta"}</h2></div>
        <label className="flex max-w-sm items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3"><Search size={16} className="text-muted"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Buscar en el menú…" className="w-full bg-transparent text-sm outline-none"/></label>
      </div>
      {!selected ? categories.map(cat => {
        const list = products.filter(p=>p.categoryId===cat.id);
        if (!list.length) return null;
        return <div key={cat.id} id={cat.id} className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-3"><h3 className="font-serif text-2xl">{cat.name}</h3><span className="text-xs text-muted">{list.length} opciones</span></div>
          <div className="grid gap-4 md:grid-cols-2">
            {list.map(p=><ProductCard key={p.id} product={p}/>)}
          </div>
        </div>;
      }) : <div className="grid gap-4 md:grid-cols-2">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
      {products.length===0 && <p className="rounded-2xl border border-dashed border-black/15 p-10 text-center text-sm text-muted">No encontramos productos con esa búsqueda.</p>}
    </section>
    <footer className="border-t border-black/10 px-5 py-8 text-center"><p className="font-serif text-lg">ALTOS DEL RÍO</p><p className="mt-1 text-[10px] tracking-[.2em] text-muted">{restaurant.name} · MENÚ DIGITAL</p><p className="mt-3 text-[10px] text-muted">Productos y precios ilustrativos, sujetos a confirmación.</p></footer>
  </main>;
}
function ProductCard({ product }: { product: import("@/lib/types").Product }) {
  return <article className="flex gap-4 rounded-2xl border border-black/[.06] bg-white p-3 shadow-[0_5px_22px_rgba(35,40,34,.035)] transition hover:shadow-soft">
    <img src={product.image || "/images/product-placeholder.svg"} alt={product.name} className="h-28 w-28 shrink-0 rounded-xl bg-[#e7e3da] object-cover sm:h-32 sm:w-32"/>
    <div className="flex min-w-0 flex-1 flex-col py-1">
      <div className="flex flex-wrap gap-1">{product.featured && <span className="rounded-full bg-[#e9e6dc] px-2 py-1 text-[9px] uppercase tracking-wider text-[#6c715f]">Destacado</span>}{product.tags?.map(t=><span key={t} className="rounded-full bg-[#f4f1ea] px-2 py-1 text-[9px] text-muted">{t}</span>)}</div>
      <h4 className="mt-1 font-medium leading-snug">{product.name}</h4>
      <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">{product.description}</p>
      <p className="mt-auto pt-2 text-sm font-semibold">{product.price > 0 ? money(product.price) : "Consultar"}</p>
    </div>
  </article>;
}
