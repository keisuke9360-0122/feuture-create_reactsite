import styled from "styled-components";
import { breakpoints } from "../../../constans";

const Conponets = ({ className }) => (
  <div className={className}>
    <ul className="ul">
      <li className="list">
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </li>
      <li className="list">
        1.タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </li>
    </ul>
  </div>
);

const Stylelist = styled(Conponets)`
  > .ul {
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
    > .list {
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
    }
  }
`;

export const IndexList = (props) => <Stylelist {...props} />;
