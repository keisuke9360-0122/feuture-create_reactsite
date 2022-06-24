import { Imgsingle } from "../../Atoms/Imgsingle/Img";
import styled from "styled-components";
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
`;
const Imgwrap = styled.div`
  width: 50%;
  margin-top: 5px;
`;
