import styled from "styled-components";

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
  border-left: 1px solid #000000;
`;
const Contents = styled.p`
  text-align: left;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.875em;
`;
const Clink = styled.a`
  text-align: left;
  display: block;
  font-weight: normal;
  font-size: 18px;
`;
