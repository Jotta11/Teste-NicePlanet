import { Overlay } from "./styles";

interface RecordModalProps {
  visible: boolean;
}

export function RecordModal({visible}:RecordModalProps){
  if (!visible){
    return null;
  } 
  return (
    <Overlay>
      <h1> Abóbora </h1>
    </Overlay>
  )
}