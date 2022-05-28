import { ReactNode } from 'react';
import { colors } from '../../constants/color';
import styled from 'styled-components';

export type ButtonProps = {
  children: ReactNode;
  color?: keyof typeof colors;
  isRadius?: boolean;
  onClick: () => void;
};

const StyledButton = styled.button<{ color: keyof typeof colors; isRadius: boolean }>`
  font-size:25px;
  padding:10px 20px;
  font-weight:bold;
  letter-spacing:3px;
  color ${colors['white'].light};
  background-color: ${({ color }) => colors[color].normal};
  border: solid 2px ${({ color }) => colors[color].dark};
  border-radius:${({ isRadius }) => (isRadius ? '30px' : '0')};
  cursor:pointer;
  text-transform: uppercase;
`;

export const Button = ({ children, color = 'primary', isRadius = false, onClick }: ButtonProps) => {
  return (
    <StyledButton color={color} onClick={onClick} isRadius={isRadius}>
      {children}
    </StyledButton>
  );
};
