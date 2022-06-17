import styled from "styled-components";
import Image from "./img/mainvisual.jpg";
export const Mv = (props) => {
  // const { children } = props;
  return (
    <Imgbox>
      <Img src={Image} />
    </Imgbox>
  );
};
const Imgbox = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
