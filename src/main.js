import { Elysia } from "elysia"

import routes from "./routes"

import { PrismaClient } from "@prisma/client"

import jwt from "@elysiajs/jwt"
import { logger } from "@grotto/logysia"

new Elysia()
  .decorate("db", new PrismaClient({ log: ['query', 'error'] }))
  .use(logger())
  .use(jwt({
    name: 'jwt',
    secret: 'opala',
    exp: "7d"
  }))
  .use(routes)
  .listen(3650, ({ hostname, port }) => {
    console.log(`Running at http://${hostname}:${port}`)
  })