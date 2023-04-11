const db = require('./db.json'); //requisição do banco de dados externo.
const prompt = require("prompt-sync")(); //requisição necessaria para realizar inputs de usuário no NodeJS.

//função que realiza a pergunta ao usuário, definindo sobre qual estado esse deseja obter informações.
function pergunta() {
    let x = 0;
    let again = true
    //prompt-sync tem um problema que, qual a senteça de input é muito grande, ela se repete no console, por isso um console.log para pergunta.
    console.log("\ndigite um estado: ")
    let estado = prompt(">>");
    while (again == true) { //laço para leitura da resposta do usuário, transformando-a na posição equivalente na array do db
        for (let i = 0; i < 27; i++) {
            if (estado == db[i].sigla) {
                x = i;
                again = false
            }
        }
        if (again == true) { //check caso a resposta do usuário não seja válida
            console.log("este não é um estado valido, digite novamente: ")
            estado = prompt(">>");
        } else {
            again = false
        }
    }
    return x
}

let repetir = true;
//relatório da resposta
do {
    let resposta = pergunta();
    console.log(`Nome da UF: ${db.uf[resposta].nome}
Região: ${db.uf[resposta].regiao}
População atual: ${db.uf[resposta].populacao}
`);

    console.log("\ndeseja realizar a pesquisa de outro estado?: (s/n) ")
    let novaPergunta = prompt(">>");
    if (novaPergunta != "s") {
        repetir = false
    }
} while (repetir == true)



