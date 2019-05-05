import BoxRegisterContainer from './containers/BoxCalculatorContainer';
import BoxTableContainer from './containers/BoxTableContainer';
import HomeContainer from './containers/HomeContainer';

export default [
  {
    component: HomeContainer,
    path: '/',    
    exact: true,
  },
  {
    component: BoxRegisterContainer,
    path: '/addbox',    
    exact: true,
  },
  {
    component: BoxTableContainer,
    path: '/listboxes',    
    exact: true,
  }
];