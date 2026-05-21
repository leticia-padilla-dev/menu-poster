import bgImage from "@/assets/fiesta-cireres.png";
import cherryBranch from "@/assets/cherries.jpg";
import cherries1 from "@/assets/cherries1.jpg";
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

      {/* Top-Right Cherry Branch (Shifted slightly to the right to avoid overlapping text) */}
      <img
        src={cherryBranch}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "5mm",
          right: "-26mm",
          width: "104mm",
          height: "128mm",
          objectFit: "cover",
          objectPosition: "76% 44%",
          opacity: 1,
          filter: "saturate(1.08) contrast(1.04) brightness(1)",
          transform: "rotate(1.5deg)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 3%, black 100%), linear-gradient(180deg, black 0%, black 98%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 3%, black 100%), linear-gradient(180deg, black 0%, black 98%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Middle-Right Cherry Branch (cherries1.jpg - portrait crop, added to increase cherry presence above the green footer) */}
      <img
        src={cherries1}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          right: "-12mm",
          bottom: "55mm",
          width: "60mm",
          height: "90mm",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.85,
          filter: "saturate(1.08) contrast(1.04) brightness(1)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 0%, black 60%, transparent 90%)",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 0%, black 60%, transparent 90%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Middle-Left Cherry Branch (cherries2.jpg - positioned below the castle sketch to frame the card on the left side) */}
      <img
        src={cherryDetail}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          left: "-18mm",
          top: "135mm",
          width: "52mm",
          height: "68mm",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.75,
          filter: "saturate(1.06) contrast(1.04) brightness(1)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 0%, black 55%, transparent 88%)",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 0%, black 55%, transparent 88%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <div className="poster-content" style={{ zIndex: 3 }}>
        <header className="poster-header">
          <p>Bar Jubilats · Serra</p>
          <h1>Feria de la Cirera</h1>
          <div>Menú especial</div>
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
            <p>Incluye una bebida</p>
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
