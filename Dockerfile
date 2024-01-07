# Use the official Node.js image as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port used by your Next.js app
EXPOSE 3000

# Start the app when the container runs
CMD ["npm", "start"]
