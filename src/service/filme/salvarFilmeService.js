
import { salvarFilme, consultarFilmePorNome } from "../../repository/filmeRepository.js";
import {validarNovoFilme, validarFilmeIgual} from "../../validation/filme/filmeValidation.js";

export default async function salvarFilmeService(filmeObj){

    // validação de campos obrigatórios
    validarNovoFilme(filmeObj)

    // busca filmes com o mesmo nome
    let registros = await consultarFilmePorNome(filmeObj.nome) //acessa o nome do filme q está no objeto.

    // valida se existem filmes com o mesmo nome
    validarFilmeIgual(registros) //filtra para ver se já existem filems com o mesmo nome.

    // lógica de negócio
    let id = await salvarFilme(filmeObj)

    return id;

}