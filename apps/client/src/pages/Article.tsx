import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { fetchArticle } from '../services/getArticleService';
import { Articles } from '../types/ArticleInterface';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
`;

const Article: React.FC = () => {
  const [article, setArticle] = useState<Articles | object>({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const query = new URLSearchParams(useLocation().search);
  const date = query.get('date') || '';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchArticle(id!, date);
        setArticle(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])
  
  return (
    <Container>
      {loading ? <p>Loading...</p> : (
        <>
          <Image src={article?.thumbnail?.source} alt={article?.normalizedtitle} />
          <h1>{article?.normalizedtitle}</h1>
          <p>{article?.extract}</p>
        </>
      )}

    </Container>
  );
};

export default Article;
