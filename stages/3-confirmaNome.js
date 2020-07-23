const banco = require("../banco");
function execute(user,msg){
    if((msg.length >=1) && ((msg !="#") && (msg !="*"))){
        return["❌ Opção inválida, Responda #️⃣ para confirmar ou *️⃣ para alterar"];
    }
    if(msg === "*"){
        banco.db[user].itens.pop(msg);
        banco.db[user].stage = 2;
        return[
            "Por favor redigite seu nome completo"
        ];
    }
    
    if(msg === "#"){
        banco.db[user].stage = 4;
        return[
            `📬 Informe um e-mail\n`+
            `É importante que seja um email *válido* pois você sera receberá a resposta por email 📧`
        ];
    }
}
exports.execute = execute;
