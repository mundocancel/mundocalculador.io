
import {
  INITIAL_PRODUCTS,
  INITIAL_PRICES,
  type Product,
  type PriceData,
} from "./initialData";
import { CATALOGO_INDALUM_EXTRA } from "./catalogoIndalum";
import { getIconoProducto } from "./iconosPorSubtipo";

// ⬇️ PRIMERO: precios extra (antes de PRECIOS_COMPLETOS)
const PRECIOS_EXTRA: Record<string, PriceData> = {
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

const ICONS8_BASE = "https://img.icons8.com/ios/100/161717";
const FALLBACK = `${ICONS8_BASE}/aluminum.png`;

export const ICONOS_SUBTIPO: Record<string, string> = {
  // ─────────────────────────────────────────────
  // PERFILES — Por forma/función estructural
  // ─────────────────────────────────────────────
  marco:        `${ICONS8_BASE}/rectangle-stroked.png`,
  "marco fijo": `${ICONS8_BASE}/rectangle-stroked.png`,
  hoja:         `${ICONS8_BASE}/rectangle-stroked.png`,
  contramarco:  `${ICONS8_BASE}/rectangle-stroked.png`,
  cerco:        `${ICONS8_BASE}/rectangle-stroked.png`,
  fijo:         `${ICONS8_BASE}/square-stroked.png`,

  riel:         `${ICONS8_BASE}/horizontal-line.png`,
  "riel colgante": `${ICONS8_BASE}/horizontal-line.png`,
  jamba:        `${ICONS8_BASE}/vertical-line.png`,
  poste:        `${ICONS8_BASE}/vertical-line.png`,
  mullion:      `${ICONS8_BASE}/t.png`,
  intermedio:   `${ICONS8_BASE}/plus.png`,
  travesaño:    `${ICONS8_BASE}/horizontal-line.png`,

  zoclo:        `${ICONS8_BASE}/underline.png`,
  cabezal:      `${ICONS8_BASE}/overline.png`,
  traslape:     `${ICONS8_BASE}/chevron-right.png`,
  goteron:      `${ICONS8_BASE}/water.png`,
  "guia de refuerzo": `${ICONS8_BASE}/navigation.png`,

  junquillo:    `${ICONS8_BASE}/line-width.png`,
  pletina:      `${ICONS8_BASE}/line-width.png`,
  tapa:         `${ICONS8_BASE}/cap.png`,
  bolsa:        `${ICONS8_BASE}/rectangle-stroked.png`,
  escalonado:   `${ICONS8_BASE}/stairs.png`,

  esquinero:    `${ICONS8_BASE}/corner.png`,
  adaptador:    `${ICONS8_BASE}/plug.png`,
  inversor:     `${ICONS8_BASE}/switch.png`,
  refuerzo:     `${ICONS8_BASE}/shield.png`,
  mosquitero:   `${ICONS8_BASE}/grid.png`,
  rejilla:      `${ICONS8_BASE}/grid.png`,

  // ─────────────────────────────────────────────
  // HERRAJES
  // ─────────────────────────────────────────────
  bisagra:      `${ICONS8_BASE}/hinge.png`,
  rodamiento:   `${ICONS8_BASE}/roller-skates.png`,
  carretilla:   `${ICONS8_BASE}/roller-skates.png`,
  cierre:       `${ICONS8_BASE}/lock.png`,
  broche:       `${ICONS8_BASE}/privacy.png`,
  candado:      `${ICONS8_BASE}/lock.png`,
  escuadra:     `${ICONS8_BASE}/angle.png`,
  operador:     `${ICONS8_BASE}/gears.png`,
  compas:       `${ICONS8_BASE}/compass.png`,
  reten:        `${ICONS8_BASE}/hook.png`,
  tapon:        `${ICONS8_BASE}/circle.png`,
  calza:        `${ICONS8_BASE}/rectangle.png`,
  felpa:        `${ICONS8_BASE}/line-width.png`,
  tensor:       `${ICONS8_BASE}/settings.png`,
  manija:       `${ICONS8_BASE}/door-handle.png`,
  chapa:        `${ICONS8_BASE}/lock.png`,
  uñero:        `${ICONS8_BASE}/hand.png`,

  // ─────────────────────────────────────────────
  // INSUMOS
  // ─────────────────────────────────────────────
  empaque:      `${ICONS8_BASE}/rubber.png`,
  tornillo:     `${ICONS8_BASE}/screw.png`,
  pija:         `${ICONS8_BASE}/screw.png`,
  anclaje:      `${ICONS8_BASE}/bolt.png`,
  taquete:      `${ICONS8_BASE}/bolt.png`,
  sellador:     `${ICONS8_BASE}/glue.png`,
  silicon:      `${ICONS8_BASE}/glue.png`,
  tela:         `${ICONS8_BASE}/grid.png`,
  junta:        `${ICONS8_BASE}/rubber.png`,

  // ─────────────────────────────────────────────
  // VIDRIO
  // ─────────────────────────────────────────────
  vidrio:       `${ICONS8_BASE}/glass.png`,
  cristal:      `${ICONS8_BASE}/glass.png`,
  "doble vidrio": `${ICONS8_BASE}/glass.png`,

  // ─────────────────────────────────────────────
  // MARCA / GENÉRICOS
  // ─────────────────────────────────────────────
  saint_gobain: `${ICONS8_BASE}/glass.png`,
  "saint-gobain": `${ICONS8_BASE}/glass.png`,
};


export function getIconoPorSubtipo(subtipo?: string): string {
  if (!subtipo) return FALLBACK;

  const normalized = subtipo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .trim();

  return ICONOS_SUBTIPO[normalized] ?? FALLBACK;
}

/**
 * Devuelve el ícono basado en el tipo de producto (fallback de 2do nivel).
 * Útil cuando el subtipo no está definido pero sí el tipo.
 */
export function getIconoPorTipo(tipo?: string): string {
  if (!tipo) return FALLBACK;
  const t = tipo.toLowerCase();
  switch (t) {
    case "perfil":  return `${ICONS8_BASE}/aluminum.png`;
    case "herraje": return `${ICONS8_BASE}/wrench.png`;
    case "insumo":  return `${ICONS8_BASE}/box.png`;
    case "vidrio":  return `${ICONS8_BASE}/glass.png`;
    default:        return FALLBACK;
  }
}

/**
 * Resolución en cascada:
 * 1) subtipo → ícono específico
 * 2) tipo → ícono por categoría
 * 3) fallback genérico
 */
export function getIconoProducto(opts: { subtipo?: string; tipo?: string }): string {
  if (opts.subtipo && ICONOS_SUBTIPO[opts.subtipo.toLowerCase()]) {
    return getIconoPorSubtipo(opts.subtipo);
  }
  return getIconoPorTipo(opts.tipo);
}

/**
 * Catálogo final:
 * - Une base + extra del PDF
 * - Aplica ícono por subtipo si el producto no tiene uno propio
 */
export const CATALOGO_COMPLETO: Product[] = CATALOGO_MERGED.map((p) => ({
  ...p,
  imagen: p.imagen || getIconoProducto({ subtipo: p.subtipo, tipo: p.tipo }),
}));

/**
 * Helper: producto + precio en una sola llamada.
 */
export function getProductoConPrecio(codigo: string) {
  const producto = CATALOGO_COMPLETO.find((p) => p.codigo === codigo);
  if (!producto) return null;
  const precio = PRECIOS_COMPLETOS[codigo];
  return {
    ...producto,
    unitPrice: precio?.unitPrice ?? null,
    unitType: precio?.type ?? null,
  };
}