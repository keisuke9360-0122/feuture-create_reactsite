import styled from "styled-components";
import { breakpoints } from "../../../constans";

const Copucomponent = ({ className }) => (
  <div className={className}>
    <div className="box">
      <p className="text">&copy; 2021 PHOTO BOOK2</p>
    </div>
  </div>
);

const Stylecopy = styled(Copucomponent)`
  .box {
    text-align: center;
  }
  .text {
    font-size: 20px;
    color: #000000;
    @media screen and (${breakpoints.sp}) {
      font-size: 14px;
    }
  }
`;

export const Copy = (props) => {
  return <Stylecopy {...props} />;
};
