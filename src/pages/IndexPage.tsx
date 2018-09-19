import { RouteComponentProps } from "@reach/router";
import React from "react";
import logo from "static/react-logo.svg";
import styled, { keyframes } from "styled-components";

const Container = styled.section`
  text-align: center;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
`;

/* If you need more props like 'children' you can just extend RouteComponentProps.

  interface IProps extends RouteComponentProps {
    children: JSX.Element;
  }

*/

// @ts-ignore: Props declration for @reach/router
const IndexPage = (props: RouteComponentProps) => (
  <Container>
    <Header>
      <Logo src={logo} alt="logo" />
      <h2>Yeah, React!</h2>
    </Header>
  </Container>
);

export default IndexPage;
