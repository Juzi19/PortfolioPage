FROM node:20.9-bullseye

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN npm run build

# Create sitemap and robots.txt
RUN npm run postbuild

# Expose the Next.js default port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

