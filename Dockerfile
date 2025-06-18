# Dockerfile

# Stage 1: Install dependencies
# Using Node.js 18-alpine as a base image, as suggested by your project's Node version requirements.
FROM node:18-alpine AS deps
WORKDIR /app

# Copy package.json and package-lock.json (if available)
# For reproducible builds, ensure package-lock.json is committed to your repository.
# If package-lock.json is not present, npm install will create/update it.
COPY package.json ./
COPY package-lock.json ./
# Using npm install as per README.md. If package-lock.json is reliably present and committed,
# 'npm ci' is generally preferred for CI environments for faster, more reliable builds.
RUN npm install

# Stage 2: Build the application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies from the 'deps' stage
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application source code
COPY . .

# Set environment variables for the build
# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application
RUN npm run build

# Stage 3: Production image
# Use a lean Node.js image
FROM node:18-alpine AS runner
WORKDIR /app

# Set environment for production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy necessary files from the builder stage
# These are the files needed to run a Next.js app started with 'next start'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# next.config.ts is compiled during the build (npm run build) and its output
# is included in the .next folder, so it doesn't need to be copied separately for 'next start'.

# Expose the port Next.js runs on (default is 3000 for npm start)
EXPOSE 3000

# Define the command to run the app
# This will use the "start": "next start" script from package.json
CMD ["npm", "start"]
