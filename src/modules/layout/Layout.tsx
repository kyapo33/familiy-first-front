import { FC, useEffect, useCallback, useState } from 'react';
import { Preferences } from '@capacitor/preferences';
import { RoutesPath } from '../../routes/Paths';
import { useNavigate } from 'react-router';
import { useUserStore } from '../../assets/store/UserStore';
import { GetUserModelDto } from '../../schemas/Interfaces';

const Layout: FC = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const checkUser = useCallback(async () => {
    const { value } = await Preferences.get({ key: 'user' });
    if (!value) {
      navigate(RoutesPath.Login);
      return;
    }
    const newUser: GetUserModelDto = JSON.parse(value);
    setUser({ ...newUser });
  }, [navigate, setUser]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  if (!user || !user?.id) {
    return null;
  }

  return <div>{JSON.stringify(user)}</div>;
};

export default Layout;
