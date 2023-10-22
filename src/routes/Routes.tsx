import { RoutesPath } from './Paths';
import SignUp from '../modules/signup/SignUp';
import { RouteObject } from 'react-router';
// import News from '../modules/news/news';
// import Layout from '../modules/layout/Layout';

export const Routes: RouteObject[] = [
  {
    path: '/',
    element: <SignUp />,
    children: []
  }
  // {
  //   path: '',
  //   element: Layout,
  //   children: [
  //     {
  //       path: "",
  //       element: News,
  //     },
  //   ],
  // },
];
