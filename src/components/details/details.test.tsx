import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { Details } from './details';
import { Monument } from '../../entities/monuments';

jest.mock('../../hooks/users.hooks', () => ({
  useUsers: jest.fn(),
}));

jest.mock('../../hooks/monuments.hooks', () => ({
  useMonuments: jest.fn().mockReturnValue({
    currentMonument: {} as unknown as Monument,
  }),
}));

describe('Details Component', () => {
  test('renders details correctly', () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>
    );

    const result = screen.getByRole('buttonupdate');
    expect(result).toBeInTheDocument();
  });
});
