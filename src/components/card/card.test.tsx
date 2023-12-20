import { render, screen } from '@testing-library/react';
import { Card } from './card';
import '@testing-library/jest-dom';
import { Monument } from '../../entities/monuments';
import { BrowserRouter as Router } from 'react-router-dom';

const mockMonument = {
  id: '1',
  name: 'Test Monument',
  monumentImg: { url: 'http://test.com' },
} as unknown as Monument;

jest.mock('../../hooks/monuments.hooks', () => ({
  useMonuments: () => ({ handleDetailsPage: jest.fn() }),
}));

describe('Card', () => {
  test('renders Card component', () => {
    render(
      <Router>
        <Card monument={mockMonument} />
      </Router>
    );
    expect(screen.getByText('Detalles')).toBeInTheDocument();
  });
});
