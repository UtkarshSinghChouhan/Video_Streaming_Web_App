import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography, Box, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import LinearProgress from '@mui/material/LinearProgress';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const VideoDetail = () => {

  const{id} = useParams();

  const [videosDetail, setVideoDetail] = useState()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))


    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items)) 
  },[])

  console.log(videosDetail)
  
  
  if(videosDetail === undefined){
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress color='inherit' sx={{color: "#FC1503"}}/>
      </Box>
    )
  }


  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videosDetail;

  return (
    <Box minHeight='95vh'>
      <Stack
        direction={{xs: 'column', md: 'row'}}
      >

        <Box flex={1}>

          <Box sx={{width:'100%', position:'sticky', top: '86px'}}>
            <ReactPlayer
              url={`https://youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />

            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack
              direction='row'
              justifyContent='space-between'
              px={2}
              py={1}
              sx={{color: '#fff'}}
            >

              <Link
                to={`/channel/${channelId}`}
              >
                <Typography color='#fff' variant={{sm: 'subtitle1', md:'h6'}}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', ml:'5px'}} />
                </Typography>
              </Link>

              <Stack direction='row' gap="20px" allignItems="centers">
                <Typography variant='body1' sx={{opacity: '0.6'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
             
                <Typography variant='body1' sx={{opacity: '0.6'}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
             
              </Stack>

            </Stack>
          </Box>

        </Box>

        <Box
          px={2}
          py={{md: 1, xs: 5}}
          justifyContent="center"
        >
          <Videos videos={videos} direction='column' />
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail