import styled from "styled-components";

import { Imgsingle } from "../../Atoms/Imgsingle/Img";
import { breakpoints } from "../../../constans";

const Components = ({ className }) => (
  <div className={className}>
    <div className="flex_items">
      <div className="item">
        <Imgsingle />
      </div>
      <div className="item">
        <Imgsingle />
      </div>
      <div className="item">
        <Imgsingle />
      </div>
      <div className="item">
        <Imgsingle />
      </div>
    </div>
  </div>
);
const Styleflex = styled(Components)`
  > .flex_items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;

    > .item {
      width: 50%;
      margin-top: 5px;
      @media screen and (${breakpoints.sp}) {
        width: 100%;
        :nth-child(n + 2) {
          margin-top: 16px;
        }
      }
    }
  }
`;

export const Flex = (props) => <Styleflex {...props} />;
