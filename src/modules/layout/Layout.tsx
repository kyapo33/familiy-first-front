import { FC, useEffect, useCallback } from 'react';
import { Preferences } from '@capacitor/preferences';
import { RoutesPath } from '../../routes/Paths';
import { useNavigate } from 'react-router';

const Layout: FC = () => {
  const navigate = useNavigate();

  const checkUser = useCallback(async () => {
    const { value } = await Preferences.get({ key: 'token' });
    if (!value) {
      navigate(RoutesPath.Signup);
    }
  }, [navigate]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return <div>bla</div>;
};

export default Layout;
