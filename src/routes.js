import BoxRegisterContainer from './containers/BoxCalculatorContainer';
import BoxTableContainer from './containers/BoxTableContainer';

export default [
  {
    component: '',
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