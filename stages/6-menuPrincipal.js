const banco = require("../banco");
function execute(user,msg){

    function checaOpcao(str,x){
        if((str >=1 )&& (str <= x) ){
          return true;
        }else{
          return false;
        }
      }

        
        if(msg === "1"){
            banco.db[user].stage = 7;
            banco.db[user].itens.push(msg);
            return[
                `*MENU ARBORIZAÇÃO*\n\n` +
                `1️⃣ - Solicitação de Poda \n` +
                `2️⃣ - Erradicação e Plantio de Arvores \n` +
                `3️⃣ - Projeto de Arborização \n` +
                `4️⃣ - Ressarcimento a danos causados por queda de Arvore \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if(msg === "2"){
            banco.db[user].stage = 7;
            banco.db[user].itens.push(msg);
            return[
                `*MENU DANOS AO MEIO AMBIENTE*\n\n` +
                `1️⃣ - Denuncia a Danos ao Meio Ambiente \n` +
                `2️⃣ - Revisão ou Cancelamento de Auto de Infraçao Ambiental \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if(msg === "3"){
            banco.db[user].stage = 7;
            banco.db[user].itens.push(msg);
            return[
                `*MENU ANIMAIS*\n\n`+
                `1️⃣ - Realizar denúncias quanto à maus tratos \n`+
                `2️⃣ - Ocorrências de animais soltos em via pública \n`+
                `3️⃣ - Informações sobre o programa Banco de Rações \n`+
                `4️⃣ - Informações sobre acolhimento de animais \n`+
                `5️⃣ - Liberação de Animais de Grande Porte \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if(msg === "4"){
            banco.db[user].stage = 7;
            banco.db[user].itens.push(msg);
            return[
                `*MENU LICENCIAMENTO*\n\n`+
                `1️⃣ - Solicitar informações sobre licenciamento ambiental \n`+
                `2️⃣ - informações sobre destinação de resíduos \n`+
                `3️⃣ - Certidão Narrativa para Licença Prévia Ambiental \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if(msg === "5"){
            banco.db[user].stage = 7;
            banco.db[user].itens.push(msg);
            return[
                `*MENU EDUCAÇÃO AMBIENTAL*\n\n`+
                `1️⃣ - Agendamento da biblioteca móvel \n`+
                `2️⃣ - Agendamento e visitas aos parques e viveiro municipal \n`+
                `3️⃣ - Agendamento de palestras e eventos \n`+
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if(msg === "6"){
            banco.db[user].stage = 10;
            banco.db[user].itens.push(msg);
            return[
                `Por favor digite o Número do Protocolo para consulta`
            ];
        }
        
        if(checaOpcao(msg,6) === false){
            return["❌ Opção inválida"];
        }
    }
    
exports.execute = execute;