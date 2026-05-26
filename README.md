# Menú especial · Bar Jubilats Serra

Cartel imprimible web (print-first) para el menú especial de Bar Jubilats Serra durante la Fira de la Cirera / Dia de la Cirera.

Una sola página optimizada para:
- Impresión profesional en A4 vertical
- Vista previa digital compartible
- Publicación en GitHub Pages bajo `/menu-poster/`

URL pública:

- `https://leticia-padilla-dev.github.io/menu-poster/`

## Cómo ejecutar

```bash
npm install
npm run lint
npm run dev
npm run build
npm test
```

## Cómo imprimir

1. Abrir la página en el navegador (Chrome recomendado).
2. Pulsar el botón **Imprimir cartel** (o `Ctrl/Cmd + P`).
3. En el diálogo de impresión:
   - Tamaño: **A4**
   - Orientación: **Vertical**
   - Márgenes: **Ninguno**
   - Desactivar **Encabezados y pies de página**
   - Activar **Gráficos de fondo**
4. Imprimir o guardar como PDF.

## Validación print-first

Validación final ejecutada sobre `main` actualizado:

```bash
npm run build
```

Resultado: build correcta. El cartel conserva tamaño A4 vertical, rutas de Pages bajo `/menu-poster/` y estilos de impresión con `@page` sin márgenes.
