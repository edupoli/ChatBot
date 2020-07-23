const banco = require("../banco");
function execute(user,msg){
    banco.db[user].itens.push(msg);
    banco.db[user].stage = 9;
    
    return[
        "✅ Ok tudo certo para abertura da sua solicitação 👋🏼👋🏼\n"+
        "Digite #️⃣ para confirmar ou *️⃣  caso não queira mais abrir "+
        "a solicitação."
    ];
}
exports.execute = execute;