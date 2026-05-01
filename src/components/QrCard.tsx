import { QRCodeSVG } from "qrcode.react";

const QR_URL = "https://jubilats.vercel.app/carta";

const QrCard = () => (
  <article
    className="qr-card flex flex-col items-center justify-center relative overflow-hidden"
    style={{
      width: "90mm",
      height: "140mm",
      padding: "8mm 6mm",
      gap: "5mm",
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#F5F1E8",
    }}
    aria-label="Tarjeta QR Bar Jubilats Serra"
  >
    {/* Minimalist mountain line background */}
    <div 
      className="absolute inset-x-0 w-full pointer-events-none opacity-40 z-0" 
      style={{ top: "45%" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 30" className="w-full h-auto">
        <path 
          d="M0,25 L12,14 L22,19 L38,6 L55,18 L70,8 L88,16 L100,10" 
          fill="none" 
          stroke="#8C8374" 
          strokeWidth="0.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>

    {/* Top accent bar */}
    <div
      className="shrink-0 bg-black rounded-sm z-10"
      style={{ width: "12mm", height: "1mm" }}
    />

    {/* Headings */}
    <div className="text-center shrink-0 z-10">
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

    {/* QR Code in a clean white box with quiet zone */}
    <div className="flex items-center justify-center shrink-0 z-10 shadow-sm rounded-lg overflow-hidden">
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
      className="text-[9pt] font-semibold tracking-[0.08em] text-center m-0 shrink-0 z-10"
      style={{ color: "#111111" }}
    >
      Bar Jubilats
    </p>
  </article>
);

export default QrCard;
