import React from 'react'
import { Container } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Root() {
  return (
    <>
    <Navbar />
      <Container maxWidth="lg">
       <Outlet/> 
      </Container>
    </>
  )
}

export default Root