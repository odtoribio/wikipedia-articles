import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import { isVisitedItem } from '../utils/localStorageUtils';

jest.mock('../utils/localStorageUtils');

describe('Card Component', () => {
  const thumbnail = 'https://via.placeholder.com/150';
  const title = 'Test Title';
  const description = 'Test Description';
  const pageId = '123';
  const date = '2024-06-21';

  beforeEach(() => {
    (isVisitedItem as jest.Mock).mockReturnValue(false);
  });

  it(' should render correctly with passed props', () => {
    const card = render(
      <Card
        thumbnail={thumbnail}
        title={title}
        description={description}
        pageId={pageId}
        date={date}
      />
    );
  
    const titleItem = card.getByText(title)

    expect(titleItem).toBeDefined();
  });

});
