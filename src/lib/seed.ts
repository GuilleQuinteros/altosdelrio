import type { MenuData } from "./types";

// Carta de demostración: nombres, descripciones y precios ilustrativos.
// El contenido definitivo deberá validarse con cada establecimiento.
const PH = "/images/product-placeholder.svg"; // reemplazar por fotos reales desde el panel
const BG = "/images/complejo.webp"; // fondo provisional hasta tener uno por local
export const FRANCESCO_MENU_URL = "https://menu-digital.microfront.prod.maxirest.com/?t=eyJjIjoiNTM1ODQiLCJtYSI6IjUzNTg0IiwibG8iOiIxIiwidiI6IjEifQ";

export const seedData: MenuData = {
  brand: "ALTOS DEL RÍO",
  restaurants: [
    {
      id: "r1", slug: "sushi-time", name: "Sushi Time",
      tagline: "El tiempo justo para disfrutar",
      logo: "/images/logo-sushi-time.svg", background: BG, accent: "#C9A24B",
      description: "Cocina japonesa de autor: rolls, nigiris y calientes preparados al momento.",
      active: true,
      categories: [
        { id: "sushi-rolls", name: "Rolls", description: "Piezas de 8 unidades.", order: 1, active: true },
        { id: "sushi-nigiri", name: "Nigiri y sashimi", order: 2, active: true },
        { id: "sushi-calientes", name: "Calientes", order: 3, active: true },
        { id: "sushi-bebidas", name: "Bebidas", order: 4, active: true }
      ],
      products: [
        { id: "su1", categoryId: "sushi-rolls", name: "Roll de salmón", description: "Salmón, palta y queso crema, envuelto en sésamo.", price: 14500, image: PH, active: true, featured: true, tags: ["Recomendado"] },
        { id: "su2", categoryId: "sushi-rolls", name: "Roll vegetal", description: "Pepino, zanahoria, palta y ciboulette.", price: 11800, image: PH, active: true, tags: ["Vegetariano"] },
        { id: "su3", categoryId: "sushi-rolls", name: "Roll crocante", description: "Langostino empanizado, queso crema y salsa teriyaki.", price: 15900, image: PH, active: true },
        { id: "su4", categoryId: "sushi-nigiri", name: "Nigiri de salmón (x4)", description: "Arroz de sushi y salmón fresco.", price: 12900, image: PH, active: true },
        { id: "su5", categoryId: "sushi-nigiri", name: "Sashimi mixto (x9)", description: "Selección del día.", price: 17900, image: PH, active: true, featured: true },
        { id: "su6", categoryId: "sushi-calientes", name: "Gyozas (x6)", description: "Rellenas de cerdo y verdeo, con salsa ponzu.", price: 9900, image: PH, active: true },
        { id: "su7", categoryId: "sushi-calientes", name: "Yakisoba", description: "Fideos salteados con verduras y salsa de soja.", price: 13800, image: PH, active: true },
        { id: "su8", categoryId: "sushi-bebidas", name: "Té helado de jengibre", description: "Jengibre y limón.", price: 3900, image: PH, active: true },
        { id: "su9", categoryId: "sushi-bebidas", name: "Agua mineral", description: "Con o sin gas · 500 ml.", price: 2500, image: PH, active: true }
      ]
    },
    {
      id: "r2", slug: "cerveceria", name: "Cervecería",
      tagline: "Cerveza bien tirada, buena compañía",
      logo: "/images/logo-cerveceria.svg", background: BG, accent: "#C98F2B",
      description: "Cervezas tiradas, picadas y platos para compartir en la mesa grande.",
      active: true,
      categories: [
        { id: "cerv-cervezas", name: "Cervezas", order: 1, active: true },
        { id: "cerv-picar", name: "Para compartir", order: 2, active: true },
        { id: "cerv-principales", name: "Platos", order: 3, active: true },
        { id: "cerv-sin", name: "Sin alcohol", order: 4, active: true }
      ],
      products: [
        { id: "ce1", categoryId: "cerv-cervezas", name: "Pinta rubia", description: "Tirada, 500 ml.", price: 5500, image: PH, active: true, featured: true },
        { id: "ce2", categoryId: "cerv-cervezas", name: "Pinta roja", description: "Tirada, 500 ml.", price: 5800, image: PH, active: true },
        { id: "ce3", categoryId: "cerv-cervezas", name: "Jarra para compartir", description: "1,5 litros a elección.", price: 14500, image: PH, active: true },
        { id: "ce4", categoryId: "cerv-picar", name: "Tabla de fiambres y quesos", description: "Selección para dos o tres personas.", price: 18900, image: PH, active: true, featured: true, tags: ["Para compartir"] },
        { id: "ce5", categoryId: "cerv-picar", name: "Papas con cheddar y panceta", description: "Papas fritas, cheddar fundido y panceta crocante.", price: 8900, image: PH, active: true },
        { id: "ce6", categoryId: "cerv-principales", name: "Hamburguesa de la casa", description: "Carne, cheddar, cebolla caramelizada y papas.", price: 13900, image: PH, active: true },
        { id: "ce7", categoryId: "cerv-sin", name: "Gaseosa", description: "Línea de 500 ml.", price: 3800, image: PH, active: true },
        { id: "ce8", categoryId: "cerv-sin", name: "Limonada", description: "Con menta y jengibre.", price: 3900, image: PH, active: true }
      ]
    },
    {
      id: "r3", slug: "rose-and-co", name: "Rose & Co",
      tagline: "Cafetería · Crepería · Jugos naturales",
      logo: "/images/logo-rose-co.svg", background: BG, accent: "#B5546A",
      description: "Café de especialidad, crepes dulces y salados, y jugos naturales todo el día.",
      active: true,
      categories: [
        { id: "rose-cafe", name: "Cafetería", order: 1, active: true },
        { id: "rose-crepes-dulces", name: "Crepes dulces", order: 2, active: true },
        { id: "rose-crepes-salados", name: "Crepes salados", order: 3, active: true },
        { id: "rose-jugos", name: "Jugos naturales", order: 4, active: true }
      ],
      products: [
        { id: "ro1", categoryId: "rose-cafe", name: "Café con leche", description: "Espresso con leche texturizada.", price: 4200, image: PH, active: true },
        { id: "ro2", categoryId: "rose-cafe", name: "Cappuccino", description: "Con cacao o canela.", price: 4600, image: PH, active: true },
        { id: "ro3", categoryId: "rose-crepes-dulces", name: "Crepe de dulce de leche", description: "Con banana y crema chantilly.", price: 8200, image: PH, active: true, featured: true, tags: ["Recomendado"] },
        { id: "ro4", categoryId: "rose-crepes-dulces", name: "Crepe de frutos rojos", description: "Frutos rojos, helado de crema y salsa de frutilla.", price: 9400, image: PH, active: true },
        { id: "ro5", categoryId: "rose-crepes-salados", name: "Crepe de jamón y queso", description: "Jamón cocido, mozzarella y orégano.", price: 8900, image: PH, active: true },
        { id: "ro6", categoryId: "rose-crepes-salados", name: "Crepe de pollo y champiñones", description: "Salsa blanca y queso gratinado.", price: 9800, image: PH, active: true },
        { id: "ro7", categoryId: "rose-jugos", name: "Jugo de naranja exprimido", description: "Vaso de 400 ml.", price: 4500, image: PH, active: true, featured: true },
        { id: "ro8", categoryId: "rose-jugos", name: "Licuado de frutilla", description: "Con agua o con leche.", price: 4900, image: PH, active: true }
      ]
    },
    {
      id: "r4", slug: "francesco-street-food", externalUrl: FRANCESCO_MENU_URL, name: "Francesco · Street Food",
      tagline: "Mucho sabor. Cero formalidades.",
      logo: "/images/logo-francesco-street.svg", background: "/images/fondo-francesco-street.jpg", accent: "#A66B45",
      description: "Una propuesta urbana para comer rico, compartir y seguir disfrutando.",
      active: true,
      categories: [
        { id: "street-sandwiches", name: "Sándwiches", order: 1, active: true },
        { id: "street-burgers", name: "Burgers", order: 2, active: true },
        { id: "street-sides", name: "Para acompañar", order: 3, active: true },
        { id: "street-drinks", name: "Bebidas", order: 4, active: true }
      ],
      products: [
        { id: "st1", categoryId: "street-sandwiches", name: "Focaccia de mortadela", description: "Focaccia tostada, mortadela, stracciatella y pesto.", price: 11900, image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=700&q=85", active: true, featured: true, tags: ["Recomendado"] },
        { id: "st2", categoryId: "street-sandwiches", name: "Panino de pollo crispy", description: "Pollo crocante, hojas frescas, tomate y mayo de hierbas.", price: 10800, image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700&q=85", active: true },
        { id: "st3", categoryId: "street-burgers", name: "Francesco smash", description: "Doble medallón smash, cheddar, cebolla y salsa especial.", price: 13900, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=85", active: true, featured: true },
        { id: "st4", categoryId: "street-burgers", name: "Burger BBQ", description: "Carne, cheddar, panceta crocante y barbacoa.", price: 14500, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=700&q=85", active: true },
        { id: "st5", categoryId: "street-sides", name: "Papas con parmesano", description: "Papas doradas, parmesano rallado y alioli.", price: 6200, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=85", active: true },
        { id: "st6", categoryId: "street-sides", name: "Bastones de mozzarella", description: "Crocantes por fuera, fundentes por dentro.", price: 6900, image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=700&q=85", active: true },
        { id: "st7", categoryId: "street-drinks", name: "Limonada de la casa", description: "Limón, menta y jengibre.", price: 3900, image: "https://images.unsplash.com/photo-1513558161293-caea3ff5d4e8?w=700&q=85", active: true },
        { id: "st8", categoryId: "street-drinks", name: "Gaseosa", description: "Lata individual.", price: 2800, image: PH, active: true }
      ]
    },
    {
      id: "r5", slug: "local-05", name: "Próximamente", tagline: "Nueva propuesta en camino",
      logo: "/images/logo-local-05.svg", background: "", accent: "#A69A83",
      description: "Este espacio se habilitará cuando se confirme el quinto establecimiento.",
      active: false, categories: [], products: []
    }
  ]
};