import React from 'react'
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {logo} from "../utils/contants";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
     direction="row" 
     alignItems="center" 
     justifyContent="space-between" 
     p={2} 
     sx={{background:'#000', position: 'sticky', top: 0, zIndex: 10}}
    >

      <Link to="/" style={{display: "flex", alignItems: "center"}}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar />
      
    </Stack>
  )
}

export default Navbar