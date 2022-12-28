import { record } from "../../types/Record";
import { Board, RecordsContainer } from "./style";


const records: record[] = [
  {
    _id: "63aa07382eaa726361951396",
    nomePropriedade: "Fazenda fortuna",
    numeroCadastro: "AM862486ugvbnkiuytrf",
    nomeProdutor: "Pedro Souza",
    CPF: "951.759.830-08",
    dataMonitoramento: "2022-12-16 10:22:34",
    analista: "Elias Ribeiro",
    resultado: "LIBERADO"
  },
]

interface RecordsBoardProps {
  header: string;
  record: record[];
}

export function Records2Board(props: RecordsBoardProps) {
  function handleOpenDetail(){
    alert('Detalhe foi aberto');
  }


  return (
    <Board>
      <header>
        <strong>
          {props.header}
        </strong>
      </header>

      <RecordsContainer>
        {records.map((record) => (
          <button type="button" key={record._id} onClick={handleOpenDetail}>
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