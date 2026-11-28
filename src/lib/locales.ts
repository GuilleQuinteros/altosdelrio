// ============================================================
// LISTA DE LOCALES: lo único que hay que editar para actualizar el portal.
//
// - El orden de esta lista es el orden en pantalla.
// - `url`: enlace a la carta de Maxirest. Mientras esté vacío, el local
//   aparece como "Próximamente" y no se puede tocar.
// - `logo`: ruta dentro de /public. Si falta, se muestra el nombre en texto.
//
// Para agregar un local: copiar una línea, cambiar los datos y guardar el
// logo en /public/images.
// ============================================================

export type Local = {
  id: string;
  name: string;
  logo?: string;
  url?: string;
};

export const paseo = {
  name: "Paseo Altos del Río",
  logo: "/images/logo-altos-del-rio.png", // provisorio: reemplazar cuando esté el oficial
};

export const locales: Local[] = [
  { id: "sushi-time", name: "Sushi Time", logo: "/images/logo-sushi-time.svg", url: "" },
  { id: "cerveceria", name: "Cervecería", logo: "/images/logo-cerveceria.svg", url: "" },
  { id: "rose-co", name: "Rose & Co", logo: "/images/logo-rose-co.svg", url: "" },
  {
    id: "francesco-street-food",
    name: "Francesco Street Food",
    logo: "/images/logo-francesco-street.svg",
    url: "https://menu-digital.microfront.prod.maxirest.com/?t=eyJjIjoiNTM1ODQiLCJtYSI6IjUzNTg0IiwibG8iOiIxIiwidiI6IjEifQ",
  },
  { id: "duomo", name: "Duomo Heladería", logo: "", url: "" }, // falta el logo oficial
];
