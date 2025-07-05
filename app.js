import dotenv from 'dotenv'
dotenv.config();

import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url'
import axios from 'axios'
import cors from '@fastify/cors'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = Fastify()
const PORT = process.env.PORT || 8080

await app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflight: true,
})

app.register(fastifyStatic, {
    root: path.join(__dirname, 'build'),
    wildcard: false,
    index: 'index.html',
})

// Proxy para GraphQL do GitHub
app.post('/api/github-graphql', async (request, reply) => {
    try {
        const res = await axios.post('https://api.github.com/graphql', request.body, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
        })
        return res.data
    } catch (error) {
        if (error.response) {
            return reply.status(error.response.status).send({ error: 'Erro na API do GitHub' })
        }
        return reply.status(500).send({ error: 'Erro interno no servidor' })
    }
})


app.listen({ port: PORT, host: '0.0.0.0' }, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`)
})
