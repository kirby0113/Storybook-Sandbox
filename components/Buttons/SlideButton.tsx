import { ReactNode } from 'react';
import { colors } from '../../constants/color';
import styled from 'styled-components';

export type SlideButtonProps = {
  children: ReactNode;
  color?: keyof typeof colors;
  onClick: () => void;
};
const StyledSlideButton = styled.button<{ color: keyof typeof colors }>`
  font-size:25px;
  padding:10px 20px;
  font-weight:bold;
  letter-spacing:3px;
  color ${colors['white'].light};
  background-color: ${({ color }) => colors[color].normal};
  border: solid 2px ${({ color }) => colors[color].dark};
  cursor:pointer;
  text-transform: uppercase;
`;

export const SlideButton = ({ children, color = 'primary', onClick }: SlideButtonProps) => {
  return (
    <StyledSlideButton color={color} onClick={onClick}>
      {children}
    </StyledSlideButton>
  );
};
