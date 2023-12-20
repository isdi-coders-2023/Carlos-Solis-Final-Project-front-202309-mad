import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Monument } from '../../entities/monuments';
import { List } from './list';

const mockMonuments = [
  {
    id: '1',
    name: 'Test Recipe 1',
    img: { url: 'http://test1.com' },
    // Add other properties as needed
  },
  {
    id: '2',
    name: 'Test Monument 2',
    img: { url: 'https://test2.com' },
    // Add other properties as needed
  },
] as unknown as Monument[];

jest.mock('../card/card', () => ({
  Card: ({ monument }: { monument: Monument }) => <div>{monument.name}</div>,
}));

describe('List', () => {
  test('renders List component', () => {
    render(<List monumentsToRender={mockMonuments} />);
    mockMonuments.forEach((monument) => {
      expect(screen.getByText(monument.name)).toBeInTheDocument();
    });
  });
});
