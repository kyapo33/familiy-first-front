import { RoutesPath } from './Paths';
import { RouteObject } from 'react-router';
import Layout from '../modules/layout/Layout';
import News from '../modules/news/news';
import Login from '../modules/login/Login';
import SignUp from '../modules/signup/SignUp';
import ProfilePicture from '../modules/files/profile-picture/ProfilePicture';
import Families from '../modules/families/Families';

export const Routes: RouteObject[] = [
  {
    path: RoutesPath.Signup,
    element: <SignUp />,
    children: []
  },
  {
    path: RoutesPath.Login,
    element: <Login />,
    children: []
  },
  {
    path: RoutesPath.ProfilPicture,
    element: <ProfilePicture />,
    children: []
  },
  {
    path: RoutesPath.FamiliesList,
    element: <Families />,
    children: []
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: RoutesPath.News,
        element: <News />
      }
    ]
  }
];
