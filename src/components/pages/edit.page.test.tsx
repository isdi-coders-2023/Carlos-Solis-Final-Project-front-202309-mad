import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import EditPage from './edit.page';

jest.mock('../../hooks/users.hooks');

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({ id: '1' }),
  useNavigate: () => jest.fn(),
}));

const mockedMonuments = [
  { id: '1', name: 'monument 1' },
  { id: '2', name: 'monument 2' },
  { id: '3', name: 'monument 3' },
];

const updateCurrentMonumentMock = jest.fn();

jest.mock('../../hooks/monuments.hooks', () => ({
  useMonuments: () => ({
    monuments: mockedMonuments,
    loadAllMonuments: jest.fn(),
    updateCurrentMonument: updateCurrentMonumentMock,
  }),
}));

describe('EditPage', () => {
  it('updates the monument on form submission', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <EditPage />
      </MemoryRouter>
    );

    const submitButton = getByRole('button', { name: /Actualizar/i });

    userEvent.click(submitButton);

    const formElement = getByRole('form');

    fireEvent.submit(formElement);

    expect(updateCurrentMonumentMock).toHaveBeenCalled();
  });
});
