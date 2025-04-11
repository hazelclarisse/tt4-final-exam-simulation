# Use Node.js LTS version as base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app for production
RUN npm run build

# Expose the port (default port for Svelte)
EXPOSE 5000

# Start the app
CMD ["npm", "run", "preview"]
