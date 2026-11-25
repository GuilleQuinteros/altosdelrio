"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";
export default function LoginPage() {
  const [email,setEmail]=useState("admin@altosdelrio.demo");
  const [password,setPassword]=useState("altos2026");
  const [error,setError]=useState("");
  const router=useRouter();
  function submit(e:React.FormEvent) { e.preventDefault(); if(email==="admin@altosdelrio.demo" && password==="altos2026"){sessionStorage.setItem("alto-demo-auth","1");router.push("/admin");}else setError("Credenciales de demostración incorrectas."); }
  return <main className="grid min-h-screen place-items-center bg-[#202521] p-5"><form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-[#f4f1ea] p-8 shadow-2xl"><div className="mb-8 text-center"><LockKeyhole className="mx-auto mb-4" size={28}/><p className="text-[10px] tracking-[.3em] text-muted">ALTOS DEL RÍO</p><h1 className="mt-2 font-serif text-3xl">Administración</h1><p className="mt-2 text-sm text-muted">Ingresá al panel de gestión de menús.</p></div><label className="mb-2 block text-xs font-medium">Correo electrónico</label><input value={email} onChange={e=>setEmail(e.target.value)} className="mb-4 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#78836d]"/><label className="mb-2 block text-xs font-medium">Contraseña</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[#78836d]"/>{error&&<p className="mt-3 text-sm text-red-700">{error}</p>}<button className="mt-6 w-full rounded-xl bg-[#202521] px-4 py-3 text-sm font-medium text-white hover:bg-[#394239]">Ingresar</button><p className="mt-5 text-center text-xs text-muted">Demo: admin@altosdelrio.demo · altos2026</p><Link href="/menu" className="mt-5 block text-center text-xs underline text-muted">Volver al sitio</Link></form></main>;
}
