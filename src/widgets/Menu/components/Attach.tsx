import React from "react";
import styled from "styled-components";

interface Props {
  att: string;
}

const BlockIcon = styled.div`
  position: absolute;
  top: -10px;
  right: 0px;
  font-size: 10px;
  color: #fc0909;
`;

const Attach: React.FC<Props> = ({ att }) => {
  return <BlockIcon>{att}</BlockIcon>;
};

export default Attach;
