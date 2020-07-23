const banco = require("../banco");
const cpf = require("@fnando/cpf/commonjs");

function execute(user,msg){
    if(!cpf.isValid(msg)){
        return["🚫 O CPF informado não é válido!"];
    }
    else{
        banco.db[user].itens.push(cpf.format(msg));
        banco.db[user].stage = 2;
        return["Agora informe seu Nome Completo"];
        
    }  
}

exports.execute = execute;