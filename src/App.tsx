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

const solutions = [
  {
    status: 'Próximamente',
    category: 'Comercio',
    title: 'Sistema de despensa',
    text: 'Gestión simple para ventas, caja, productos y operación diaria. La idea es que cada negocio active solo los módulos que realmente necesita.',
    modules: ['Ventas', 'Caja', 'Productos', 'Stock'],
  },
  {
    status: 'Próximamente',
    category: 'Pedidos',
    title: 'Panel de pedidos',
    text: 'Una herramienta para recibir, ordenar y consultar pedidos sin depender de mensajes sueltos, papeles o planillas imposibles de seguir.',
    modules: ['Pedidos', 'Estados', 'Clientes'],
  },
  {
    status: 'Próximamente',
    category: 'Gestión interna',
    title: 'Control de tareas internas',
    text: 'Organización de tareas, responsables y vencimientos para equipos chicos que necesitan claridad sin meterse en sistemas enormes.',
    modules: ['Tareas', 'Responsables', 'Seguimiento'],
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Inicio">
        <span className="brand-mark">GA</span>
        <span>
          <strong>German Andrighetti</strong>
          <small>Desarrollos a medida</small>
        </span>
      </a>

      <nav className="main-nav" aria-label="Navegación principal">
        <a href="/#servicios">Servicios</a>
        <a href="/soluciones">Soluciones</a>
        <a href="/#sobre-mi">Sobre mí</a>
        <a href="/#contacto">Contacto</a>
      </nav>

      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Consultar
      </a>
    </header>
  );
}

function HomePage() {
  return (
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

      <section className="section solutions-preview" id="soluciones">
        <div className="container preview-layout">
          <div className="section-title compact">
            <p className="eyebrow">Soluciones listas para usar</p>
            <h2>Un catálogo propio de herramientas activables por suscripción.</h2>
            <p>
              Estoy preparando una línea de sistemas online para negocios. La idea es simple: una base mensual fija y, arriba de eso, cada cliente activa las soluciones o módulos que realmente necesita.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/soluciones">
                Ver catálogo de soluciones
              </a>
              <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Consultar disponibilidad
              </a>
            </div>
          </div>

          <aside className="preview-panel">
            <span className="status-pill">Modelo futuro</span>
            <h3>Base mensual + módulos</h3>
            <p>Una estructura flexible para pagar por lo que se usa, sin comprar un elefante para llevar una bolsa.</p>
            <div className="module-list">
              <span>Base fija</span>
              <span>Sistemas</span>
              <span>Módulos</span>
            </div>
          </aside>
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

      <ContactSection />
    </main>
  );
}

function SolutionsPage() {
  return (
    <main className="page-main">
      <section className="section catalog-hero">
        <div className="container catalog-hero-layout">
          <div className="section-title compact">
            <p className="eyebrow">Catálogo de soluciones</p>
            <h1>Herramientas online para activar según la necesidad de cada negocio.</h1>
            <p className="hero-text">
              Esta página va a funcionar como el catálogo central de soluciones GA. Por ahora las herramientas están en preparación; más adelante cada una tendrá detalle, módulos, estado de disponibilidad y acceso desde el panel privado.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Consultar una solución
              </a>
              <a className="button button-secondary" href="/">
                Volver al inicio
              </a>
            </div>
          </div>

          <aside className="preview-panel catalog-panel">
            <span className="status-pill">Fase 1</span>
            <h3>Catálogo público</h3>
            <p>Primero mostramos y validamos interés. Después sumamos login, pagos, suscripciones y bloqueo automático por vencimiento.</p>
            <div className="module-list">
              <span>Próximamente</span>
              <span>Modular</span>
              <span>Suscripción</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container catalog-layout">
          <div className="catalog-sidebar">
            <p className="eyebrow">Cómo se va a contratar</p>
            <h2>Base fija y módulos activables.</h2>
            <p>
              El modelo pensado es una suscripción mensual con una base fija y un importe adicional por cada solución o módulo activo. Así cada cliente arma su propia combinación.
            </p>
          </div>

          <div className="catalog-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <div className="solution-card-header">
                  <span className="status-pill">{solution.status}</span>
                  <small>{solution.category}</small>
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
                <div className="module-list" aria-label={`Módulos de ${solution.title}`}>
                  {solution.modules.map((module) => (
                    <span key={module}>{module}</span>
                  ))}
                </div>
                <a className="button button-secondary solution-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Consultar esta solución
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactSection() {
  return (
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
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <span>German Andrighetti - Desarrollos a medida</span>
        <span>{'{ software simple para negocios reales }'}</span>
      </div>
    </footer>
  );
}

function App() {
  const isSolutionsPage = window.location.pathname.startsWith('/soluciones');

  return (
    <div className="site-shell">
      <Header />
      {isSolutionsPage ? <SolutionsPage /> : <HomePage />}
      <Footer />
    </div>
  );
}

export default App;
