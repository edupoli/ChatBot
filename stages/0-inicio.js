const bot = require("../index");
const banco = require("../banco");
function execute(user,msg,contato){

    function numero(){
        var data = new Date();
        return(data.getFullYear())+("0" + (data.getMonth() + 1)).substr(-2)+("0" + data.getDate()).substr(-2)+Math.floor(1000 + Math.random() * 9000);
      }
      

    banco.db[user].stage = 1;
    var telefone = ((String(`${user}`).split('@')[0]).substr(2));
    banco.db[user].itens.push(numero());
    banco.db[user].itens.push(telefone);
    

    return[
        `Olá *${contato}* seja bem vindo ao atendimento virtual 🖥️ da SEMA.🌳\n`+
        `Para esse atendimento preciso de algumas informações.\n\n` +
        `*Vamos começar* 👋🏼\n\n Informe o seu *CPF*`
    ];
};
exports.execute = execute;