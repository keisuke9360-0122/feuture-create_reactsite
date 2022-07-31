import styled from "styled-components";

import { breakpoints } from "../../../constans";

const Conmponents = ({ className }) => (
  <div className={className}>
    <div className="flex">
      <p className="author">著者:</p>
      <span className="contents">タイトルタイトル</span>
      <p className="author">出版社:</p>
      <span className="contents">タイトルタイトル</span>
      <p className="author">発行年:</p>
      <span className="contents">タイトルタイトル</span>
    </div>
  </div>
);
const Styleleft = styled(Conmponents)`
  .flex {
    padding-left: 50px;
    @media screen and (${breakpoints.sp}) {
      padding: 0;
  }
  .author {
    text-align: left;
    font-weight: 700;
    margin: 0;
    :nth-child(n + 2) {
      margin-top: 12px;
    }
  }
  .contents {
    text-align: left;
    font-weight: 400;
    display: block;
  }
`;

export const Detail_left = (props) => {
  return <Styleleft {...props} />;
};
