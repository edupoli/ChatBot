const banco = require("../banco");
function execute(user,msg){
    banco.db[user].itens.push(msg);
    banco.db[user].stage = 3;
    
    return[
        "O nome digitado é\n*"+ msg +"*\nEsta correto ?\n"+
        "Digite #️⃣ para confirmar ou *️⃣  para corrigir" 
    ];
    
}
exports.execute = execute;