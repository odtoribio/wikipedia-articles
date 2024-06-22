import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Pagination from './Pagination';
import { Articles } from '../types/ArticleInterface';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #ff8080
`;

interface FeedProps {
  items: Articles[];
  itemsPerPage: number;
  date: string;
}

const Feed: React.FC<FeedProps> = ({ items, itemsPerPage, date }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Container>
        {!currentItems.length && <Paragraph>No articles for this date.</Paragraph>}
        {currentItems.map((item, index) => (
          <Card
            key={index}
            thumbnail={item.thumbnail?.source || "https://via.placeholder.com/150"}
            title={item.normalizedtitle}
            description={item.description || 'No description available.'}
            pageId={item.pageid.toString()}
            date={date} />
            
        ))}
      </Container>
      <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
      />
    </>
  );
};

export default Feed;
