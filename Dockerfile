# Stage 1: Build Phase
# Light-weight alpine image use kar rahe hain attack surface kam karne ke liye
FROM node:20-alpine AS builder

WORKDIR /app

# Pehle sirf dependencies copy kar rahe hain (Caching optimize karne ke liye)
COPY package*.json ./

# Vulnerable versions install honge jo humne package.json mein dale thay
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Production Phase (Secure & Hardened)
FROM node:20-alpine AS runner

WORKDIR /app

# Security Best Practice: Application ko root user se nahi chalana chahiye
# Hum aik dedicated 'devsecops_user' bana rahe hain
RUN addgroup -S securitygroup && adduser -S devsecops_user -G securitygroup

# Sirf zaroori files build stage se copy kar rahe hain
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# User switch kar rahe hain
USER devsecops_user

EXPOSE 3000

# Next.js start karne ki command
CMD ["npm", "start"]
