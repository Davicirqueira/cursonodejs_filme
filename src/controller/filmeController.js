import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";

import { Router } from "express";
const endpoints = Router()


endpoints.post('/filme', async (req, resp) => {

    try {

        let filmeObj = req.body

        let id = await salvarFilmeService(filmeObj);
    
        resp.send({
    
            id: id
            
        })
        
    } 
    catch (err) {
        logError(err)
        resp.status(400).send(criarErro(err))
    }
        
})


endpoints.get('/filme', async (req, resp) => {

    try {
        
        let nome = req.query.nome

        let registros = await consultarFilmesService(nome)

        resp.send(registros);

    } 
    catch (err){
        logError(err)
        resp.status(400).send(criarErro(err))
    }
    
})


export default endpoints