import mysql from 'mysql2/promise';

/*con = conection; como as vezes a conexão pode demorar alguns segundos, introduzimos o "await"

informações sensíveis fivam no arquivo .env; EXEMPLO: nome do BD, nome do usuário, senha, 
endereço da máquina.
*/

let con = await mysql.createConnection({

    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB

})


console.log('-> Conexão com BD realizada!')

export default con


/* esse arquivo connection pode ficar cada vez mais complexo, mas como estamos dando os primeiros passo
estamos criando de maneira mais simples. conforme avançamos vamos incrementar cada vez mais detalhes a está
conexão.

EXEMPLOS DE COMPLEXIDADE DA VARIAVEL CONNECTION: 
--Garantia de perda de conexão.
--Verificação se a conexão está aberta/disponível ou não.
--Voltar uma conexão caso ela caia.
--Criar e recriar a conexão.
*/



