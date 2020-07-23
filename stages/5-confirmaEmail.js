const banco = require("../banco");
function execute(user,msg){
    if((msg.length >=1) && ((msg !="#") && (msg !="*"))){
        return["❌ Opção inválida, Responda #️⃣ para confirmar ou *️⃣ para alterar"];
    }
    if(msg === "*"){
        banco.db[user].itens.pop(msg);
        banco.db[user].stage = 4;
        return[
            "Por favor redigite seu E-mail"
        ];
    }
    
    if(msg === "#"){
        banco.db[user].stage = 6;
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
}
exports.execute = execute;
