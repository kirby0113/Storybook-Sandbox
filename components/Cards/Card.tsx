import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/color';

export type CardProps = {
  caption?: string;
  image_url?: string;
  children: ReactNode;
  color: keyof typeof colors;
};

const StyledCard = styled.div<{ color: keyof typeof colors }>`
  display: grid;
  grid-template-column: 1fr;
  border-radius: 20px;
  background-color: ${({ color }) => colors[color].normal};
`;

const CardImage = styled.div<{ image_url: string }>`
  border-radius: 20px 20px 0 0;
  height: 200px;
  background-image: url(${({ image_url }) => image_url});
  background-color: ${colors['white'].normal};
`;

const CardCaption = styled.div<{ color: keyof typeof colors }>`
  font-weight: bold;
  font-size: 20px;
  padding: 15px 15px;
  color: ${colors['white'].normal};
  background-color: ${({ color }) => colors[color].normal};
`;

const CardBody = styled.div<{ color: keyof typeof colors }>`
  padding: 15px 15px;
  border-radius: 0 0 20px 20px;
  background-color: ${colors['white'].normal};
  color: ${({ color }) => colors[color].normal};
`;

export const Card = ({ caption, children, color = 'primary', image_url = '' }: CardProps) => {
  return (
    <StyledCard color={color}>
      <CardImage image_url={image_url}></CardImage>
      <CardCaption color={color}>{caption}</CardCaption>
      <CardBody color={color}>{children}</CardBody>
    </StyledCard>
  );
};
