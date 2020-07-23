const banco = require("../banco");
var validator = require('validator');

function execute(user,msg){
    if(!validator.isEmail(msg)){
        return["🚫 O E-mail informado não é válido!"];
    }
    else{
        banco.db[user].itens.push(msg);
        banco.db[user].stage = 5;
        return[
            "O E-mail digitado é\n*"+ msg +"*\nEsta correto ?\n"+
            "Digite #️⃣ para confirmar ou *️⃣  para corrigir" 
        ];
        
    }  
}

exports.execute = execute;