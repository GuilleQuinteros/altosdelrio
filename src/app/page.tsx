import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin, Utensils, Instagram, Clock3 } from "lucide-react";

// Los logos salen de /public/images (mismos archivos que usa el selector de menús).
const places = [
  {
    number: "01",
    title: "Cocina japonesa",
    subtitle: "Sushi Time",
    description: "Rolls, nigiris y calientes preparados al momento, con el sello de la cocina japonesa de autor.",
    logo: "/images/logo-sushi-time.svg",
    slug: "sushi-time",
    tag: "Cocina japonesa"
  },
  {
    number: "02",
    title: "Cerveza tirada",
    subtitle: "Cervecería",
    description: "Cervezas tiradas, picadas y platos para compartir en la mesa grande.",
    logo: "/images/logo-cerveceria.svg",
    slug: "cerveceria",
    tag: "Cerveza & picadas"
  },
  {
    number: "03",
    title: "Cafetería · Crepería",
    subtitle: "Rose & Co",
    description: "Café de especialidad, crepes dulces y salados, y jugos naturales para cualquier momento del día.",
    logo: "/images/logo-rose-co.svg",
    slug: "rose-and-co",
    tag: "Café & crepes"
  },
  {
    number: "04",
    title: "Francesco",
    subtitle: "Street Food",
    description: "Una propuesta informal, sabrosa y urbana para hacer una pausa o seguir disfrutando el encuentro.",
    logo: "/images/logo-francesco-street.svg",
    slug: "francesco-street-food",
    tag: "Street food"
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <Link href="#" className="wordmark">ALTOS <span>DEL RÍO</span></Link>
        <div className="nav-links">
          <a href="#experiencia">La experiencia</a>
          <a href="#propuestas">Propuestas</a>
          <a href="#visitanos">Encontranos</a>
        </div>
        <a className="nav-cta" href="/menu">Explorar menús <ArrowRight size={15}/></a>
      </nav>

      <section className="hero">
        <div className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow"><span/> FORMOSA CAPITAL · FORMOSA, ARGENTINA</p>
          <h1>Un lugar.<br/><em>Muchas</em> maneras<br/>de disfrutar.</h1>
          <p className="hero-copy">Un punto de encuentro donde la gastronomía, los buenos momentos y las nuevas experiencias se encuentran.</p>
          <div className="hero-actions">
            <a className="button button-light" href="/menu">Descubrir los menús <ArrowRight size={17}/></a>
            <a className="text-link" href="#experiencia">Conocé Altos del Río <ArrowDown size={15}/></a>
          </div>
        </div>
        <div className="hero-note">UNA EXPERIENCIA PARA COMPARTIR <span>—</span> 01 / 05</div>
      </section>

      <section id="experiencia" className="intro shell section-pad">
        <div className="intro-label"><span>01</span> EL CONCEPTO</div>
        <div>
          <h2>Más que un destino,<br/><em>un punto de encuentro.</em></h2>
          <p>Altos del Río reúne distintas propuestas gastronómicas en un mismo espacio. Un lugar para elegir tu sabor, encontrarte con los tuyos y dejar que cada visita se convierta en un buen recuerdo.</p>
        </div>
      </section>

      <section id="propuestas" className="places-section section-pad">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow dark">02 / NUESTRAS PROPUESTAS</p><h2>Elegí tu próxima<br/><em>experiencia.</em></h2></div>
            <a className="under-link" href="/menu">Ver todos los menús <ArrowRight size={16}/></a>
          </div>
          <div className="place-grid">
            {places.map((place) => (
              <article className="place-card" key={place.number}>
                <div className="place-image logo-panel">
                  <span className="place-number">{place.number}</span>
                  <img src={place.logo} alt={`Logo ${place.subtitle}`} />
                  <span className="place-tag">{place.tag}</span>
                </div>
                <div className="place-info">
                  <p>{place.title}</p>
                  <h3>{place.subtitle}</h3>
                  <p className="place-description">{place.description}</p>
                  <a href={`/menu/local/${place.slug}`} className="card-link">Explorar menú <ArrowRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
          <p className="illustrative">Las descripciones son ilustrativas y se actualizarán con el material oficial de cada local.</p>
        </div>
      </section>

      <section className="quote-section">
        <div className="shell quote-inner">
          <span className="quote-mark">“</span>
          <p>Los mejores momentos<br/>siempre encuentran <em>su lugar.</em></p>
          <span className="quote-caption">ALTOS DEL RÍO · FORMOSA</span>
        </div>
      </section>

      <section id="visitanos" className="visit shell section-pad">
        <div>
          <p className="eyebrow dark">03 / TE ESPERAMOS</p>
          <h2>Tu próximo encuentro<br/><em>empieza acá.</em></h2>
          <p className="visit-copy">Vení a descubrir las propuestas gastronómicas de Altos del Río. Elegí dónde querés empezar.</p>
          <a className="button button-dark" href="/menu">Elegir un local <ArrowRight size={17}/></a>
        </div>
        <div className="visit-card">
          <img src="/images/logo-altos-del-rio.png" alt="Paseo Altos del Río" className="visit-logo" />
          <p className="visit-kicker">ENCONTRANOS</p>
          <h3>Altos del Río</h3>
          <p>Formosa Capital · Formosa, Argentina</p>
          <div className="visit-line"/>
          <p className="visit-small"><Clock3 size={15}/> Horarios y ubicación próximamente</p>
          <p className="visit-small"><Instagram size={15}/> Redes sociales próximamente</p>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <Link href="#" className="wordmark">ALTOS <span>DEL RÍO</span></Link>
          <span>UN MISMO LUGAR. DIFERENTES MANERAS DE DISFRUTAR.</span>
          <a href="/menu">MENÚS DIGITALES <ArrowRight size={13}/></a>
        </div>
      </footer>

      <a className="floating-menu" href="/menu" aria-label="Abrir menús digitales"><Utensils size={19}/><span>Ver menús</span></a>
    </main>
  );
}