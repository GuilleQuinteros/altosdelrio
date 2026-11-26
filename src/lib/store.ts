"use client";
import { useEffect, useState } from "react";
import { seedData } from "./seed";
import type { MenuData, Restaurant, Product, Category } from "./types";

// Cada vez que cambies seed.ts, cambiá este valor: los navegadores que tengan
// guardada una versión anterior la descartan y vuelven a cargar el seed nuevo.
// (Se pierden las ediciones hechas desde el panel; es una demo sin base de datos.)
const SEED_VERSION = "2026-11-26-a";
const KEY = "alto-del-rio-menu-data";
const OLD_KEYS = ["alto-del-rio-menu-data-v2"];

export function useMenuData() {
  const [data, setData] = useState<MenuData>(seedData);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      OLD_KEYS.forEach(k => localStorage.removeItem(k));
      const saved = localStorage.getItem(KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as { v?: string; data?: MenuData };
        if (parsed?.v === SEED_VERSION && parsed.data) setData(parsed.data);
        else localStorage.removeItem(KEY);
      }
    } catch { /* si hay datos inválidos, se conserva el demo */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem(KEY, JSON.stringify({ v: SEED_VERSION, data }));
  }, [data, ready]);
  return { data, setData, ready };
}
export function updateRestaurant(data: MenuData, restaurant: Restaurant): MenuData {
  return { ...data, restaurants: data.restaurants.map(r => r.id === restaurant.id ? restaurant : r) };
}
export function money(value: number) {
  return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(value);
}
export function makeId(prefix: string) { return `${prefix}-${Math.random().toString(36).slice(2, 9)}`; }