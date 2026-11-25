"use client";
import { useEffect, useState } from "react";
import { seedData } from "./seed";
import type { MenuData, Restaurant, Product, Category } from "./types";
const KEY = "alto-del-rio-menu-data-v2";
export function useMenuData() {
  const [data, setData] = useState<MenuData>(seedData);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setData(JSON.parse(saved) as MenuData);
    } catch { /* si hay datos inválidos, se conserva el demo */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem(KEY, JSON.stringify(data)); }, [data, ready]);
  return { data, setData, ready };
}
export function updateRestaurant(data: MenuData, restaurant: Restaurant): MenuData {
  return { ...data, restaurants: data.restaurants.map(r => r.id === restaurant.id ? restaurant : r) };
}
export function money(value: number) {
  return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(value);
}
export function makeId(prefix: string) { return `${prefix}-${Math.random().toString(36).slice(2, 9)}`; }
