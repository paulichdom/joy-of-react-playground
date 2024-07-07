import styled from 'styled-components';

export const ClockToggle: React.FC<{ handleToggle: () => void }> = ({
  handleToggle,
}) => {
  console.info('ClockToggle render');
  return <Toggle onClick={handleToggle}>Toggle clock</Toggle>;
};

const Toggle = styled.button`
  padding: 8px 16px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;
