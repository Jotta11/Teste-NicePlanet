import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1690px;
  margin: 40px auto;
  display: flex;
  gap: 20px;
`;
export const Board = styled.div`
  padding: 16px;
  border: 1px solid;
  border-color: #031537;
  border-radius: 16px;
  display:flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  box-sizing: 

  header{
    padding: 8px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
`;

export const RecordsContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;

  button{
    display:flex;
    background-color: #fff;
    border: 1px solid rgba(204,204,204,0.4);
    height: 128px;
    border-radius: 8px;
    flex-direction: column;
    text-align: left;
    

    strong{
      font-weight:500;
      color: #031537;
      padding-left: 4px;
      flex-direction: column;
    } 

    span{
      padding-left: 6px;
    }
    
  }

`;