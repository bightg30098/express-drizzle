import express from 'express'

import exampleRouter from './routes/example'

const app = express()
const port = process.env.PORT ?? '3000'
const host = process.env.HOST ?? 'localhost'

// Parse JSON bodies (as sent by API clients)
app.use(express.json())

// Mount the example router at /example
app.use('/example', exampleRouter)

// Start the express server
app.listen(Number(port), host, () => console.log(`Server is listening on http://localhost:${port}`))
