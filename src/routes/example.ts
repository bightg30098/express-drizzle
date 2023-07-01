import express from 'express'
import { eq } from 'drizzle-orm'

import db from '@/db/db'
import { example, Example } from '@/db/schema/example'

const exampleRouter = express.Router()

/**
 * @see [Express routing](https://expressjs.com/en/guide/routing.html)
 * @see [Drizzle ORM CRUD](https://orm.drizzle.team/docs/crud)
 */

/**
 * [GET] /example
 * This route is for querying all examples or
 * querying examples by query parameter `name`
 * e.g.
 * ?name=foo
 */
exampleRouter.get('/', async (req, res, next) => {
  /**
   * req.query is an object of the query parameters
   * in the URL /example?foo=bar
   * [foo] is the name of the query parameter, [bar] is the value
   * you can name it whatever you want like /example?baz=qux
   */
  const { name } = req.query

  const myExamples = await db
    .select()
    .from(example)
    .where(name ? eq(example.name, String(name)) : undefined)

  res.json({ data: myExamples })
})

/**
 * [GET] /example/1
 * This route is for querying an example by path parameter `id`
 */
exampleRouter.get('/:id', async (req, res, next) => {
  /**
   * req.params.id is the value of the id parameter
   * in the URL /example/:id
   * [id] is the name of the parameter
   * your can name it whatever you want like /example/:foo
   */
  const { id } = req.params

  const myExample = await db
    .select()
    .from(example)
    .where(eq(example.id, Number(id)))

  res.json({ data: myExample })
})

/**
 * [POST] /example
 * This route is for creating a new example with payload
 * e.g.
 * { "name": "foo", "description": "bar", "count": 1, "price": 1.99 }
 */
exampleRouter.post('/', async (req, res, next) => {
  /**
   * req.body is an object of the request body
   */
  const { name, description, count, price } = req.body as Example

  const newExample = await db
    .insert(example)
    .values({
      name,
      description,
      count,
      price,
    })
    .returning()

  res.json({ data: newExample })
})

/**
 * [PUT] /example/1
 * This route is for updating an example by path parameter `id` with payload
 * e.g.
 * { "name": "bar", "description": "foo", "count": 9, "price": 9.99 }
 */
exampleRouter.put('/:id', async (req, res, next) => {
  /**
   * req.params.id is the value of the id parameter
   * req.body is an object of the request body
   */
  const { id } = req.params

  const { name, description, count, price } = req.body as Example

  const nextExample = await db
    .update(example)
    .set({
      name,
      description,
      count,
      price,
    })
    .where(eq(example.id, Number(id)))
    .returning()

  res.json({ data: nextExample })
})

/**
 * [DELETE] /example/1
 * This route is for deleting an example by path parameter `id`
 */
exampleRouter.delete('/:id', async (req, res, next) => {
  /**
   * req.params.id is the value of the id parameter
   */
  const { id } = req.params

  const deletedExample = await db
    .delete(example)
    .where(eq(example.id, Number(id)))
    .returning()

  res.json({ data: deletedExample })
})

export default exampleRouter
