import { Records2Board } from "../Records2Board"
import { Container} from "./style"

export function Records2() {
  return (
    <Container>
     <Records2Board 
        header="Fazenda Prosperidade" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.")
        } }     />
     <Records2Board 
        header="Fazenda Céu azul" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.")
        } }     />
     <Records2Board 
        header="Fazenda Princesinha do lago" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.")
        } }     />
     <Records2Board 
        header="Fazenda da Serra" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.")
        } }     />
    </Container>
  )
}