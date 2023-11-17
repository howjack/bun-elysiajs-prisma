FROM oven/bun:latest

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY src src
COPY tsconfig.json .
COPY prisma prisma

ENV NODE_ENV production
CMD ["bun", "src/main.js"]