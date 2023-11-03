import Elysia from "elysia"

import register from "./auth/register"
import login from "./auth/login"

import users from "./users"

export default new Elysia()
  .group('/auth', app => app
    .use(register)
    .use(login))

  .group('/users', app => app.use(users))