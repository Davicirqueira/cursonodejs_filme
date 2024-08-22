import { Router } from "express";
import { salvarFilme } from "../repository/filmeRepository.js";

const endpoints = Router()


endpoints.post('/filme', async (req, resp) => {

    let filmeObj = req.body

    let id = await salvarFilme(filmeObj)

    resp.send({

        id: id
    })

})


export default endpoints