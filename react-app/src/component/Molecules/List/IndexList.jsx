import styled from "styled-components";
import { breakpoints } from "../../../constans";
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
  margin: 0 auto;
  letter-spacing: 0.02em;
  @media screen and (${breakpoints.pc_s}) {
  }
  @media screen and (${breakpoints.tab}) {
    max-width: 600px;
    width: 100%;
    line-height: 1.875em;
    :nth-child(n + 2) {
      margin-top: 16px;
    }
  }
  @media screen and (${breakpoints.sp}) {
    max-width: auto;
    width: 100%;
  }
`;
const Cul = styled.ul`
  width: 680px;
  border: 1px solid #000000;
  padding: 15px;
  margin: 0 auto;
  @media screen and (${breakpoints.pc_s}) {
  }
  @media screen and (${breakpoints.tab}) {
  }
  @media screen and (${breakpoints.sp}) {
    width: auto;
    text-align: left;
  }
`;
