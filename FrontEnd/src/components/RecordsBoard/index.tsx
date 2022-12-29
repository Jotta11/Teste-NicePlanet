import { useState } from "react";
import { Record } from "../../types/Record";
import { DetailModal } from "../DetailModal";
import { Records } from "../Records";
import { Board, RecordsContainer } from "./styles";


export const record: Record[] = [
  {
    id: "63aa06f42eaa726361951393",
    nomePropriedade: "Fazenda da Serra",
    numeroCadastro: "O66666666666666666666",
    nomeProdutor: "Carlos Braga",
    CPF: "882.259.670-62",
    dataMonitoramento: "2022-12-16 10:22:34",
    analista: "Celio Gomes",
    resultado: "LIBERADO",
    detalhes: [{
      analise: "De acordo com a análise de imagens mais atuais de satélite foi possível identificar que o perímetro do CAR encontra-se deslocado, fora dos limites visuais da fazenda. Aconselha-se que o produtor retifique o recibo do CAR afim de georreferenciar os limites propriedade corretamente.",
      idPropriedade: "1",
      tipoPropriedade: "",
      idProdutor: "1",
      tipoVinculo: "Proprietário"
    }]
  },
]


interface RecordsBoardProps {
  header: string;
  record: Record[];
  onClose(): void;
}

export function RecordsBoard(props: RecordsBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function handleOpenDetails(records: Record) {
    setIsModalVisible(true);
  }

  function handleCloseModal(){
    setIsModalVisible(false);
  }

  return (
    <Board>
      <DetailModal 
        visible={isModalVisible} record={[]}
        onClose = {handleCloseModal}     
             />
      <header>
        <strong>
          {props.header}
        </strong>
      </header>

      <RecordsContainer>
        {record.map((record) => (
          <button type="button" key={record.id} onClick={() => handleOpenDetails(record.detalhes)}>
            <div>
              <strong>Número Propriedade:</strong>
              <span>{record.numeroCadastro}</span>
            </div>
            <div>
              <strong>Nome Produtor:</strong>
              <span>{record.nomeProdutor}</span>
              <div>
                <strong>CPF:</strong>
                <span>{record.CPF}</span>
              </div>
              <div>
                <strong>Data:</strong>
                <span>{record.dataMonitoramento}</span>
              </div>
              <div>
                <strong>Analista:</strong>
                <span>{record.analista}</span>
              </div>
              <div>
                <strong>Resultado:</strong>
                <span>{record.resultado}</span>
              </div>
            </div>
          </button>
        ))}
      </RecordsContainer>
    </Board>
  );
}