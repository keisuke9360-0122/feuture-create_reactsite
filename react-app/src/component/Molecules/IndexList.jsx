import styled from "styled-components";
export const IndexList = () => {
  return (
    <Cul>
      <Clist>
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </Clist>
      <Clist>
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </Clist>
      <Clist>
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </Clist>
      <Clist>
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </Clist>
      <Clist>
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </Clist>
    </Cul>
  );
};
const Clist = styled.li`
  list-style: none;
`;
const Cul = styled.ul`
  border: 1px solid #000000;
  padding: 10px;
`;
