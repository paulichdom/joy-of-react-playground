import React from 'react';
import styled from 'styled-components';

type MegaBoostProps = {
  handleClick: () => void;
};

const MegaBoost: React.FC<MegaBoostProps> = ({ handleClick }) => {
  return <MegaButton onClick={handleClick}>MEGA BOOST!</MegaButton>;
};

const PureMegaBoost =  React.memo(MegaBoost);
export default PureMegaBoost

const MegaButton = styled.button`
  padding: 4px 16px;
  color: white;
  background: red;
  border: 1px solid red;
`;
