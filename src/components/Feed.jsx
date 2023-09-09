import React, { useState, useEffect } from 'react'
import {Box, Stack, Typography} from "@mui/material";
import SideBar from "./SideBar"
import Videos from './Videos';
import {fetchFromAPI} from "../utils/fetchFromAPI";
import Loading from './Loading';


const Feed = () => {

  const[selectedCategory, setSelectedCategory] = useState('New')
  const[videos, setVideos] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(true)

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) =>{ 
      setVideos(data.items)
      setLoading(false)
  })
    
  }, [selectedCategory])


  return (
    <Stack
      sx={{flexDirection: { sx : "column", md : "row" } }}
    >
      <Box
        sx={{
          height : { sx: 'auto', md : "89vh" },
          borderRight: '1px solid #3d3d3d',
          px: {sx : 0, md : 2}
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography
          className='copyright'
          variant='body2'
          sx={{color : "#fff", mt: 1.5}}
        >
          Copyright 2022 Youtube
        </Typography>
      </Box>

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
          {selectedCategory} <span style={{color : '#F31503'}}>videos</span>
        </Typography>

        {loading ?
          <Loading /> :
         <Videos videos={videos} />}
      </Box>

    </Stack>
  )
}

export default Feed;