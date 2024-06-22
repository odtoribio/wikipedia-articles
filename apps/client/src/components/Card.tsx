import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
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
}

const Card: React.FC<CardProps> = ({ thumbnail, title, description }) => {
  return (
    <Container>
      <Image src={thumbnail} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default Card;
