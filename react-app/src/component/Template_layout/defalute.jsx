import styled from "styled-components";

export const Layout = (props) => {
  const { children } = props;
  return (
    <Wcontainer>
      <Cheader> {children}</Cheader>
    </Wcontainer>
  );
};
const Cheader = styled.header`
  font-size: 32px;
  color: #000000;
  padding: 60px 30px 30px 30px;
`;
const Wcontainer = styled.div`
  width: 1120px;
  padding: 0 10px;
`;
