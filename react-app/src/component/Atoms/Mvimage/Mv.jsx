import styled from "styled-components";
import Image from "./img/mainvisual.jpg";

const Conponents = ({ className }) => (
  <div className={className}>
    <div className="mv_wrap">
      <img src={Image} />
    </div>
  </div>
);

const Stylemv = styled(Conponents)`
  > .mv_wrap {
    width: 100%;
    > img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const Mv = (props) => <Stylemv {...props} />;
