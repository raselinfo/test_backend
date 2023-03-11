import { Router } from 'express';
import demoRoute from './demo/demo.routes';
import signUPRoute from './auth/signup.routes';
import signInRoute from './auth/signin.routes';
import detailsRoute from './details/details.routes';

export interface RoutesType {
  route: Router;
}
const routes = [
  {
    route: demoRoute,
  },
  {
    route: signUPRoute,
  },
  {
    route: signInRoute,
  },
  {
    route: detailsRoute,
  },
];

export default routes;
