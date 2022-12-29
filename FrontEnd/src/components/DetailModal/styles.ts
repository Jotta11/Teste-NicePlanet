import styled from "styled-components";

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;

    strong{
      font-size: 24px;
    }

    button{
    line-height: 0;
    border: 0;
    background: transparent;
   }
  }

  span{
    padding-left: 4px;
  }

  .Compra{
    display:flex;
  }
`;

export const Actions = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;


  .Comprar{
    background: #031537;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
