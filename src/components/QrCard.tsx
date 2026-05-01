import { QRCodeSVG } from "qrcode.react";

const QR_URL = "https://jubilats.vercel.app/carta";

const QrCard = () => (
  <article
    className="qr-card bg-white flex flex-col items-center justify-center"
    style={{
      width: "90mm",
      height: "140mm",
      padding: "8mm 6mm",
      gap: "5mm",
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    }}
    aria-label="Tarjeta QR Bar Jubilats Serra"
  >
    {/* Top accent bar */}
    <div
      className="shrink-0 bg-black rounded-sm"
      style={{ width: "12mm", height: "1mm" }}
    />

    {/* Headings */}
    <div className="text-center shrink-0">
      <p
        className="text-[14pt] font-bold tracking-[0.2em] uppercase leading-none m-0"
        style={{ color: "#111111" }}
      >
        Disfruta Serra
      </p>
      <p
        className="text-[8pt] font-normal tracking-[0.15em] uppercase m-0"
        style={{ color: "#555555", marginTop: "2mm" }}
      >
        Escanea la carta
      </p>
    </div>

    {/* QR Code */}
    <div className="flex items-center justify-center shrink-0">
      <QRCodeSVG
        value={QR_URL}
        size={220}
        fgColor="#000000"
        bgColor="#ffffff"
        level="H"
        marginSize={3}
      />
    </div>

    {/* Footer */}
    <p
      className="text-[9pt] font-semibold tracking-[0.08em] text-center m-0 shrink-0"
      style={{ color: "#111111" }}
    >
      Bar Jubilats
    </p>
  </article>
);

export default QrCard;
