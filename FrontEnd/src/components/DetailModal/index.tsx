import { Overlay, ModalBody, Actions } from "./styles";
import { Record } from "../../types/Record";
import closeIcon from '../../assets/images/closeIcon.svg';
import { Records } from "../Records";
import { record } from "../RecordsBoard";
import { useEffect } from "react";





interface RecordModalProps {
  visible: boolean;
  record: Record[];
  onClose(): void;
}

export function DetailModal({ visible, record, onClose }: RecordModalProps) {

  useEffect(() => {

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


  if (!visible) {
    return null;
  }
  return (
    <Overlay>
      <ModalBody>
        <><header>
          <strong>Detalhes</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Icone de fechar" />
          </button>
        </header><div className="details" key={record.id}>
            <div>
              <strong>Análise:</strong>
              <span>De acordo com a análise de imagens mais atuais de satélite foi possível identificar que o perímetro do CAR encontra-se deslocado, fora dos limites visuais da fazenda. Aconselha-se que o produtor retifique o recibo do CAR afim de georreferenciar os limites propriedade corretamente.,</span>
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
          </div></>
        <Actions>
          <button type="button" className="Comprar">
            <strong>Comprar</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  )
}