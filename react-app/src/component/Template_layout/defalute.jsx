import styled from "styled-components";

export const Header = (props) => {
  const { children } = props;
  return <Cheader> {children}</Cheader>;
};
const Cheader = styled.header`
  width: 100%;
  font-size: 32px;
  color: #000000;
`;
