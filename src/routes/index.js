import Elysia from "elysia"
import register from "./auth/register"
import login from "./auth/login"

export default new Elysia()
  .group('/auth', app => app
    .use(register)
    .use(login))