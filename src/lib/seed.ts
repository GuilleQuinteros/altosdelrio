import type { MenuData } from "./types";

// Carta de demostración: nombres, descripciones y precios ilustrativos.
// El contenido definitivo deberá validarse con cada establecimiento.
export const seedData: MenuData = {
  brand: "ALTOS DEL RÍO",
  restaurants: [
    {
      id: "r1", slug: "francesco-pizza-napoletana", name: "Francesco · Pizza Napoletana",
      tagline: "Tradición napolitana, hecha para compartir",
      logo: "/images/logo-francesco-pizza.svg", background: "/images/fondo-francesco-pizza.jpg", accent: "#A66B45",
      description: "Pizzas de inspiración napolitana, masa de larga fermentación e ingredientes seleccionados.",
      active: true,
      categories: [
        { id: "pizza-clasicas", name: "Pizze classiche", description: "Los sabores esenciales de Nápoles.", order: 1, active: true },
        { id: "pizza-especiales", name: "Pizze especiales", description: "Combinaciones de la casa.", order: 2, active: true },
        { id: "pizza-bebidas", name: "Bebidas", order: 3, active: true }
      ],
      products: [
        { id: "pz1", categoryId: "pizza-clasicas", name: "Margherita", description: "Pomodoro, mozzarella fior di latte, albahaca fresca y aceite de oliva extra virgen.", price: 14500, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&q=85", active: true, featured: true, tags: ["Clásica napolitana"] },
        { id: "pz2", categoryId: "pizza-clasicas", name: "Marinara", description: "Tomate, ajo, orégano y aceite de oliva. Simple, intensa y tradicional.", price: 13200, image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=700&q=85", active: true },
        { id: "pz3", categoryId: "pizza-clasicas", name: "Diavola", description: "Pomodoro, mozzarella y salame picante italiano.", price: 16900, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=700&q=85", active: true },
        { id: "pz4", categoryId: "pizza-especiales", name: "Mortadella e pistacchio", description: "Mozzarella, mortadela, crema de pistacho y hojas frescas.", price: 18900, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&q=85", active: true, featured: true, tags: ["Especial de la casa"] },
        { id: "pz5", categoryId: "pizza-especiales", name: "Quattro formaggi", description: "Selección de cuatro quesos, mozzarella, provolone, azul y parmesano.", price: 17800, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=85", active: true },
        { id: "pz6", categoryId: "pizza-bebidas", name: "Limonata", description: "Limonada fresca con menta y cítricos.", price: 3900, image: "https://images.unsplash.com/photo-1513558161293-caea3ff5d4e8?w=700&q=85", active: true },
        { id: "pz7", categoryId: "pizza-bebidas", name: "Agua mineral", description: "Con o sin gas · 500 ml.", price: 2500, image: "/images/product-placeholder.svg", active: true }
      ]
    },
    {
      id: "r2", slug: "francesco-casa-de-pastas", name: "Francesco · Casa de Pastas",
      tagline: "Pastas artesanales, el sabor de lo hecho en casa",
      logo: "/images/logo-francesco-pastas.svg", background: "/images/fondo-francesco-pastas.jpg", accent: "#A66B45",
      description: "Pastas frescas, salsas tradicionales y recetas para disfrutar sin apuro.",
      active: true,
      categories: [
        { id: "pastas-rellenas", name: "Pastas rellenas", order: 1, active: true },
        { id: "pastas-clasicas", name: "Pastas clásicas", order: 2, active: true },
        { id: "salsas", name: "Salsas", order: 3, active: true },
        { id: "pastas-postres", name: "Postres", order: 4, active: true }
      ],
      products: [
        { id: "pa1", categoryId: "pastas-rellenas", name: "Sorrentinos de jamón y mozzarella", description: "Pasta fresca rellena, acompañada con salsa a elección.", price: 14500, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700&q=85", active: true, featured: true, tags: ["Artesanales"] },
        { id: "pa2", categoryId: "pastas-rellenas", name: "Ravioles de ricota y espinaca", description: "Relleno suave de ricota y espinaca fresca, con salsa a elección.", price: 13900, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700&q=85", active: true },
        { id: "pa3", categoryId: "pastas-clasicas", name: "Tagliatelle al huevo", description: "Pasta fresca al huevo, terminada con parmesano.", price: 11900, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=85", active: true },
        { id: "pa4", categoryId: "pastas-clasicas", name: "Ñoquis de papa", description: "Ñoquis caseros de papa, tiernos y livianos.", price: 12500, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700&q=85", active: true, featured: true },
        { id: "pa5", categoryId: "salsas", name: "Salsa fileto", description: "Tomate, ajo, oliva y albahaca.", price: 0, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=85", active: true, tags: ["Incluida / consultar"] },
        { id: "pa6", categoryId: "salsas", name: "Salsa cuatro quesos", description: "Crema y selección de quesos fundidos.", price: 2500, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=85", active: true },
        { id: "pa7", categoryId: "pastas-postres", name: "Tiramisú", description: "Clásico italiano con café, mascarpone y cacao.", price: 5200, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700&q=85", active: true }
      ]
    },
    {
      id: "r3", slug: "francesco-street-food", name: "Francesco · Street Food",
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
        { id: "st8", categoryId: "street-drinks", name: "Gaseosa", description: "Lata individual.", price: 2800, image: "/images/product-placeholder.svg", active: true }
      ]
    },
    {
      id: "r4", slug: "local-04", name: "Próximamente", tagline: "Nueva propuesta en camino",
      logo: "/images/logo-local-04.svg", background: "", accent: "#A69A83",
      description: "Este espacio se habilitará cuando se confirme el quinto establecimiento.",
      active: false, categories: [], products: []
    },
    {
      id: "r5", slug: "local-05", name: "Próximamente", tagline: "Nueva propuesta en camino",
      logo: "/images/logo-local-05.svg", background: "", accent: "#A69A83",
      description: "Este espacio se habilitará cuando se confirme el quinto establecimiento.",
      active: false, categories: [], products: []
    }
  ]
};
