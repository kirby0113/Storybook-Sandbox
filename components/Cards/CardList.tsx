import { Card, CardProps } from './Card';
import styled from 'styled-components';
import { colors } from '../../constants/color';

export type CardListProps = {
  cardDatas?: CardProps[];
  color?: keyof typeof colors;
};

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
`;

export const CardList = ({ cardDatas, color = 'primary' }: CardListProps) => {
  return (
    <StyledCardList>
      {cardDatas?.map((cardData) => (
        <Card {...cardData} color={color} />
      ))}
    </StyledCardList>
  );
};
