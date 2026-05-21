import bgImage from "@/assets/cartel-menu-cirere.png";
import cherryBranch from "@/assets/cherries_botanical_right.png";
import cherryDetail from "@/assets/cherries_botanical_left.png";
import cherryFlowers from "@/assets/cherries_botanical_flowers.png";

// High-quality custom SVG Cherry Icon for bullet points and section ornaments
const CherryIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Stems in gold/olive green */}
    <path
      d="M12 4C12 4 11.5 8 7 13M12 4C12 4 13.5 7 17 12"
      stroke="#7E8F75"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Leaf in soft sage green */}
    <path
      d="M12 4C10.5 2.8 7.8 3.2 7 5C8.5 5.5 11 4.8 12 4Z"
      fill="#98A88E"
      stroke="#7E8F75"
      strokeWidth="0.75"
    />
    {/* Radial Shaded Cherries */}
    <circle cx="6.5" cy="14.5" r="3.8" fill="url(#cherryGrad)" />
    <circle cx="17.2" cy="13.5" r="3.8" fill="url(#cherryGrad)" />
    {/* Highlights */}
    <circle cx="5.2" cy="13.2" r="1" fill="#FFFFFF" opacity="0.65" />
    <circle cx="15.9" cy="12.2" r="1" fill="#FFFFFF" opacity="0.65" />
    <defs>
      <radialGradient id="cherryGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#D94B52" />
        <stop offset="70%" stopColor="#941C22" />
        <stop offset="100%" stopColor="#5E080E" />
      </radialGradient>
    </defs>
  </svg>
);

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
      <div className="flex items-center gap-3">
        <CherryIcon size={15} />
        <h2 id={`section-${title.toLowerCase()}`}>{title}</h2>
        <CherryIcon size={15} />
      </div>
      <span aria-hidden="true" />
    </div>
    <ul>
      {items.map((item) => (
        <li key={item}>
          <CherryIcon size={13} className="shrink-0 self-center" />
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

      {/* Top-Right Cherry Branch (Genuine vintage botanical illustration overlay) */}
      <img
        src={cherryBranch}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "-5mm",
          right: "-22mm",
          width: "90mm",
          height: "90mm",
          objectFit: "contain",
          opacity: 0.95,
          mixBlendMode: "multiply",
          transform: "rotate(8deg)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Middle-Left Hanging Cherry Branch (Genuine vintage botanical illustration overlay, completely below the castle and near the middle of the poster height) */}
      <img
        src={cherryDetail}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          left: "-12mm",
          top: "115mm",
          width: "70mm",
          height: "70mm",
          objectFit: "contain",
          opacity: 0.92,
          mixBlendMode: "multiply",
          transform: "rotate(-8deg)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Lower-Left Cherry Branch with Flowers (Genuine vintage botanical illustration overlay, below the middle-left branch and above the mountains) */}
      <img
        src={cherryFlowers}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "175mm",
          left: "-10mm",
          width: "70mm",
          height: "70mm",
          objectFit: "contain",
          opacity: 0.95,
          mixBlendMode: "multiply",
          transform: "rotate(15deg)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Middle-Right Cherry Branch with Flowers (Genuine vintage botanical illustration overlay featuring blossoms, in the middle height on the right side) */}
      <img
        src={cherryFlowers}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 1,
          top: "120mm",
          right: "-12mm",
          width: "75mm",
          height: "75mm",
          objectFit: "contain",
          opacity: 0.95,
          mixBlendMode: "multiply",
          transform: "rotate(-6deg)",
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
              <div className="flex items-center gap-3">
                <CherryIcon size={15} />
                <h2 id="section-postre">Postre</h2>
                <CherryIcon size={15} />
              </div>
              <span aria-hidden="true" />
            </div>
            <ul>
              <li>
                <CherryIcon size={13} className="shrink-0 self-center" />
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
