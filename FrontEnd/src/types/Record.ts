export interface Record {
  id: String;
  nomePropriedade: String;
  numeroCadastro: String;
  nomeProdutor: String;
  CPF: String;
  dataMonitoramento: String;
  analista: String;
  resultado: String;
  detalhes: {
    analise: String;
    idPropriedade: String;
    tipoPropriedade: String;
    idProdutor: String;
    tipoVinculo: String;
  }[];
};