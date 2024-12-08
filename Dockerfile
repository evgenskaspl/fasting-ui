# Use a lightweight Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install global dependencies (Expo CLI and latest npm)
RUN npm install --unsafe-perm --allow-root -g expo-cli@latest npm@latest

# Copy the package.json and package-lock.json into the working directory
COPY ./package*.json ./

# Install the project dependencies
RUN npm install

# build the project
RUN npm run build:web

# Copy the entire project into the container
COPY ./dist .

#Stage 2: Nginx server
FROM nginx:1.27.2-alpine

#Copy built web application from build stage
COPY ./dist /usr/share/nginx/html

#Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80
EXPOSE 443

#Start Nginx
CMD ["nginx", "-g", "daemon off;"]