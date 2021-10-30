import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(162deg, #01b188, #0183cb);
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 100%;
  }
`;

export const Header = styled.div`
  display: block;
  height: 5rem;
  padding: 5rem 0 5rem 3rem;

  background-image: url("https://yardim.com.br/images/logo-yardim-branco.png");
  background-repeat: no-repeat;
`;

export const FormLayout = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: #fff;
  text-transform: uppercase;
`;

export const Input = styled.textarea`
  width: 200%;
  height: 25rem;
  color: #000;
  background-color: rgba(240, 255, 255, 0.7);
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  margin-bottom: 0.5em;
  overflow: auto;

  ::-webkit-scrollbar-track {
    background-color: rgba(240, 255, 255, 0.7);
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #dfe6e9;
  }

  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(162deg, #01b188, #0183cb);
  }

  @media (max-width: 1200px) {
    width: 110%;
    height: 25rem;
  }
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: #fff;
  text-transform: uppercase;
`;

export const ContainerCvs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 50px auto;
`;

export const BoxResult = styled.div`
  padding: 0.5em;
  color: #000;
  background-color: rgba(240, 255, 255, 0.7);
  border: none;
  border-radius: 3px;
  width: 200%;
  height: 25rem;
  margin-bottom: 0.5em;
  overflow: auto;

  ::-webkit-scrollbar-track {
    background-color: rgba(240, 255, 255, 0.7);
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 7px;
    background-color: #dfe6e9;
  }

  ::-webkit-scrollbar-thumb {
    background-image: linear-gradient(162deg, #01b188, #0183cb);
  }

  @media (max-width: 1200px) {
    width: 110%;
    height: 25rem;
  }
`;

export const Name = styled.h4`
  margin-bottom: 0.5em;
  color: #fff;
  text-transform: uppercase;
`;

export const MessageCvs = styled.h4`
  margin-bottom: 0.5em;
  color: #fff;
  text-transform: uppercase;
`;

export const ButtonConverter = styled.button`
  display: block;
  height: 2.5rem;
  width: 125px;
  background-image: linear-gradient(-162deg, #01b188, #0183cb);
  color: #fff;
  border-radius: 5rem;
  border: none;
  padding: 0.25em 1em;
  cursor: pointer;
  margin: 50px auto;
  border: 0.1rem solid #fff;

  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 12px;

  transition: 0.3s;
  &:hover {
    filter: brightness(125%);
  }

  @media (max-width: 1200px) {
    position: absolute;
    top: 43rem;
    left: 34%;
  }
`;

export const ClearButton = styled.button`
  display: block;
  height: 2rem;
  width: 90px;
  background-image: linear-gradient(-162deg, #01b188, #0183cb);
  color: #fff;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  border: 0.1rem solid #fff;

  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 12px;

  transition: 0.3s;
  &:hover {
    filter: brightness(125%);
  }
`;
