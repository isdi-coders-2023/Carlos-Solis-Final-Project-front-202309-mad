import { useUsers } from '../../hooks/users.hooks';
import { useState } from 'react';
import styles from './logout.button.module.scss';
import { useNavigate } from 'react-router-dom';

export function LogoutButton() {
  const { logout, loginLoadState } = useUsers();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setIsLoggedOut(true);
    navigate('/login');
  };

  return (
    <>
      {!isLoggedOut && loginLoadState === 'logged' && (
        <div className={styles.loginLinkButton}>
          <button
            className={styles.logoutbutton}
            onClick={handleLogout}
            role="button"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
