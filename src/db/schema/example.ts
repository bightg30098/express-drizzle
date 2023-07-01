import { InferModel } from 'drizzle-orm'
import { pgTable, serial, text, varchar, integer, date, doublePrecision } from 'drizzle-orm/pg-core'

/**
 * @see [SQL schema declaration](https://orm.drizzle.team/docs/sql-schema-declaration)
 * @see [PostgreSQL column types](https://orm.drizzle.team/docs/column-types/pg)
 */
export const example = pgTable('example', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  description: text('description'),
  count: integer('count'),
  price: doublePrecision('price'),
  created_at: date('created_at').defaultNow(),
  updated_at: date('updated_at').defaultNow(),
})

// return type when queried
export type Example = InferModel<typeof example>

// insert type
export type NewExample = InferModel<typeof example, 'insert'>

/**
 * !IMPORTANT
 * After you have defined or updated your schema,
 * You can run the following command to commit your changes to the database:
 *
 * ```bash
 * pnpm migrate
 * ```
 *
 * @see [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)
 */
