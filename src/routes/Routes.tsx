import { RoutesPath } from './Paths';
import SignUp from '../modules/signup/SignUp';
import { RouteObject } from 'react-router';
import Layout from '../modules/layout/Layout';
import News from '../modules/news/news';

export const Routes: RouteObject[] = [
  {
    path: RoutesPath.Signup,
    element: <SignUp />,
    children: []
  },
  {
    path: RoutesPath.Signup,
    element: <SignUp />,
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
