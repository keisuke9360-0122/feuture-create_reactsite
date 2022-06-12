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
  width: 100%;
  font-size: 32px;
  color: #000000;
`;
const Wcontainer = styled.div`
  width: 1000px;
  padding: 20px 30px;
  margin: 0 auto;
`;
