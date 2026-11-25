import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin, Utensils, Instagram, Clock3 } from "lucide-react";


const places = [
  {
    number: "01",
    title: "Francesco",
    subtitle: "Pizza Napoletana",
    description: "El ritual de la pizza: masa de larga fermentación, horno intenso y sabores de inspiración napolitana.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1100&q=85",
    tag: "Pizza & horno"
  },
  {
    number: "02",
    title: "Francesco",
    subtitle: "Casa de Pastas",
    description: "Pastas para disfrutar sin apuro, recetas tradicionales y el placer de compartir alrededor de la mesa.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1100&q=85",
    tag: "Pastas artesanales"
  },
  {
    number: "03",
    title: "Francesco",
    subtitle: "Street Food",
    description: "Una propuesta informal, sabrosa y urbana para hacer una pausa o seguir disfrutando el encuentro.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1100&q=85",
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
                <div className="place-image" style={{ backgroundImage: `url("${place.image}")` }}>
                  <span className="place-number">{place.number}</span>
                  <span className="place-tag">{place.tag}</span>
                </div>
                <div className="place-info">
                  <p>{place.title}</p>
                  <h3>{place.subtitle}</h3>
                  <p className="place-description">{place.description}</p>
                  <a href="/menu" className="card-link">Explorar menú <ArrowRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
          <p className="illustrative">Las descripciones e imágenes son ilustrativas y se actualizarán con el material oficial de cada local.</p>
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
          <div className="visit-icon"><MapPin size={21}/></div>
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
