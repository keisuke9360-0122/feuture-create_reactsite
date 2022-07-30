import styled from "styled-components";
import Imgitem from "./img/photo1.jpg";
export const Imgsingle = () => {
  return (
    <Image>
      <Single src={Imgitem} alt="イメージ" />
    </Image>
  );
};
const Image = styled.div`
  padding: 0 5px;
`;
const Single = styled.img`
  object-fit: cover;
  width: 100%;
`;
