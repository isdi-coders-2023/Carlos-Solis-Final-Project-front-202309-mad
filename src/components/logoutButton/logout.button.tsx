import { useUsers } from '../../hooks/users.hooks';
import styles from './logout.button.module.scss';

export function LogoutButton() {
  const { logout, loggedUser } = useUsers();

  return (
    <>
      {loggedUser && (
        <button className={styles.logoutbutton} onClick={logout} role="button">
          Logout
        </button>
      )}
    </>
  );
}