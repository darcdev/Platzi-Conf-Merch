import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Productos </title>
      </Helmet>
      <Products />
    </>
  );
};

export default Home;
