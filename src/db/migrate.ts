import { migrate } from 'drizzle-orm/node-postgres/migrator'

import db from './db'

/**
 * @see [Drizzle kit](https://orm.drizzle.team/kit-docs/quick)
 */
;(async () => {
  try {
    await migrate(db, { migrationsFolder: 'drizzle' })
  } catch (error) {
    console.error(error)
  }
})()
