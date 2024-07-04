//Banco de dados em memoria
import { randomUUID } from "crypto";
export class databaseMemory {

    #videos = new Map()
    //Set não aceita valores duplicados
    //Map não aceita valores duplicados

    //Esse metodo cria um video
    create(video){ 
        //unique universal id 
        const videoId = randomUUID() 
        this.#videos.set(videoId, video)
    }   
    //entries trás os valores principais dos videos , o id 
    list(){
        return Array.from(this.#videos.entries())
        .map(
            (videoArray) =>{
                const id = videoArray[0]
                const data = videoArray[1] 
                return {
                    id,
                    ...data,
                }
            })
                .filter(video => {
                        if (search) {
                           return video.title.includes(search) 
                        }
                        return true 
                    })
    }

    update(id, video){
        this.#videos.set(id,video)
    }
    delete(id, ){
        this.#videos.delete(id,)
    }

}
