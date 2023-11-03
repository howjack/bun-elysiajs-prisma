import Elysia, { t } from 'elysia'

export default new Elysia()
  .post('/login', async ({ body, set, jwt, db }) => {
    try {
      const result = await db.user.findFirst({
        where: {
          email: body.email
        }
      })

      if (!result || result.password !== body.password) throw Error("Usuário ou senha incorretas")

      return await jwt.sign({ email: result.email })

    } catch (e) {

      set.status = 401

      return { message: e.message }
    }
  }, {
    body: t.Object({
      email: t.String(),
      password: t.String()
    }),
  })
