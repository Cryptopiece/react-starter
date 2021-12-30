import React from "react";
import styled from "styled-components";

export const Image = (props: { [x: string]: any;  }) => {
  const {
    
    ...otherProps
  } = props;

  return (
    <img  {...otherProps} />
  );
}

export const Box = styled.div`
width: 180px;
heigh:210px;
background: ${({ color }) => color};
border-radius:16px;
display: flex;
align-items: center;
justify-content: center;
`;

