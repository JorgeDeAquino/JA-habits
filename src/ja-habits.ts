//Importando o framework
import Fastify from "fastify";

//Importando do db
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.get('/hello', () => {

    const habits = prisma.habits.findMany({
        where: {
            title: {
                
            }
        }
    })

    return'Hello World'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('Running')
})