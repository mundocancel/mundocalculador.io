# ==========================================
# ETAPA 1: CONSTRUCCIÓN (Builder)
# ==========================================
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar solo los archivos de dependencias primero (mejora el cache de Docker)
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copiar el resto del código y construir
COPY . .
RUN npm run build

# ==========================================
# ETAPA 2: PRODUCCIÓN (Servidor ligero)
# ==========================================
FROM nginx:alpine AS production

# Copiar los archivos compilados de la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar una configuración personalizada de Nginx para React (SPA)
# Esto evita errores de "404 Not Found" al recargar la página en rutas internas
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]