import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

/**
 * @see [node-postgres](https://orm.drizzle.team/docs/installation-and-db-connection/postgresql/node-postgres)
 */
const pool = new Pool({
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? '5432'),
  user: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_NAME ?? 'postgres',
})

const db = drizzle(pool, { logger: true })

export default db
