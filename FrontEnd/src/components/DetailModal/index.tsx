import { Overlay, ModalBody } from "./styles";
import { Record } from "../../types/Record";
import closeIcon from '../../assets/images/closeIcon.svg';
import { Records } from "../Records";
import { record } from "../RecordsBoard";


interface RecordModalProps {
  visible: boolean;
  record: Record[] ;
}

export function DetailModal({ visible,record }: RecordModalProps) {
  if (!visible) {
    return null;
  }
  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Detalhes</strong>

          <button type="button">
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header>

        <div className="details">
        <div>
              <strong>Análise:</strong>
              <span>{record.}</span>
            </div>
            <div>
              <strong>id da propriedade:</strong>
              <span>1</span>
              <div>
                <strong>Tipo Propriedade:</strong>
                <span></span>
              </div>
              <div>
                <strong>id do produtor:</strong>
                <span>1</span>
              </div>
              <div>
                <strong>Tipo do Vinculo:</strong>
                <span>Proprietário</span>
              </div>
            </div>
            <button type="button"className="Compra">Comprar</button>
        </div>
      </ModalBody>
    </Overlay>
  )
}