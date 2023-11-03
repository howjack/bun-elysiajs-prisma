import Elysia, { t } from "elysia"
import { randomUUID } from "crypto"

export default new Elysia()
  .post('/register', async ({ body, set, jwt, db }) => {
    try {
      const result = await db.user.create({
        data: {
          email: body.email,
          name: body.name,
          username: body.username,
          password: body.password,
          uuid: randomUUID()
        }
      })

      return await jwt.sign({ email: result.email })

    } catch (e) {

      set.status = 401

      return { message: e.message }
    }
  }, {
    body: t.Object({
      username: t.String(),
      name: t.String(),
      email: t.String(),
      password: t.String()
    }),
  })