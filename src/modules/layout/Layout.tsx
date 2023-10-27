import { FC, useEffect, useCallback, useState } from 'react';
import { Preferences } from '@capacitor/preferences';
import { RoutesPath } from '../../routes/Paths';
import { useNavigate } from 'react-router';
import { useUserStore } from '../../assets/store/UserStore';
import { GetUserModelDto } from '../../schemas/Interfaces';

const Layout: FC = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  if (!user || !user?.id) {
    return null;
  }

  return <div>bla</div>;
};

export default Layout;
