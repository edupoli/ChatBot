const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");


bot.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.pushname
    );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
    console.log("Estagio "+ getStage(message.from));
    console.log(getItens(message.from));
    
  });
  client.onStateChange((state) => {
    console.log(state);
    const conflits = [
      venom.SocketState.CONFLICT,
      venom.SocketState.UNPAIRED,
      venom.SocketState.UNLAUNCHED,
    ];
    if (conflits.includes(state)) {
      client.useHere();
    }
  });
  
}

function getStage(user) {
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    return banco.db[user].stage;
  }
}

function getItens(user) {
    if (banco.db[user]) {
      //Se existir esse numero no banco de dados
      return banco.db[user].itens;
    } else {
      //Se for a primeira vez que entra e contato
      banco.db[user] = {
        stage: 0,
        itens: [],
      };
      return banco.db[user].itens;
    }
  }
