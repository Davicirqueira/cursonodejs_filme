import con from "./connection.js";

//como dar um insert no BD utilizando esta function salavarFilme()
export async function salvarFilme(filme){

    let comando = `
        insert into tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
            values(, ?, ?, ?, ?)	
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