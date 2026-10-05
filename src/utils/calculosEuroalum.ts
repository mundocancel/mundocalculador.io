// src/utils/calculosEuroalum.ts

export interface Dimensiones {
  ancho: number; // Ancho del vano en mm
  alto: number;  // Alto del vano en mm
}

export interface ComponenteDespiece {
  clave: string;
  descripcion: string;
  cantidad: number;
  ancho: number; // Medida de corte en mm
  alto: number;  // Medida de corte en mm
  corte: string;
  nota?: string;
}

export interface Herraje {
  clave: string;
  descripcion: string;
  cantidad: number | string;
  unidad: string;
}

export interface ResultadoDespiece {
  serie: string;
  tipo: string;
  componentes: ComponenteDespiece[];
  herrajes: Herraje[];
  vidrio: { descripcion: string; cantidad: number; ancho: number; alto: number };
}

/**
 * Calcula el despiece para Ventana Batiente de Apertura Interior (Serie 2500)
 * Basado en el Catálogo Indalum Euroalum, Página 9.
 */
export function calcularDespiece2500Interior(vano: Dimensiones): ResultadoDespiece {
  const H = vano.ancho;
  const V = vano.alto;

  // 1. COMPONENTES DE ALUMINIO (Fórmulas del catálogo)
  const componentes: ComponenteDespiece[] = [
    { 
      clave: '1677', 
      descripcion: 'Marco Ventana', 
      cantidad: 4, 
      ancho: H, 
      alto: V, 
      corte: '45°', 
      nota: '2 Horizontales, 2 Verticales' 
    },
    { 
      clave: '1680', 
      descripcion: 'Hoja Ventana Ap. Int.', 
      cantidad: 4, 
      ancho: H - 42, 
      alto: V - 42, 
      corte: '45°', 
      nota: '2 Horizontales, 2 Verticales' 
    },
    { 
      clave: '1668', 
      descripcion: 'Junquillo Redondo', 
      cantidad: 4, 
      ancho: H - 114, 
      alto: V - 114, 
      corte: '45°', 
      nota: '⚠️ ENSAMBLAR en la hoja ANTES de cortar' 
    },
  ];

  // 2. HERRAJES Y ACCESORIOS (Lista del catálogo)
  const herrajes: Herraje[] = [
    { clave: 'A-2507', descripcion: 'Escuadra de armado ventana', cantidad: 8, unidad: 'PZ' },
    { clave: 'A-2512', descripcion: 'Bisagra dos palas', cantidad: 2, unidad: 'PZ' },
    { clave: 'A-2519', descripcion: 'Cierre de presión', cantidad: 1, unidad: 'PZ' },
    { clave: 'A-5020', descripcion: 'Tapa dren', cantidad: 2, unidad: 'PZ' },
    { clave: 'A-5022', descripcion: 'Tapón cubre pija', cantidad: 6, unidad: 'PZ' },
    { clave: 'A-5032', descripcion: 'Calza para vidrio', cantidad: 2, unidad: 'PZ' },
    { clave: 'A-5079', descripcion: 'Pija fijadora 10"x2"', cantidad: 6, unidad: 'PZ' },
    { clave: 'A-5090', descripcion: 'Taquete de 1/4"', cantidad: 6, unidad: 'PZ' },
  ];

  // 3. VIDRIO (Fórmula del catálogo: H-127, V-127)
  const vidrio = {
    descripcion: 'Vidrio 6mm',
    cantidad: 1,
    ancho: H - 127,
    alto: V - 127
  };

  return {
    serie: 'Euroalum 2500',
    tipo: 'Ventana Batiente Apertura Interior',
    componentes,
    herrajes,
    vidrio
  };
}