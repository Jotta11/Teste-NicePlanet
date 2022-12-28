import { useState } from "react";
import { record } from "../../types/Record";
import { RecordModal } from "../RecordModal";
import { Records } from "../Records";
import { Board, RecordsContainer } from "./styles";


const records: record[] = [
  {
    _id: "63aa06f42eaa726361951393",
    nomePropriedade: "Fazenda da Serra",
    numeroCadastro: "O66666666666666666666",
    nomeProdutor: "Carlos Braga",
    CPF: "882.259.670-62",
    dataMonitoramento: "2022-12-16 10:22:34",
    analista: "Celio Gomes",
    resultado: "LIBERADO"
  },
]

interface RecordsBoardProps {
  header: string;
  record: record[];
}

export function RecordsBoard(props: RecordsBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenDetail(){
    setIsModalVisible(true);
  }


  return (
    <Board>
      <RecordModal visible={isModalVisible}/>
      <header>
        <strong>
          {props.header}
        </strong>
      </header>

      <RecordsContainer>
        {records.map((record) => (
          <button type="button" key={record._id}onClick={handleOpenDetail}>
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