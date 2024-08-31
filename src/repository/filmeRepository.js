import con from "./connection.js";

//como dar um insert no BD utilizando esta function salavarFilme()
export async function salvarFilme(filme){

    let comando = `
        insert into tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
            values(?, ?, ?, ?, ?)	
    `

    let r = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    let info = r[0];

    let idFilme = info.insertId;

    return idFilme;

}


export async function consultarFilmes(nome){

    let comando = `
        SELECT  id_filme        id,
	            nm_filme        nome,		
	            vl_avaliacao    avaliacao,
	            dt_lancamento   lancamento,
	            bt_disponivel   disponivel
          FROM  tb_filme                                               
         WHERE  nm_filme like ?
    
    `

    let resposta = await con.query(comando, ['%' + nome + '%']);

    let registros = resposta[0];

    return registros;
    
}



export async function consultarFilmePorNome(nome){

    let comando = `
        SELECT  id_filme        id,
	            nm_filme        nome,		
	            vl_avaliacao    avaliacao,
	            dt_lancamento   lancamento,
	            bt_disponivel   disponivel
          FROM  tb_filme                                               
         WHERE  nm_filme = ?
    
    `

    let resposta = await con.query(comando, [nome]);

    let registros = resposta[0];

    return registros;
    
}



export async function consultarFilmePorId(id){
    
    let comando = `
        SELECT  id_filme        id,
	            nm_filme        nome,		
                ds_sinopse      sinopse,
	            vl_avaliacao    avaliacao,
	            dt_lancamento   lancamento,
	            bt_disponivel   disponivel,
                img_filme       img
          FROM  tb_filme                                               
         WHERE  id_filme = ?
    
    `

    let resposta = await con.query(comando, [id]);

    let registros = resposta[0];

    return registros;

}

//primeiro contato com o affectedRows, função que conta quantas linhas serão afetadas/aletradas.
export async function alterarFilme(filme, id){

    let comando = `
        UPDATE tb_filme
            SET nm_filme = ? ,
                ds_sinopse = ? ,    
                vl_avaliacao = ? ,
                dt_lancamento = ? ,
                bt_disponivel = ?
            WHERE id_filme = ?
    `

    let resposta = await con.query(comando, [
        filme.nome, 
        filme.sinopse, 
        filme.avaliacao, 
        filme.lancamento, 
        filme.disponivel, 
        id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows; //Mostra quantas linhas serão afetadas neste upadte. 

    return linhasAfetadas;

}

export async function deletarFilme(id){

    let comando = `
        DELETE FROM tb_filme where id_filme = ?
    `

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows; //a mesma função que ALTERA também é usada para DELETAR.

    return linhasAfetadas;

}


export async function alterarCapaFilme(id, caminho){

    let comando = `
    UPDATE tb_filme
        SET img_filme = ? 
        WHERE id_filme = ?              
    `
 
    let resposta = con.query(comando, [caminho, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}