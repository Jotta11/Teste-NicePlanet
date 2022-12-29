import { useState } from "react";
import { Record } from "../../types/Record";
import { DetailModal } from "../DetailModal";
import { Board, RecordsContainer } from "./style";


const records: Record[] = [
  {
    id: "63aa07382eaa726361951396",
    nomePropriedade: "Fazenda fortuna",
    numeroCadastro: "AM862486ugvbnkiuytrf",
    nomeProdutor: "Pedro Souza",
    CPF: "951.759.830-08",
    dataMonitoramento: "2022-12-16 10:22:34",
    analista: "Elias Ribeiro",
    resultado: "LIBERADO",
    detalhes:[{
      analise: "De acordo com a análise de imagens mais atuais de satélite foi possível identificar que o perímetro do CAR encontra-se deslocado, fora dos limites visuais da fazenda. Aconselha-se que o produtor retifique o recibo do CAR afim de georreferenciar os limites propriedade corretamente.",
      idPropriedade: "1",
      tipoPropriedade: "",
      idProdutor: "1",
      tipoVinculo: "Proprietário"
    }],
  },
]

interface RecordsBoardProps {
  header: string;
  record: Record[];
  onClose(): void;
}

export function Records2Board(props: RecordsBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenDetail(){
    setIsModalVisible(true);
  }

  function handleCloseModal(){
    setIsModalVisible(false);
  }


  return (
    <Board>
      <DetailModal visible={isModalVisible} record={[]} onClose={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <header>
        <strong>
          {props.header}
        </strong>
      </header>

      <RecordsContainer>
        {records.map((record) => (
          <button type="button" key={record.id} onClick={handleOpenDetail}>
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