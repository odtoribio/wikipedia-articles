import React, { useState } from 'react';
import styled from 'styled-components';
import { isVisitedItem, updateVisitedItem } from '../utils/localStorageUtils';

const Container = styled.div<{ visited?: boolean }>`
  border: ${props => (props.visited ? '3px solid #bb00ff' : '1px solid #ddd')} ;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: ${props => (props.visited ? '#ff00ee' : '')};

  &:hover {
    cursor: pointer;
}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

interface CardProps {
  thumbnail: string;
  title: string;
  description: string;
  pageId: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ thumbnail, title, description, pageId, date }) => {
  const [visited, setVisited] = useState(false);
  const handleCardClick = () => {
    updateVisitedItem('visited', pageId);
    setVisited(isVisitedItem('visited',pageId))
    const url = `/article/${pageId}?date=${encodeURIComponent(date)}`;
    window.open(url, '_blank');
  }
  
  return (
    <Container onClick={handleCardClick} visited={visited}>
      <Image src={thumbnail} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
