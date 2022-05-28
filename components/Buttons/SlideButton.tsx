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
  position:relative;
  font-weight:bold;
  letter-spacing:3px;
  color ${colors['white'].light};
  background-color: ${({ color }) => colors[color].normal};
  border: solid 1px ${({ color }) => colors[color].normal};
  cursor:pointer;
  text-transform: uppercase;
  transition:all .3s;
  overflow:hidden;
  z-index:1;
  animation-direction: reverse;

  &::before{
    content:"";
    width:110%;
    height:110%;
    z-index:-1;
    position:absolute;
    top:0%;
    left:-110%;
    background-color ${colors['white'].light};
    transition:all .3s;
  }

  &:hover{
    color: ${({ color }) => colors[color].normal};

    &::before{
      top:0;
      left:0;
      background-color ${colors['white'].light};
    }
  }
`;

export const SlideButton = ({ children, color = 'primary', onClick }: SlideButtonProps) => {
  return (
    <StyledSlideButton color={color} onClick={onClick}>
      {children}
    </StyledSlideButton>
  );
};
