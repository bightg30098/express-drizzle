import type { Config } from 'drizzle-kit'

/**
 * @see [Drizzle Kit Configuration files](https://orm.drizzle.team/kit-docs/conf)
 */
export default {
  schema: './src/db/schema/*',
  out: './drizzle',
} satisfies Config
