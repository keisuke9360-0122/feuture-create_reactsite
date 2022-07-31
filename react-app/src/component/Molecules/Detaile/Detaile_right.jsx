import styled from "styled-components";

import { breakpoints } from "../../../constans";

const Components = ({ className }) => (
  <div className={className}>
    <div className="lcontainer">
      <p className="list">
        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </p>
      <p className="list">
        タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル
      </p>
      <a href="#" className="link">
        オンラインストアで見る
      </a>
    </div>
  </div>
);
const Styleright = styled(Components)`
  > .lcontainer {
    padding: 0 70px 0 40px;
    @media screen and (${breakpoints.sp}) {
      padding: 0;
    }
    > .list {
      text-align: left;
      font-weight: normal;
      font-size: 18px;
      line-height: 1.6666em;
      margin-top: 0;
      @media screen and (${breakpoints.sp}) {
        font-size: 16px;
        :first-child {
          margin-top: 30px;
        }
      }
    }
    .list {
      @media screen and (${breakpoints.sp}) {
        :first-child {
          margin-top: 30px;
        }
      }
    }
    > .link {
      text-align: left;
      display: block;
      font-weight: normal;
      font-size: 18px;
      color: #000000;
      @media screen and (${breakpoints.sp}) {
        font-size: 16px;
      }
    }
  }
`;

export const Detail_right = (props) => <Styleright {...props} />;
