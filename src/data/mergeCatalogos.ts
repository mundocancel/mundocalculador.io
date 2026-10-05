// src/data/mergeCatalogos.ts
import { INITIAL_PRODUCTS, INITIAL_PRICES, type Product, type PriceData } from "./initialData";
import { CATALOGO_INDALUM_EXTRA } from "./catalogoIndalum";

/**
 * Merge del catálogo base con los perfiles extraídos del PDF Indalum.
 * Evita duplicados por `codigo`.
 */
export const CATALOGO_COMPLETO: Product[] = [
  ...INITIAL_PRODUCTS,
  ...CATALOGO_INDALUM_EXTRA.filter(
    (nuevo) => !INITIAL_PRODUCTS.some((existente) => existente.codigo === nuevo.codigo)
  ),
];

/**
 * Precios de referencia para los códigos nuevos.
 * TODO: reemplazar con la lista oficial de Indalum.
 */
export const PRECIOS_EXTRA: Record<string, PriceData> = {
  // Serie 2500
  "1680": { unitPrice: 350.00, type: "meter" },
  "1681": { unitPrice: 420.00, type: "meter" },
  "1682": { unitPrice: 480.00, type: "meter" },
  "1683": { unitPrice: 460.00, type: "meter" },
  "1692": { unitPrice: 520.00, type: "meter" },
  "1684": { unitPrice: 75.00, type: "meter" },
  "1668": { unitPrice: 80.00, type: "meter" },
  "1686": { unitPrice: 85.00, type: "meter" },
  "1688": { unitPrice: 550.00, type: "meter" },
  "1689": { unitPrice: 590.00, type: "meter" },
  "1654": { unitPrice: 570.00, type: "meter" },
  "1690": { unitPrice: 480.00, type: "meter" },
  "1614": { unitPrice: 320.00, type: "meter" },
  "1618": { unitPrice: 180.00, type: "meter" },
  "2292": { unitPrice: 95.00, type: "meter" },
  "1673": { unitPrice: 160.00, type: "meter" },
  "1679": { unitPrice: 370.00, type: "meter" },
  "1659": { unitPrice: 210.00, type: "unit" },
  "1658": { unitPrice: 180.00, type: "unit" },
  "1656": { unitPrice: 290.00, type: "meter" },
  "1674": { unitPrice: 240.00, type: "meter" },
  "1719": { unitPrice: 260.00, type: "meter" },

  // Serie 2800
  "12156": { unitPrice: 340.00, type: "meter" },
  "12157": { unitPrice: 320.00, type: "meter" },
  "12158": { unitPrice: 300.00, type: "meter" },
  "12159": { unitPrice: 150.00, type: "meter" },
  "12160": { unitPrice: 110.00, type: "meter" },
  "12161": { unitPrice: 280.00, type: "meter" },

  // Serie 3500
  "2277": { unitPrice: 480.00, type: "meter" },
  "2287": { unitPrice: 420.00, type: "meter" },
  "2278": { unitPrice: 620.00, type: "meter" },
  "2215": { unitPrice: 350.00, type: "meter" },
  "2274": { unitPrice: 470.00, type: "meter" },
  "2275": { unitPrice: 520.00, type: "meter" },
  "2222": { unitPrice: 90.00, type: "meter" },
  "2223": { unitPrice: 95.00, type: "meter" },
  "2227": { unitPrice: 110.00, type: "meter" },
  "2288": { unitPrice: 430.00, type: "meter" },

  // Serie 3800
  "12263": { unitPrice: 520.00, type: "meter" },
  "12264": { unitPrice: 680.00, type: "meter" },
  "12209": { unitPrice: 650.00, type: "meter" },
  "12240": { unitPrice: 500.00, type: "meter" },
  "12241": { unitPrice: 510.00, type: "meter" },
  "12246": { unitPrice: 540.00, type: "meter" },
  "12288": { unitPrice: 480.00, type: "meter" },
  "12289": { unitPrice: 490.00, type: "meter" },
  "12291": { unitPrice: 520.00, type: "meter" },
  "12297": { unitPrice: 540.00, type: "meter" },
  "12298": { unitPrice: 550.00, type: "meter" },
  "12300": { unitPrice: 570.00, type: "meter" },
  "2303": { unitPrice: 320.00, type: "meter" },
  "2304": { unitPrice: 340.00, type: "meter" },
  "2306": { unitPrice: 360.00, type: "meter" },
  "2307": { unitPrice: 380.00, type: "meter" },
  "2308": { unitPrice: 85.00, type: "meter" },
  "2309": { unitPrice: 90.00, type: "meter" },
  "2317": { unitPrice: 120.00, type: "meter" },
  "2318": { unitPrice: 130.00, type: "meter" },
  "2321": { unitPrice: 290.00, type: "meter" },
  "2348": { unitPrice: 295.00, type: "meter" },
  "12271": { unitPrice: 190.00, type: "meter" },
  "2138": { unitPrice: 230.00, type: "meter" },
  "12272": { unitPrice: 170.00, type: "meter" },
  "12292": { unitPrice: 105.00, type: "meter" },
  "12315": { unitPrice: 130.00, type: "meter" },
  "2214": { unitPrice: 55.00, type: "meter" },

  // Serie 3900
  "12305": { unitPrice: 620.00, type: "meter" },
  "12308": { unitPrice: 680.00, type: "meter" },
  "12309": { unitPrice: 700.00, type: "meter" },
  "12310": { unitPrice: 710.00, type: "meter" },
  "12311": { unitPrice: 690.00, type: "meter" },
  "12312": { unitPrice: 720.00, type: "meter" },
  "12313": { unitPrice: 180.00, type: "meter" },
  "12314": { unitPrice: 340.00, type: "meter" },

  // Serie 4000
  "2346": { unitPrice: 1050.00, type: "meter" },
  "2298": { unitPrice: 720.00, type: "meter" },
  "2316": { unitPrice: 780.00, type: "meter" },
  "2319": { unitPrice: 820.00, type: "meter" },
  "2199": { unitPrice: 350.00, type: "meter" },
  "2198": { unitPrice: 380.00, type: "meter" },
  "2333": { unitPrice: 100.00, type: "meter" },
  "2349": { unitPrice: 110.00, type: "meter" },
  "2334": { unitPrice: 720.00, type: "meter" },
  "2336": { unitPrice: 450.00, type: "meter" },
  "2344": { unitPrice: 350.00, type: "meter" },
  "2361": { unitPrice: 380.00, type: "meter" },
  "12009": { unitPrice: 580.00, type: "meter" },
  "12010": { unitPrice: 105.00, type: "meter" },
  "12012": { unitPrice: 100.00, type: "meter" },
  "12013": { unitPrice: 590.00, type: "meter" },
  "12014": { unitPrice: 620.00, type: "meter" },
  "12015": { unitPrice: 480.00, type: "meter" },
  "12016": { unitPrice: 460.00, type: "meter" },
  "2059": { unitPrice: 320.00, type: "meter" },
  "2219": { unitPrice: 150.00, type: "meter" },

  // Serie 4500
  "4045": { unitPrice: 980.00, type: "meter" },
  "4057": { unitPrice: 1650.00, type: "meter" },
  "4053": { unitPrice: 1100.00, type: "meter" },
  "4024": { unitPrice: 420.00, type: "meter" },
  "4055": { unitPrice: 950.00, type: "meter" },
  "4086": { unitPrice: 1050.00, type: "meter" },
  "4050": { unitPrice: 380.00, type: "meter" },
  "4059": { unitPrice: 420.00, type: "meter" },
  "4054": { unitPrice: 1750.00, type: "meter" },
};

/**
 * Precios completos: base + extra.
 */
export const PRECIOS_COMPLETOS: Record<string, PriceData> = {
  ...INITIAL_PRICES,
  ...PRECIOS_EXTRA,
};

/**
 * Helper para obtener producto + precio unificados.
 */
export function getProductoConPrecio(codigo: string) {
  const producto = CATALOGO_COMPLETO.find((p) => p.codigo === codigo);
  const precio = PRECIOS_COMPLETOS[codigo];
  if (!producto) return null;
  return {
    ...producto,
    unitPrice: precio?.unitPrice ?? null,
    unitType: precio?.type ?? null,
  };
}