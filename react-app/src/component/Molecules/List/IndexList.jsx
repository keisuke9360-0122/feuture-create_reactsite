import styled from "styled-components";

import { breakpoints } from "../../../constans";

const Conponets = ({ className }) => (
  <div className={className}>
    <ul className="ul">
      <li className="list">
        1.タイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        2.タイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        3.タイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        4.タイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        5.タイトルタイトルタイトルタイトルタイトルタイトル
      </li>
    </ul>
  </div>
);

const Stylelist = styled(Conponets)`
  .ul {
    width: 680px;
    border: 1px solid #000000;
    padding: 15px;
    margin: 0 auto;
    @media screen and (${breakpoints.tab}) {
      width: auto;
    }
    @media screen and (${breakpoints.sp}) {
      width: auto;
      padding: 27px 44px 30px 20px;
    }
    .list {
      list-style: none;
      margin: 0 auto;
      letter-spacing: 0.02em;
      @media screen and (${breakpoints.tab}) {
        max-width: 600px;
        width: 100%;
        line-height: 1.875em;
        text-indent: -1em;
        padding-left: 1em;
        :nth-child(n + 2) {
          margin-top: 16px;
        }
      }
      @media screen and (${breakpoints.sp}) {
        text-indent: -0.7em;
        padding-left: 0.6em;
        text-align: left;
      }
    }
  }
`;

export const IndexList = (props) => <Stylelist {...props} />;
