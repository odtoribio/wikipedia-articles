import { useState } from 'react'
import './Home.css'
import DatePicker from '../components/DatePicker'
import Feed from '../components/Feed'
import styled from 'styled-components'
import { fetchItemsByDate } from '../services/wikipediaService'
import { Articles } from '../types/ArticleInterface'
import Dropdown from '../components/DropDown'


const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [items, setItems] = useState<Articles[]>([]);
  const [loading, setLoading] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(5);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSearch = async () => {
    if (selectedDate) {
      setLoading(true);
      try {
        const dateString = selectedDate.toISOString();
        const data = await fetchItemsByDate(dateString);
        console.log({data});
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }

    }
  }

  const handleNumberChange = (value: number) => {
    setCardsPerPage(value);
  };

  return (
    <Container>
      <h1>Wikipedia Articles Feed</h1>
      <SearchContainer>
        <span>Pick a Date: </span>
        <DatePicker onDateChange={handleDateChange} />
        <Button onClick={handleSearch}>Search</Button>
        <Dropdown label="Cards per page" onChange={handleNumberChange} />
      </SearchContainer>
      {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Feed items={items} itemsPerPage={cardsPerPage} date={selectedDate?.toISOString() || ""} />
      )}
    </Container>
  );
}

export default App;
