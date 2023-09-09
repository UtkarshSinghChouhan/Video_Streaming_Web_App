import React from 'react'
import {Stack, Box, LinearProgress} from "@mui/material";
import VideosCard from './VideosCard';
import ChannelCard from './ChannelCard';


const Videos = ({videos, direction}) => {

  if(!videos?.length){
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress color='inherit' sx={{color: "#FC1503"}}/>
      </Box>
    )
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >


      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideosCard info={item} />}
          {item.id.channelId && <ChannelCard info={item} />}
        </Box>
      ))}


    </Stack>
  )
}

export default Videos

