import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/color';
import { SlideButton } from '../Buttons/SlideButton';

export type CardProps = {
  caption?: string;
  image_url?: string;
  color: keyof typeof colors;
  onClick: () => void;
};

const StyledCard = styled.div`
  display: grid;
  grid-template-column: 1fr;
  border-radius: 20px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const CardImage = styled.div<{ image_url: string; color: keyof typeof colors }>`
  border-radius: 20px 20px 0 0;
  height: 200px;
  background-size: cover;
  background-image: url(${({ image_url }) => image_url});
  background-color: ${({ color }) => colors[color].normal};
`;

const CardCaption = styled.div<{ color: keyof typeof colors }>`
  font-weight: bold;
  font-size: 20px;
  padding: 15px 15px;
  color: ${colors['white'].normal};
  background-color: ${({ color }) => colors[color].normal};
`;

const CardBody = styled.div<{ color: keyof typeof colors }>`
  padding: 30px 15px;
  border-radius: 0 0 20px 20px;
  background-color: ${colors['white'].normal};
  color: ${({ color }) => colors[color].normal};
  text-align: center;
`;

export const Card = ({
  caption,
  color = 'primary',
  image_url = '/images/test.jpg',
  onClick,
}: CardProps) => {
  return (
    <StyledCard>
      <CardImage image_url={image_url} color={color}></CardImage>
      <CardCaption color={color}>{caption}</CardCaption>
      <CardBody color={color}>
        <SlideButton onClick={onClick} isRadius={true} color={color}>
          覗いてみる
        </SlideButton>
      </CardBody>
    </StyledCard>
  );
};
