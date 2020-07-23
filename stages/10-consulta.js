const banco = require("../banco");
const mysql = require('mysql');
const conn = require('../conexao');
function execute(user,msg){
    console.log(msg);
    
    let sql="SELECT * FROM chamado WHERE protocolo = ?";
  conn.query(sql, msg, function(error,results,fields){
      if(error) return console.log(error);
      else{
          console.log(results);
        return ["Resultado da Pesquisa \n\n"+
        results[0].nome
        ];
      }
  });
}
exports.execute = execute;