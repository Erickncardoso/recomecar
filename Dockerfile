# Use Node.js 20 (LTS) for building
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# removes external dependencies to keep the image small
# RUN npm prune --production # Optional for size, but Nuxt output is standalone usually

# --- Production Stage ---
FROM node:20-alpine

WORKDIR /app

# Copy the built output from the builder stage
COPY --from=builder /app/.output ./.output
# Optional: copy public if needed, though Nuxt usually bundles it
# COPY --from=builder /app/public ./public 

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
