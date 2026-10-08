import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Interfaz para los datos que recibirá el generador
export interface DatosDespiece {
  serie: string;
  tipoVentana: string;
  vanoAncho: number;
  vanoAlto: number;
  cliente: string;
  fecha: string;
  componentes: {
    nombre: string;
    cantidad: number;
    ancho: number;
    alto: number;
    nota?: string;
  }[];
}

export function generarHojaDeCortePDF(datos: DatosDespiece) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // 1. ENCABEZADO PROFESIONAL
  doc.setFontSize(22);
  doc.setTextColor(30, 60, 100); // Azul profesional
  doc.text("MundoCanceles PRO", 14, 20);
  
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text("Herramienta Técnica Indalum - Línea Euroalum", 14, 28);

  // Línea separadora
  doc.setDrawColor(30, 60, 100);
  doc.setLineWidth(0.5);
  doc.line(14, 32, pageWidth - 14, 32);

  // 2. INFORMACIÓN DEL PROYECTO
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(`Cliente: ${datos.cliente}`, 14, 42);
  doc.text(`Fecha: ${datos.fecha}`, 14, 48);
  doc.text(`Serie: ${datos.serie} | Tipo: ${datos.tipoVentana}`, 14, 54);
  doc.text(`Medidas de Vano: ${datos.vanoAncho} mm (Ancho) x ${datos.vanoAlto} mm (Alto)`, 14, 60);

  // 3. TABLA DE DESPIECE (Usando autoTable)
  const tableData = datos.componentes.map((comp) => [
    comp.nombre,
    comp.cantidad.toString(),
    `${comp.ancho} mm`,
    `${comp.alto} mm`,
    comp.nota || "Corte a 45° / 90°",
  ]);

  autoTable(doc, {
    startY: 68,
    head: [["Componente", "Cant.", "Ancho", "Alto", "Observaciones"]],
    body: tableData,
    theme: "grid",
    headStyles: { 
      fillColor: [30, 60, 100], 
      textColor: 255, 
      fontStyle: "bold",
      halign: "center"
    },
    bodyStyles: {
      halign: "center",
      textColor: 50,
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
    columnStyles: {
      0: { halign: "left", cellWidth: 50 }, // Nombre del componente a la izquierda
    },
    margin: { top: 68, left: 14, right: 14 },
  });

  // 4. PIE DE PÁGINA
  const finalY = (doc as any).lastAutoTable.finalY + 20;
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  doc.text(
    "Documento generado automáticamente por Indalum Tool - MundoCanceles PRO",
    14,
    finalY
  );
  doc.text("www.mundocanceles.io", pageWidth - 14, finalY, { align: "right" });

  // 5. DESCARGAR EL ARCHIVO
  const nombreArchivo = `Despiece_${datos.serie}_${datos.cliente.replace(/\s+/g, "_")}.pdf`;
  doc.save(nombreArchivo);
}