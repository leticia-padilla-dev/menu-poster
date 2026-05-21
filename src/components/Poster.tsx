import bgImage from "@/assets/fiesta-cireres.png";
import cherryBranch from "@/assets/cherries.jpg";
import cherryDetail from "@/assets/cherries2.jpg";

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
      aria-label="Menú especial Bar Jubilats Serra Fira de la Cirera"
    >
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="paper-softener" aria-hidden="true" />

      <img
        src={cherryBranch}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "8mm",
          right: "-28mm",
          width: "92mm",
          height: "122mm",
          objectFit: "cover",
          objectPosition: "72% 40%",
          opacity: 0.9,
          filter: "saturate(0.9) contrast(1.04) brightness(1.05)",
          transform: "rotate(1.5deg)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 18%, black 100%), linear-gradient(180deg, black 0%, black 84%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 18%, black 100%), linear-gradient(180deg, black 0%, black 84%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <img
        src={cherryDetail}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          right: "-18mm",
          bottom: "45mm",
          width: "56mm",
          height: "42mm",
          objectFit: "cover",
          objectPosition: "78% 80%",
          opacity: 0.28,
          filter: "saturate(0.78) brightness(1.18)",
          mixBlendMode: "multiply",
          WebkitMaskImage: "radial-gradient(ellipse at 62% 55%, black 0%, black 45%, transparent 76%)",
          maskImage: "radial-gradient(ellipse at 62% 55%, black 0%, black 45%, transparent 76%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <div className="poster-content" style={{ zIndex: 3 }}>
        <header className="poster-header">
          <p>Bar Jubilats · Serra</p>
          <h1>Menú especial</h1>
          <div>Fira de la Cirera</div>
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
