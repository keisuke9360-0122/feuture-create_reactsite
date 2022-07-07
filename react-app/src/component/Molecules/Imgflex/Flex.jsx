import { Imgsingle } from "../../Atoms/Imgsingle/Img";
import styled from "styled-components";
import { breakpoints } from "../../../constans";
export const Flex = () => {
  return (
    <ImgFlex>
      <Imgwrap>
        <Imgsingle />
      </Imgwrap>
      <Imgwrap>
        <Imgsingle />
      </Imgwrap>
      <Imgwrap>
        <Imgsingle />
      </Imgwrap>
      <Imgwrap>
        <Imgsingle />
      </Imgwrap>
    </ImgFlex>
  );
};

const ImgFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  @media screen and (${breakpoints.pc_s}) {
  }
  @media screen and (${breakpoints.tab}) {
  }
  @media screen and (${breakpoints.sp}) {
    display: block;
  }
`;
const Imgwrap = styled.div`
  width: 50%;
  margin-top: 5px;
  @media screen and (${breakpoints.pc_s}) {
  }
  @media screen and (${breakpoints.tab}) {
  }
  @media screen and (${breakpoints.sp}) {
    width: 100%;
    :nth-child(n + 2) {
      margin-top: 16px;
    }
  }
`;
