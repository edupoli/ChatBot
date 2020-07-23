const banco = require("../banco");
const mysql = require('mysql');
function execute(user,msg){
let dados=[];
        const connection = mysql.createConnection({
            host: "10.0.2.9",
            user: "ura",
            password: "ask123",
            database: "sema"
          });

          function getResults(){
            return new Promise(function(resolve, reject) {
              connection.query('SELECT * FROM chamado WHERE protocolo = ?', msg, (err, result)=>{
                if(err) return reject (err);
                else return resolve(result);
              });
            });
          };
            getResults().then(function(result){
               dados.push(result[0].nome,result[0].cpf,result[0].descricao,result[0].status);

                console.log(`Resultado da Pesquisa \n\n`+
                `*Nome:* `+ result[0].nome +
                `*CPF:* `+ result[0].cpf +
                `*Descrição:* `+ result[0].descricao);
                return[`teste`];
                 /*
                return[`Resultado da Pesquisa \n\n`+
                        `*Nome:* `+ result[0].nome +
                        `*CPF:* `+ result[0].cpf +
                        `*Descrição:* `+ result[0].descricao
                ];*/
                //console.log(result[0].nome,result[0].descricao);
            });
                
console.info(dados)
}
exports.execute = execute;