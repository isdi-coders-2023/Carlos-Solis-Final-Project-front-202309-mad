import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { appStore } from '../../store/store';
import MainPage from './home.page';
import '@testing-library/jest-dom';

describe('HomePage', () => {
  test('renders HomePage component', () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Crea tu monumento')).toBeInTheDocument();
  });
});
