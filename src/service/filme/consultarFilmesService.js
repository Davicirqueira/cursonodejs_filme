import { consultarFilmes } from "../../repository/filmeRepository.js";

export default async function consultarFilmesService(nome){

    if(!nome){

        nome = ''
        
    }

    let registros = await consultarFilmes(nome);

    return registros;

}