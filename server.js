import { fastify } from "fastify";

import { databaseMemory } from './database-postgres.js';
    const server = fastify()

    const database = new databaseMemory()

    //Query Parameters
    //Rotas 
        //Criar _Video
       
        server.post('/videos', async(request, reply)=>{
            //Request body Enviar um corpo sobre os dados de um formulário
        const {title, description,duration} = request.body

          await  database.create({
                title: title,
                description : description,
                duration : duration,
            })

            // statusCode : Apresenta o resultado da Requisiçãpo
            //console.log(database.list())

            return reply.status(201).send()
        })

        server.get('/videos', (request)=>{
                const search = request.query.search
                     
                    const videos = database.list(search)
                   
                    return videos
        })

        //Atualizar um video com id pelo Route Parameter
        server.put('/videos/:id', async (request, reply)=>{
              //Request body Enviar um corpo sobre os dados de um formulário
           const {title, description,duration} = request.body

            const videoId = request.params.id

          await  database.update(videoId,{
                title,
                description,
                duration
            })

            return reply.status(204).send
        })

        //Deletar um video com id pelo Route Parameter
        server.delete('/videos/:id', async (request,reply)=>{
            const videoId = request.params.id
          await  database.delete(videoId)

            return reply.status(204).send()

        })
        //CRUD



server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})
