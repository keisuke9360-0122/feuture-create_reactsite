import "./App.css";
import styled from "styled-components";
import { Mv } from "./component/Atoms/Mvimage/Mv.jsx";
import { Header } from "./component/Template_layout/defalute";
import { IndexList } from "./component/Molecules/IndexList";
import { HeadText } from "./component/Atoms/HeadText/HeadText";
export default function App() {
  return (
    <>
      <Ccontainer>
        <Header>
          <Chead_txt>PHOTO BOOK2</Chead_txt>
        </Header>
        <Mv></Mv>
        <CScontainer>
          <HeadText>
            <Cindex_title>INDEX</Cindex_title>
          </HeadText>
          <IndexList></IndexList>
        </CScontainer>
      </Ccontainer>
    </>
  );
}
const Ccontainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;
const CScontainer = styled.div`
  max-width: 800px;
  background: #f6f6f6;
  margin: 0 auto;
  padding: 20px 50px;
  text-align: center;
`;
const Chead_txt = styled.h1`
  font-size: 32px;
  letter-spacing: 0.16em;
  font-weight: 500;
`;
const Cindex_title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
