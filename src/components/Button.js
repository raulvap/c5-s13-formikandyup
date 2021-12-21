import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  color: #fff;
  width: 100%;
  background: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 2px 15px rgb (0, 0, 0, 0.3);
    transition: all 0.5s;
  }
`;

const Button = ({ ...otherProps }) => {
  return <MyButton type="submit" {...otherProps} />;
};

export default Button;
