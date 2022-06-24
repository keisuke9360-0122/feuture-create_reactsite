import "./App.css";
import styled from "styled-components";
import { Mv } from "./component/Atoms/Mvimage/Mv.jsx";
import { Header } from "./component/Template_layout/defalute";
import { IndexList } from "./component/Molecules/List/IndexList";
import { HeadText } from "./component/Atoms/HeadText/HeadText";
import { Imgsingle } from "./component/Atoms/Imgsingle/Img";
import { Flex } from "./component/Molecules/Imgflex/Flex";
import { Detail_left } from "./component/Molecules/Detaile/Detail_left";
import { Detail_right } from "./component/Molecules/Detaile/Detaile_right";
export default function App() {
  return (
    <>
      <Ccontainer>
        <Header>
          <Chead_txt>PHOTO BOOK2</Chead_txt>
        </Header>
        <Mv />
        <CScontainer>
          <HeadText>
            <Cindex_title>INDEX</Cindex_title>
          </HeadText>
          <IndexList />
        </CScontainer>
        <Imgcontainer>
          <Flex />
        </Imgcontainer>
        <CScontainer>
          <Cindex_title>DETAIL</Cindex_title>
          <Dflex>
            <Fleft>
              <Detail_left />
            </Fleft>

            <Fright>
              <Detail_right />
            </Fright>
          </Dflex>
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
  padding: 50px 0 30px;
  text-align: center;
  margin-top: 50px;
`;
const Imgcontainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
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
const Dflex = styled.div`
  display: flex;
`;
const Fleft = styled.div`
  width: 40%;
`;
const Fright = styled.div`
  width: calc(100% - 40%);
`;
