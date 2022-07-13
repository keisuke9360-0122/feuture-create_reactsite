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
      <a className="link">オンラインストアで見る</a>
    </div>
  </div>
);
const Styleright = styled(Components)`
  > .lcontainer {
    padding: 0 30px;
    @media screen and (${breakpoints.sp}) {
      padding: 0;
    }
    > .list {
      text-align: left;
      font-weight: normal;
      font-size: 18px;
      line-height: 1.6666em;
      @media screen and (${breakpoints.sp}) {
        font-size: 16px;
      }
    }
    > .link {
      text-align: left;
      display: block;
      font-weight: normal;
      font-size: 18px;
      @media screen and (${breakpoints.sp}) {
        font-size: 16px;
      }
    }
  }
`;

export const Detail_right = (props) => <Styleright {...props} />;
