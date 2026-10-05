# 🏗️ Indalum Tool - MundoCanceles PRO

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-purple.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)

Herramienta técnica profesional para la fabricación de aluminio y sistemas de cancelería. Calcula despieces con precisión, gestiona cotizaciones y consulta catálogos técnicos de perfiles y herrajes basados en los estándares de la **Línea Euroalum**.

---

## ✨ Características Principales

- **📐 Calculadora de Despiece:** Genera cortes precisos basados en las medidas del vano, aplicando las fórmulas exactas de cada serie (2500, 2800, 3500, 3800, 3900, 4000 y 4500).
- **📚 Catálogo Técnico Integrado:** Consulta rápida de perfiles, herrajes, vidrios y gráficos de óptimo desempeño (resistencia al viento y presión).
- **💰 Gestión de Precios:** Personaliza los costos de materiales en tiempo real para generar cotizaciones precisas.
- **📄 Exportación en PDF:** Genera reportes y hojas de corte listos para el taller o para presentar al cliente final (usando `jsPDF`).
- **☁️ Sincronización Híbrida:** Funciona perfectamente en modo *offline* guardando datos en el navegador (`localStorage`), o se sincroniza en la nube si configuras Firebase.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 19, TypeScript, Vite 6
- **Estilos:** Tailwind CSS 4, Motion (animaciones)
- **Utilidades:** jsPDF + jsPDF-AutoTable (reportes), Lucide React (iconos)
- **Backend / Nube:** Firebase (Firestore & Auth), Node.js / Express (opcional)
- **Contenedores:** Docker & Docker Compose

---

## 🚀 Inicio Rápido (Desarrollo Local)

Sigue estos pasos para correr el proyecto en tu computadora:

1. **Requisitos previos:** Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y npm.
2. **Clonar el repositorio:**
```bash
   git clone https://github.com/mundocanceles/mundocalculador.io.git
   cd mundocalculador.io
```
3. **Instalar dependencias:**
```bash
   npm install
```
4. **Iniciar el servidor de desarrollo:**
```bash
   npm run dev
```
   La aplicación estará disponible en `http://localhost:3000`.

---

## 📦 Despliegue (Deploy)

### Opción 1: GitHub Pages (Automatizado)
El proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions. Cada vez que hagas `push` a la rama `main`, se construirá y publicará la versión de producción.

### Opción 2: Docker (Producción)
Para ejecutar la aplicación en un contenedor aislado y listo para producción:
```bash
docker-compose up --build -d
```

---

## 🔥 Configuración de Firebase (Opcional)

Si deseas habilitar la sincronización en la nube y autenticación de usuarios:

1. Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Habilita **Google Authentication** y una base de datos **Firestore**.
3. Copia las credenciales de tu "Aplicación Web".
4. Crea un archivo `.env` en la raíz del proyecto (basado en `.env.example`) y pega tus variables:
```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=tu_proyecto
   VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_id
   VITE_FIREBASE_APP_ID=tu_app_id
```
*(Nota: Nunca subas el archivo `.env` a GitHub, ya está protegido por el `.gitignore`)*.

---

## 📋 Series de Aluminio Soportadas

Esta herramienta incluye las fórmulas y componentes de las siguientes series de **Indalum (Grupo Industrial LM)**:
- **Serie 2500:** Ventanas y puertas batientes/corredizas básicas.
- **Serie 2800:** Ventanas corredizas de alto desempeño con guía para mosquitero integrada.
- **Serie 3500:** Puertas batientes tradicionales y de lujo (comercial y residencial).
- **Serie 3800:** Ventanas y puertas corredizas con cortes a 90° y diseño vanguardista.
- **Serie 3900:** Puertas corredizas de gran resistencia, ideales para altas dimensiones y zonas costeras.
- **Serie 4000:** Serie europea de lujo (corredizas, oscilobatientes, vasistas) con alta hermeticidad.
- **Serie 4500:** Serie para claros de grandes dimensiones con hojas múltiples (2, 3 o más rieles).

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un *Issue* o un *Pull Request* para proponer mejoras en las fórmulas de despiece o añadir nuevas series al catálogo.

---
*Desarrollado con ❤️ para optimizar la industria de la cancelería de aluminio.*