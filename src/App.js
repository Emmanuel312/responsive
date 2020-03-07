import React from 'react';
import GlobalStyles from './styles/global';
import Main from './pages/Main';
import Routes from './routes';
// import { Container } from './styles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}
