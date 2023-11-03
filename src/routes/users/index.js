import Elysia from "elysia"

export default new Elysia()
  .get('', async ({ db, set }) => {
    try {

      return await db.user.findMany()

    } catch (e) {

      set.status = 401

      return { message: e.message }
    }
  })