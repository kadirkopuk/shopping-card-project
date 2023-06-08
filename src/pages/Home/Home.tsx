import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import Header from '@/components/Header';
import Foother from '@/components/Foother';
import Content from '@/components/Content';

const Home = () => {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Header />
      <Content />
      <Foother />
    </Container>
  );
};

export default Home;
