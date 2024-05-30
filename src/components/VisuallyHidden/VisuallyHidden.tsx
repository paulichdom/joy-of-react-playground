import { ReactNode } from 'react';
import styled from 'styled-components';

const VisuallyHidden: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <HiddenContent>{children}</HiddenContent>;
};

export default VisuallyHidden;

const HiddenContent = styled.span`
  display: inline-block;
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1;
  width: 1;
  margin: -1;
  padding: 0;
  border: 0;
`;
