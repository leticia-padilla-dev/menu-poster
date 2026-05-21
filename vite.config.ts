import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const emitStaticRouteEntries = () => ({
  name: "emit-static-route-entries",
  closeBundle() {
    const outDir = path.resolve(__dirname, "dist");
    const sourceHtmlPath = path.join(outDir, "index.html");

    if (!fs.existsSync(sourceHtmlPath)) {
      return;
    }

    const html = fs.readFileSync(sourceHtmlPath, "utf8");

    for (const route of ["poster", "print/qr-card"]) {
      const targetDir = path.join(outDir, route);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, "index.html"), html);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: command === "build" ? "/menu-poster/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), emitStaticRouteEntries(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
