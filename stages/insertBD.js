const banco = require("../banco");
const mysql = require('mysql');
const conn = require('../conexao')

const getName = () =>{
  return 'Eduardo';
};

let conexao=mysql.createConnection({
  host:"10.0.2.9",
  user:"ura",
  password:"ask123",
  database:"sema",
  port:"3306"
});
conexao.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
})

        
  const  inserir =() =>{
        let sql="INSERT INTO chamado (telefone,cpf, nome, assunto, topico,"+
                "  descricao) VALUES ?";
            var data =[banco.db[user].itens];
    
        conn.query(sql, [data], function (error, results, fields){
          if(error) return console.log(error);
          conn.end();
          if(results.affectedRows =1){

            console.log('adicionou registros!');
            banco.db[user].stage = 10;
          }
      });
    }
module.exports.getName = getName;
module.exports.inserir=inserir;