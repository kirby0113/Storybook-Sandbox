import { ReactNode } from 'react';
import { colors } from '../constants/color';
import styled from 'styled-components';

export type ButtonProps = {
  children: ReactNode;
  color?: keyof typeof colors;
  onClick: () => void;
};

const StyledButton = styled.button<{ color: keyof typeof colors }>`
  font-size:25px;
  padding:10px 20px;
  font-weight:bold;
  letter-spacing:3px;
  color ${colors['white']};
  background-color: ${({ color }) => colors[color]};
  border:${({ color }) => colors[color]};
  cursor:pointer;
`;

export const Button = ({ children, color = 'primary', onClick }: ButtonProps) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
