import { alterarCapaFilme } from "../../repository/filmeRepository.js";

export default async function alterarCapaFilmeService(id, caminhoImagem){

    linhasAfetadas = await alterarCapaFilme(id, caminhoImagem);

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma capa de filme foi alterada.')
        
    }

}