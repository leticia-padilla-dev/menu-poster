import bgImage from "@/assets/fiesta-cireres.png";

const firstCourses = [
  "Crostini con queso de cabra y cerezas confitadas",
  "Ensalada con ventresca",
  "Flor de alcachofa con virutas de jamón ibérico",
];

const secondCourses = [
  "Solomillo de cerdo con salsa de cereza al oporto",
  "Fritura de pescado",
  "Brochetas de pollo a la brasa",
];

const MenuSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <section className="menu-section" aria-labelledby={`section-${title.toLowerCase()}`}>
    <div className="menu-section-heading">
      <span aria-hidden="true" />
      <h2 id={`section-${title.toLowerCase()}`}>{title}</h2>
      <span aria-hidden="true" />
    </div>
    <ul>
      {items.map((item) => (
        <li key={item}>
          <span className="menu-bullet" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

const Poster = () => {
  return (
    <article
      className="poster cherry-menu-poster relative overflow-hidden shadow-[var(--shadow-poster)] rounded-md"
      style={{
        width: "210mm",
        height: "297mm",
      }}
      aria-label="Menú especial Fira de la Cirera Bar Jubilats Serra"
    >
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="paper-softener" aria-hidden="true" />

      <div className="poster-content">
        <header className="poster-header">
          <p>Menú especial</p>
          <h1>Fira de la Cirera</h1>
          <div>Bar Jubilats · Serra</div>
        </header>

        <main className="menu-panel" aria-label="Menú especial">
          <MenuSection title="Primeros" items={firstCourses} />
          <MenuSection title="Segundos" items={secondCourses} />

          <section className="menu-section" aria-labelledby="section-postre">
            <div className="menu-section-heading">
              <span aria-hidden="true" />
              <h2 id="section-postre">Postre</h2>
              <span aria-hidden="true" />
            </div>
            <ul>
              <li>
                <span className="menu-bullet" aria-hidden="true" />
                <span>Pavlova con salsa de cereza</span>
              </li>
            </ul>
          </section>

          <div className="menu-bottom-row">
            <p>Entra una bebida</p>
            <aside aria-label="Precio">
              <strong>25 €</strong>
              <span>por persona</span>
            </aside>
          </div>
        </main>
      </div>
    </article>
  );
};

export default Poster;
