import Elysia from "elysia"
import { Database } from "bun:sqlite";

export default new Elysia()
  .decorate('db', () => {
    const db = new Database("mydb.sqlite", { create: true });

    return db
  })