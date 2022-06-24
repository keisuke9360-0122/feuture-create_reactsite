import styled from "styled-components";

export const Detail_left = () => {
  return (
    <div>
      <Author>著者</Author>
      <Contents>タイトルタイトル</Contents>
      <Author>出版社</Author>
      <Contents>タイトルタイトル</Contents>
      <Author>発行年</Author>
      <Contents>タイトルタイトル</Contents>
    </div>
  );
};
const Author = styled.p`
  text-align: left;
  font-weight: 700;
  margin: 0;
`;
const Contents = styled.span`
  text-align: left;
  font-weight: 400;
  display: block;
`;
