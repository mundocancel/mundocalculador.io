/**
 * Utilidades de cálculo para la Línea Euroalum de Indalum
 * Basado en el catálogo técnico oficial (Serie 2500 - Ventana Batiente Apertura Interior)
 */

export interface Dimensiones {
  ancho: number; // Ancho del vano en mm
  alto: number;  // Alto del vano en mm
}

export interface Despiece2500 {
  marcoVentana: { ancho: number; alto: number; cantidad: 4 }; // 2H + 2V
  hojaVentana: { ancho: number; alto: number; cantidad: 4 }; // 2H + 2V
  junquilloRedondo: { ancho: number; alto: number; cantidad: 4 }; // 2H + 2V
  vidrio: { ancho: number; alto: number; cantidad: 1 };
}

/**
 * Calcula el despiece para una Ventana Batiente de Apertura Interior (Serie 2500)
 * @param vano Dimensiones del hueco o vano (en mm)
 * @returns Objeto con las medidas de corte para cada perfil
 */
export function calcularDespiece2500Interior(vano: Dimensiones): Despiece2500 {
  // Fórmulas extraídas del catálogo Indalum (Pág. 9)
  const marcoAncho = vano.ancho;
  const marcoAlto = vano.alto;

  const hojaAncho = vano.ancho - 42;
  const hojaAlto = vano.alto - 42;

  const junquilloAncho = vano.ancho - 114;
  const junquilloAlto = vano.alto - 114;

  const vidrioAncho = vano.ancho - 127;
  const vidrioAlto = vano.alto - 127;

  return {
    marcoVentana: { ancho: marcoAncho, alto: marcoAlto, cantidad: 4 },
    hojaVentana: { ancho: hojaAncho, alto: hojaAlto, cantidad: 4 },
    junquilloRedondo: { ancho: junquilloAncho, alto: junquilloAlto, cantidad: 4 },
    vidrio: { ancho: vidrioAncho, alto: vidrioAlto, cantidad: 1 },
  };
}

// Ejemplo de uso:
// const resultado = calcularDespiece2500Interior({ ancho: 1000, alto: 1200 });
// console.log(resultado.vidrio); // { ancho: 873, alto: 1073, cantidad: 1 }