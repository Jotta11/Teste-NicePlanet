import { useEffect, useState } from "react";
import { Record } from "../../types/Record";
import { api } from "../../utils/api";
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
        header="Fazenda da Serra" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.");
        } } />
      <RecordsBoard
        header="Fazenda Fortuna" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.");
        } } />
      <RecordsBoard
        header="Fazenda Céu Azul" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.");
        } } />
      <RecordsBoard
        header="Fazenda 3 irmãos" record={[]} onClose={function (): void {
          throw new Error("Function not implemented.");
        } } />
    </Container>
  )
};