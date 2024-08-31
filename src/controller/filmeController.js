import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmePorIdService from "../service/filme/consultarFilmePorIdService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";
import alterarCapaFilmeService from "../service/filme/alterarCapaFilmeservice.js";

//importando multer
import multer from "multer";


import { Router } from "express";
const endpoints = Router()

//Inserindo/salvando um novo filme
endpoints.post('/filme', async (req, resp) => {

    try {

        let filmeObj = req.body;

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


//Consultando os filmes(gerais), nome é opcional
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

//Consultando os filmes por ID
endpoints.get('/filme/:id', async (req, resp) => {

    try {
        
        let id = req.params.id;

        let filme = await consultarFilmePorIdService(id)

        resp.send(filme);

    } 
    catch (err){
        logError(err)
        resp.status(400).send(criarErro(err))
    }
    
})

//Alterando os filmes
endpoints.put('/filme/:id', async (req, resp) => {

    try{

        let filmeObj = req.body

        let id = req.params.id

        //processamento (service)
        await alterarFilmeService(filmeObj, id)

        //saída response
        resp.status(204).send()

    }
    catch(err){
        logError(err)
        resp.status(400).send(criarErro(err))
    }

})

//Deletando os filmes.
endpoints.delete('/filme/:id', async (req, resp) => {

    try {
        
        //entrada
        let id = req.params.id;

        //processamento (service)
        await  deletarFilmeService(id); //como a function não tem um retorno, nao é preciso guarda-lá em uma variavél. Serve para delete e update.

        //saída response
        resp.status(204).send();
    } 
    catch (err){
        logError(err)
        resp.status(400).send(criarErro(err))
    }
} )



//single: sozinho, apenas um arquivo
let uploadCapa = multer({dest: './storage/capa'});
endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {

    try{

        //entradas
        let id = req.params.id;
        let caminhoImagem = req.file.path;
        
        //processamento (service)
        await alterarCapaFilmeService(id, caminhoImagem);

        //saída response
        resp.status(204).send();
        
    }
    catch(err){
        logError(err)
        resp.status(400).send(criarErro(err))
    }

})

export default endpoints