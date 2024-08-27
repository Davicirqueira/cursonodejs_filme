

export default function validarNovoFilme(filmeObj){

    if(!filmeObj.nome){

        throw new Error('Nome do filme obrigatório')

    }

    if(!filmeObj.sinopse){

        throw new Error('Sinopse do filme obrigatório')

    }

    if(!filmeObj.avaliacao){

        throw new Error('Avaliação do filme obrigatório')

    }

    if(isNaN(filmeObj.avaliacao)){

        throw new Error('Avaliação do filme inválida')

    }

    if(!filmeObj.lancamento){

        throw new Error('Lançamento do filme obrigatório')

    }

    if(!filmeObj.disponivel == undefined){

        throw new Error('Disponibilidade do filme obrigatório')

    }
    
}