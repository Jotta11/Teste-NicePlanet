import { Overlay, ModalBody, Actions } from "./styles";
import { Record } from "../../types/Record";
import closeIcon from "../../assets/images/closeIcon.svg";
import { Records } from "../Records";
import { record } from "../RecordsBoard";
import { useEffect } from "react";

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
    detalhes: [
      {
        analise:
          "De acordo com a análise de imagens mais atuais de satélite foi possível identificar que o perímetro do CAR encontra-se deslocado, fora dos limites visuais da fazenda. Aconselha-se que o produtor retifique o recibo do CAR afim de georreferenciar os limites propriedade corretamente.",
        idPropriedade: "1",
        tipoPropriedade: "",
        idProdutor: "1",
        tipoVinculo: "Proprietário",
      },
    ],
  },
];

interface RecordModalProps {
  visible: boolean;
  records: Record[];
  onClose(): void;
}

export function DetailModal({ visible, records, onClose }: RecordModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        {record.map((record) => (
          <div key={record.id}>
            <header>
              <strong>Detalhes</strong>

              <button type="button" onClick={onClose}>
                <img src={closeIcon} alt="Icone de fechar" />
              </button>
            </header>
            {record.detalhes.map((detalhe) => (
              <div className="details" key={detalhe.idPropriedade}>
                <div>
                  <strong>Análise:</strong>
                  <span>{detalhe.analise}</span>
                </div>
                <div>
                  <strong>id da propriedade:</strong>
                  <span>{detalhe.idPropriedade}</span>
                </div>
                <div>
                  <strong>Tipo Propriedade:</strong>
                  <span>{detalhe.tipoPropriedade}</span>
                </div>
                <div>
                  <strong>id do produtor:</strong>
                  <span>{detalhe.idProdutor}</span>
                </div>
                <div>
                  <strong>Tipo do Vinculo:</strong>
                  <span>{detalhe.tipoVinculo}</span>
                </div>
              </div>
            ))}
            <Actions>
              <button type="button" className="Comprar">
                <strong>Comprar</strong>
              </button>
            </Actions>
          </div>
        ))}
      </ModalBody>
    </Overlay>
  );
}
