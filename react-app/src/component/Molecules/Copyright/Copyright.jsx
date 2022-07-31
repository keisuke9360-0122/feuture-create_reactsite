import styled from "styled-components";

const Copucomponent = ({ className }) => (
  <div className={className}>
    <div className="box">
      <p className="text">&copy; 2021 PHOTO BOOK2</p>
    </div>
  </div>
);

const Stylecopy = styled(Copucomponent)`
  > .box {
    text-align: center;
    margin-top: 60px;
  
  > .text {
    font-size: 14px;
    color: #000000;
  }
`;

export const Copy = (props) => <Stylecopy {...props} />;
