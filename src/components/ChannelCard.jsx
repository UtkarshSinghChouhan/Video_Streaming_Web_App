import React from 'react'

import {Box, Card, CardMedia, CardContent, Typography} from "@mui/material";

import {CheckCircle} from "@mui/icons-material";

import  {Link} from "react-router-dom";

import { demoProfilePicture } from '../utils/contants';

const ChannelCard = ({info, marginTop}) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '320px',
        width:{ xs: '100%', sm: '318px', md: '315px' },
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${info?.id?.channelId}`}>
        <CardContent
          sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',
            color:'#fff'
          }}
        >

          <CardMedia 
            image={info?.snippet?.thumbnails?.high?.url || demoProfilePicture }
            alt={info?.snippet?.title}
            sx={{
              borderRadius:'50%',
              height: '180px',
              width:'180px',
              mb:2,
              border:'1px solid #e3e3e3'
            }}
          />

          <Typography variant='h6'>
            {info?.snippet?.title}
            <CheckCircle 
              sx={{fontSize: 14, color: 'gray', ml: '5px'}}
            />
          </Typography>


          {
            (info?.statistics?.subscriberCount) &&

            <Typography color='white'>
              {parseInt(info?.statistics?.subscriberCount).toLocaleString()}
            </Typography>
          }

        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard