const banco = require("../banco");
const mysql = require('mysql');
const conn = require('../conexao');
//var add = require('./8-insertBD');
//const { connect } = require("../conexao");
//const connection = require("../conexao");

function execute(user,msg){
console.log(msg);
    if((msg.length >=1) && ((msg !="#") && (msg !="*"))){
        return["❌ Opção inválida, Responda #️⃣ para confirmar ou *️⃣  para cancelar"];
    }
    
    if(msg === "*"){
        banco.db[user].stage = 0;
        banco.db[user].itens.length = 0;
        return[
            "🚫 A Solicitação foi Cancelada \n" +
            "Obrigado por utilizar nosso atendimento Virtual."
        ];
    }
    if(msg === "#"){

            var data =[banco.db[user].itens];
            let sql="call CreateChamado ?";// INSERT INTO chamado (status,telefone,cpf, nome, assunto, topico,descricao) VALUES ?";
            conn.query(sql, [data], function (error, results, fields){
                if(error) return console.log(error);
                if(results.affectedRows =1){
                  console.log('adicionou registros!');
                }
            });

      banco.db[user].stage = 0;
      banco.db[user].itens.length = 0;

        return[
            "👏🏻👏🏻 Sua solicitação foi aberta com Sucesso e registrada com Protocolo Nº *xxxxxx* ✅ "+
            "A *SEMA* irá analizar o pedido e respondera o mais breve possivel.\n"+
            "Voce pode acompanhar o andamento da solicitação , com o numero de protocolo em todos os "+
            "nossos canais de atendimento.\n\n\n"+
            "Agradecemos por utilzar nossos serviços.\n\n"+
            "👋🏼👋🏼 Ate logo."      
        ];
    }
}
exports.execute = execute;
