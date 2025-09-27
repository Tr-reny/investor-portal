FROM node:20-alpine
WORKDIR /app

# Copy lockfile (if present) and package.json first for better caching
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./

# Install deps depending on the lockfile present
RUN if [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; else npm i; fi

# Copy the rest
COPY . .

EXPOSE 3000
CMD ["npm","run","dev"]
