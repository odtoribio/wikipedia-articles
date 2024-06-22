import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button<{ active?: boolean }>`
  background: ${props => (props.active ? '#007bff' : '#f0f0f0')};
  color: ${props => (props.active ? '#fff' : '#007bff')};
  border: 1px solid #ddd;
  margin: 0 5px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: ${props => (props.active ? '#007bff' : '#e0e0e0')};
  }
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <Container>
      {pages.map(page => (
        <Button
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
    </Container>
  );
};

export default Pagination;
