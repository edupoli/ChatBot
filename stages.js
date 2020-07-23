var stages = {
  0: {
    descricao: "Saudação Inicial",
    obj: require("./stages/0-inicio"),
  },
  1: {
    descricao: "Informa CPF",
    obj: require("./stages/1-infomaCPF"),
  },
  2: {
    descricao: "Informa o Nome",
    obj: require("./stages/2-informaNome"),
  },
  3: {
    descricao: "Confirma o Nome",
    obj: require("./stages/3-confirmaNome"),
  },
  4: {
    descricao: "Informa o Email",
    obj: require("./stages/4-informaEmail"),
  },
  5: {
    descricao: "Confirma o Email",
    obj: require("./stages/5-confirmaEmail"),
  },
  6: {
    descricao: "Apresenta Menu Principal",
    obj: require("./stages/6-menuPrincipal"),
  },
  7: {
    descricao: "Apresenta as opções dos SubMenus",
    obj: require("./stages/7-subMenus"),
  },
  8: {
    descricao: "Recebe a descrição do chamado",
    obj: require("./stages/8-descricaoChamado"),
  },
  9: {
    descricao: "Faz a confirmação antes de Gravar no BD",
    obj: require("./stages/9-finalizacao"),
  },
  10: {
    descricao: "Mensagem de sucesso",
    obj: require("./stages/10-consulta"),
  },
  

};

exports.step = stages;
