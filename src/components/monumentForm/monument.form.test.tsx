import { render, screen } from '@testing-library/react';
import MonumentForm from './monument.form';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { appStore } from '../../store/store';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('MonumentForm', () => {
  test('renders MonumentForm component', () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <MonumentForm />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Crear')).toBeInTheDocument();
  });
});
