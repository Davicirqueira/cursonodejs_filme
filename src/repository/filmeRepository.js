import con from "./connection.js";

//como dar um insert no BD utilizando esta function salavarFilme()
export async function salvarFilme(filme){

    let comando = `
        insert into tb_filme (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
            values(, ?, ?, ?, ?)	
    `

    let r = await con.query(comando [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel]);
    let info = r[0];

    let idFilme = info.insertId;

    return idFilme;

}