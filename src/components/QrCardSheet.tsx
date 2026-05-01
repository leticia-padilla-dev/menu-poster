import QrCard from "@/components/QrCard";

const QrCardSheet = () => (
  <div
    className="qr-card-sheet relative bg-white overflow-hidden grid grid-cols-2 grid-rows-2"
    style={{ width: "210mm", height: "297mm" }}
  >
    {/* Vertical center crop line */}
    <div
      className="absolute top-0 h-full bg-[#cccccc]"
      style={{ left: "50%", width: "0.3mm", transform: "translateX(-50%)" }}
    />
    {/* Horizontal center crop line */}
    <div
      className="absolute left-0 w-full bg-[#cccccc]"
      style={{ top: "50%", height: "0.3mm", transform: "translateY(-50%)" }}
    />

    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="flex items-center justify-center">
        <QrCard />
      </div>
    ))}
  </div>
);

export default QrCardSheet;
