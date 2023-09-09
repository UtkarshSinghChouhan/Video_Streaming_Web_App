import React, { useState, useEffect } from 'react'
import {Box, Typography} from "@mui/material";

import Videos from './Videos';
import {fetchFromAPI} from "../utils/fetchFromAPI";
import Loading from './Loading';

import { useParams } from 'react-router-dom';


const SearchFeed = () => {

  const[videos, setVideos] = useState([]);
  const[loading, setLoading] = useState(true);

  const {searchTerm} = useParams();

  useEffect(() => {

    setLoading(true)

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) =>{ 
      setVideos(data.items)
      setLoading(false)
    })
    
  }, [searchTerm])


  return (

    <Box
      p={2}
      sx={{overflowY : 'auto', height: '89vh', flex: 2}}
    >
      <Typography 
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{color : "white"}}
      >
        Search Results for:  <span style={{color : '#F31503'}}> { searchTerm } </span>
      </Typography>

      <Box sx={{mr : {sm: '120px'}}} />

      {loading ?
        <Box display="flex" p={2}>
          <Box sx={{mr : {sm: '120px'}}} />
          <Loading />             
        </Box> :

          <Box display="flex" p={2}>
            <Box sx={{mr : {sm: '120px'}}} />
            <Videos videos={videos} />  
          </Box>
      }
    </Box>


  )
}

export default SearchFeed;