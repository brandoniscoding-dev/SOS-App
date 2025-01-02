# Utiliser l'image officielle Node.js
FROM node:18-alpine

# Installer pnpm globalement
RUN npm install -g pnpm

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et pnpm-lock.yaml dans le conteneur
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances avec pnpm
RUN pnpm install --frozen-lockfile

# Copier tout le code source dans le conteneur
COPY . .

# Générer la version de production de l'application
RUN pnpm run build

# Exposer le port sur lequel l'application Next.js sera accessible
EXPOSE 3000

# Démarrer l'application en mode production
CMD ["pnpm", "start"]
