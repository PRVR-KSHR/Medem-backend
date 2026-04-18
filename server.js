import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

import contactRoutes from './routes/contactRoutes.js'
import { notFound } from './middleware/notFound.js'
import { errorHandler } from './middleware/errorHandler.js'
import { getEnv } from './config/env.js'

const app = express()

const { port: PORT, corsOrigin: CORS_ORIGIN } = getEnv()

app.use(helmet())
app.use(morgan('dev'))
app.use(cors({ origin: CORS_ORIGIN }))
app.use(express.json({ limit: '200kb' }))

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/api/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on http://localhost:${PORT}`)
})
