import { FC, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';
import { RoutesPath } from '../../routes/Paths';
import { useNavigate } from 'react-router';

const Layout: FC = () => {
  const navigate = useNavigate();
  const checkUser = async () => {
    const { value } = await Preferences.get({ key: 'token' });
    if (!value) {
      navigate(RoutesPath.Signup);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return <div>bla</div>;
};

export default Layout;
