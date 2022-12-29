import { Record } from "../../types/Record";
import { RecordsBoard } from "../RecordsBoard";
import { Container } from "./styles"


interface RecordsProps {
  record: [];
  detail: [];
}



export function Records() {
  return (
    <Container>
      <RecordsBoard
        header={"Fazenda da Serra"} record={[]}      />
      <RecordsBoard
        header="Fazenda da Serra" record={[]}        />
      <RecordsBoard
        header="Fazenda da Serra" record={[]}        />
      <RecordsBoard
        header="Fazenda da Serra" record={[]}       />
    </Container>
  )
};