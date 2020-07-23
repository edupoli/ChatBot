const banco = require("../banco");
const mysql = require('mysql');
const conn = require('../conexao');
function execute(user,msg){
    function checaOpcao(str,x){
        if((str >=1 )&& (str <= x) ){
          return true;
        }else{
          return false;
        }
      }
      if(msg === "#"){
        banco.db[user].stage = 6;
        banco.db[user].itens.pop(msg);
        return[
            `Sobre qual assunto você deseja atendimento ? \n` +
            `Por favor *escolha uma opção:*\n\n` +
            `*MENU PRINCIPAL*\n` +
            `🌳 *1* - Arborização Urbana. \n` +
            `🔥 *2* - Danos ao Meio Ambiente. \n` +
            `🐴 *3* - Animais. \n` +
            `📜 *4* - Licenciamento Ambiental. \n` +
            `📚 *5* - Atividades de Educação Ambiental. \n`+
            `🔎 *6* - Consultar o Status de um Protocolo.`
        ];
      }
      if(banco.db[user].itens[5] === "6"){
        
            var dados;
            function seleconar (dado, callback) {
            conn.query("SELECT * FROM chamado WHERE protocolo=?",dado, function (err, result, fields) {
              if (err) throw err;
              return callback(result[0].cpf);
            });
        };
          seleconar(msg, function(result){
            dados = result[0].nome;
            console.log("dentro"+dados);
            });
          console.log(dados);
          
      }
      if((checaOpcao(msg,4) === true) && (banco.db[user].itens[5] === "1")){
            banco.db[user].itens.push(msg);
            banco.db[user].stage = 8;
            return[
                `✍🏼 Descreva agora sua solicitação,\n`+ 
                `procure ser o mais objetivo e conciso possível`
            ];
        }
        else {
            if((checaOpcao(msg,4) === false) && (banco.db[user].itens[5] === "1")){
                return["❌ Opção inválida"];
            }
        }
      if((checaOpcao(msg,2) === true) && (banco.db[user].itens[5] === "2")){
            banco.db[user].itens.push(msg);
            banco.db[user].stage = 8;
            return[
                `✍🏼 Descreva agora sua solicitação,\n`+ 
                `procure ser o mais objetivo e conciso possível`
            ];
        }
        else {
            if((checaOpcao(msg,2) === false) && (banco.db[user].itens[5] === "2")){
                return["❌ Opção inválida"];
            }
        }
     if((checaOpcao(msg,5) === true) && (banco.db[user].itens[5] === "3")){
            banco.db[user].itens.push(msg);
            banco.db[user].stage = 8;
            return[
                `✍🏼 Descreva agora sua solicitação,\n`+ 
                `procure ser o mais objetivo e conciso possível`
            ];
        }
        else{
            if((checaOpcao(msg,5) === false) && (banco.db[user].itens[5] === "3")){
                return["❌ Opção inválida"];
            }
        }
     if((checaOpcao(msg,3) === true) && (banco.db[user].itens[5] === "4")){
            banco.db[user].itens.push(msg);
            banco.db[user].stage = 8;
            return[
                `✍🏼 Descreva agora sua solicitação,\n`+ 
                `procure ser o mais objetivo e conciso possível`
            ];
        }
    else{
        if((checaOpcao(msg,3) === false) && (banco.db[user].itens[5] === "4")){
            return["❌ Opção inválida"];
        }
    }
     if((checaOpcao(msg,3) === true) && (banco.db[user].itens[5] === "5")){
            banco.db[user].itens.push(msg);
            banco.db[user].stage = 8;
            return[
                `✍🏼 Descreva agora sua solicitação,\n`+ 
                `procure ser o mais objetivo e conciso possível`
            ];
        }
    else{
        if((checaOpcao(msg,3) === false) && (banco.db[user].itens[5] === "5")){
            return["❌ Opção inválida"];
        }
    }
}

exports.execute = execute;