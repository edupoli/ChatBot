const mysql = require('mysql');
const conn = require('./conexao');

msg='202007171589';

function consulta(){
  let sql="SELECT * FROM chamado WHERE protocolo = ?";
  conn.query(sql, msg, function(error,results,fields){
      if(error) return console.log(error);
      else{
        return [`Resultado da Pesquisa \n\n`+
        `*Nome:* `+ results[0].nome +
        `*CPF:* `+ results[0].cpf +
        `*Status:* `+ results[0].status
];
      }
  })
}

consulta();