import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = Fastify()

const PORT = process.env.PORT || 3000

app.register(fastifyStatic, {
    root: path.join(__dirname, 'build'),
    wildcard: false,
    index: 'index.html',
})

app.listen({ port: PORT, host: '0.0.0.0' }, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`)
})
