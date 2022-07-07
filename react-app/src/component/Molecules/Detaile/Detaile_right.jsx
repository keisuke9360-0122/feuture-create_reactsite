import styled from "styled-components";
import { breakpoints } from "../../../constans";

export const Detail_right = () => {
  return (
    <Rcontainer>
      <Contents>
        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </Contents>
      <Contents>
        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </Contents>
      <Clink>オンラインストアで見る</Clink>
    </Rcontainer>
  );
};
const Rcontainer = styled.div`
  padding: 0 30px;
  @media screen and (${breakpoints.sp}) {
    padding: 0;
  }
`;
const Contents = styled.p`
  text-align: left;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.6666em;
  @media screen and (${breakpoints.sp}) {
    font-size: 16px;
  }
`;
const Clink = styled.a`
  text-align: left;
  display: block;
  font-weight: normal;
  font-size: 18px;
  @media screen and (${breakpoints.sp}) {
    font-size: 16px;
  }
`;
