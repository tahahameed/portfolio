#Base Image
FROM node:18-slim

LABEL maintainer="taha-hameed"

# Set the working directory in the container
WORKDIR /app

#COPY package*.json ./


#/app/
COPY . .

RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app. CMD can be overridden when starting the container
CMD npm run dev