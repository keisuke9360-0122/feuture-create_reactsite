import "./App.css";
import styled from "styled-components";
import { Mv } from "./component/Atoms/Mvimage/Mv.jsx";
import { Header } from "./component/Template_layout/defalute";
import { IndexList } from "./component/Molecules/List/IndexList";
import { HeadText } from "./component/Atoms/HeadText/HeadText";
import { Flex } from "./component/Molecules/Imgflex/Flex";
import { Detail_left } from "./component/Molecules/Detaile/Detail_left";
import { Detail_right } from "./component/Molecules/Detaile/Detaile_right";
import { Copy } from "./component/Molecules/Copyright/Copyright";
import { breakpoints } from "./constans";

export default function App() {
  return (
<<<<<<< Updated upstream
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
      <Copy />
    </Ccontainer>
=======
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
>>>>>>> Stashed changes
  );
}

const Ccontainer = styled.div`
  max-width: 1120px;
  margin: 40px auto 0;
  @media screen and (${breakpoints.pc_s}) {
  }
  @media screen and (${breakpoints.tab}) {
  }
  @media screen and (${breakpoints.sp}) {
  }
`;
const CScontainer = styled.div`
  max-width: 800px;
  background: #f6f6f6;
  margin: 0 auto;
  padding: 50px 0 30px;
  text-align: center;
  margin-top: 50px;
  @media screen and (${breakpoints.sp}) {
    max-width: auto;
    padding: 12px;
    margin: 60px 16px;
  }
`;
const Imgcontainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  @media screen and (${breakpoints.sp}) {
    margin: 20px 16px;
  }
`;
const Chead_txt = styled.h1`
  font-size: 32px;
  letter-spacing: 0.16em;
  font-weight: 500;
  @media screen and (${breakpoints.tab}) {
    font-size: 24px;
    padding: 0 10px;
  }
`;
const Cindex_title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  @media screen and (${breakpoints.sp}) {
    font-size: 16px;
    margin: 20px 20px 30px;
  }
`;
const Dflex = styled.div`
  display: flex;
  @media screen and (${breakpoints.sp}) {
    display: block;
  }
`;
const Fleft = styled.div`
  width: 40%;
  @media screen and (${breakpoints.sp}) {
    width: 100%;
    margin-top: 20px;
    padding-bottom: 40px;
  }
`;
const Fright = styled.div`
  width: calc(100% - 40%);
  border-left: 1px solid #000000;
  @media screen and (${breakpoints.sp}) {
    width: 100%;
    border-top: 1px solid #000000;
    border-left: none;
  }
`;
