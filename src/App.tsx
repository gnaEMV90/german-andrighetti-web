const whatsappUrl = 'https://wa.me/5493532678034?text=Hola%20German%2C%20quiero%20consultarte%20por%20un%20desarrollo%20a%20medida.';
const emailUrl = 'mailto:german.andrighetti@gmail.com';
const phoneUrl = 'tel:+5493532678034';

const services = [
  {
    tag: 'Web apps',
    title: 'Sistemas web a medida',
    text: 'Aplicaciones simples y mantenibles para ordenar procesos internos, ventas, stock, clientes o circuitos propios del negocio.',
  },
  {
    tag: 'Automatización',
    title: 'Automatización de procesos',
    text: 'Menos tareas repetidas, menos planillas eternas y más tiempo para trabajar en lo que realmente mueve la aguja.',
  },
  {
    tag: 'Integraciones',
    title: 'Integraciones entre sistemas',
    text: 'Conexión entre herramientas, archivos, APIs y plataformas para que la información viaje sin empujones humanos.',
  },
  {
    tag: 'Gestión',
    title: 'Paneles administrativos',
    text: 'Pantallas claras para cargar datos, controlar estados, consultar reportes y tomar mejores decisiones.',
  },
  {
    tag: 'Operación',
    title: 'Herramientas internas',
    text: 'Soluciones concretas para negocios que necesitan resolver una necesidad puntual sin comprar un sistema gigante.',
  },
  {
    tag: 'MVP',
    title: 'Desarrollo de MVPs',
    text: 'Primeras versiones funcionales para validar ideas rápido, gastar poco y mejorar con uso real.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Inicio">
          <span className="brand-mark">GA</span>
          <span>
            <strong>German Andrighetti</strong>
            <small>Desarrollos a medida</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Consultar
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            <span className="loop loop-a" />
            <span className="loop loop-b" />
            <span className="grid" />
          </div>

          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Software simple para negocios reales</p>
              <h1>Sistemas a medida para ordenar, automatizar y hacer crecer tu negocio.</h1>
              <p className="hero-text">
                Diseño y desarrollo herramientas web claras, simples y mantenibles para resolver necesidades reales: procesos internos, integraciones, paneles de gestión y MVPs.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Hablar por WhatsApp
                </a>
                <a className="button button-secondary" href="#servicios">
                  Ver servicios
                </a>
              </div>
            </div>

            <aside className="hero-card" aria-label="Resumen de marca">
              <div className="card-top">
                <span className="code-symbol">{'{ / }'}</span>
                <span>Sistemas a medida</span>
              </div>
              <h2>German Andrighetti</h2>
              <p>Desarrollo soluciones concretas para negocios que necesitan ahorrar tiempo, ordenar procesos y trabajar mejor.</p>
              <div className="chips">
                <span>Sistemas web</span>
                <span>Automatizaciones</span>
                <span>Integraciones</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="section-title">
              <p className="eyebrow">Servicios</p>
              <h2>Soluciones simples, útiles y pensadas para el uso real.</h2>
              <p>La idea no es sumar tecnología por sumar. La idea es resolver un problema concreto y que la herramienta sea fácil de usar todos los días.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span>{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="sobre-mi">
          <div className="container about-layout">
            <div>
              <div className="section-title compact">
                <p className="eyebrow">Sobre mí</p>
                <h2>Primero el problema, después el código.</h2>
              </div>
              <p>
                Soy programador semi-senior y emprendedor. Me enfoco en crear soluciones claras para necesidades reales de negocios, sin sobredimensionar el proyecto ni esconder lo simple detrás de palabras raras.
              </p>
              <p>
                Muchas veces no hace falta un sistema gigante: hace falta una herramienta bien pensada, que ordene el trabajo y evite perder tiempo en tareas repetidas.
              </p>
            </div>

            <div className="process-card">
              <span>Forma de trabajo</span>
              <ol>
                <li>Entender el problema.</li>
                <li>Proponer una solución simple.</li>
                <li>Desarrollar una primera versión funcional.</li>
                <li>Ajustar con uso real.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="container contact-layout">
            <div className="section-title compact">
              <p className="eyebrow">Contacto</p>
              <h2>Contame qué necesitás resolver.</h2>
              <p>Con una explicación simple del problema alcanza para empezar. Después vemos si conviene automatizar, integrar o construir algo a medida.</p>
            </div>

            <div className="contact-panel">
              <a className="contact-card primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span>WhatsApp</span>
                <strong>3532-678034</strong>
                <small>Enviar consulta</small>
              </a>
              <a className="contact-card" href={emailUrl}>
                <span>Email</span>
                <strong>german.andrighetti@gmail.com</strong>
                <small>Escribir correo</small>
              </a>
              <a className="contact-card" href={phoneUrl}>
                <span>Teléfono</span>
                <strong>3532-678034</strong>
                <small>Llamar</small>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <span>German Andrighetti - Desarrollos a medida</span>
          <span>{'{ software simple para negocios reales }'}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
