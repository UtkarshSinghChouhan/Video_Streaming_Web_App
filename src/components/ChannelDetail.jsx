import React from 'react'

import {useState, useEffect} from "react";

import {useParams} from "react-router-dom";

import {Box} from "@mui/material";
import Loading from './Loading';


import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard';
import Videos from './Videos';

const ChannelDetail = () => {

  const[channelDetail, setChannelDetail] = useState();
  const[videos, setVideos] = useState(null);
  const[loading, setLoading] = useState(true);

  const {id} = useParams();


  useEffect(() => {
    const fetchResults = async() => {

      setLoading(true)
      
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0])
      
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      setVideos(videosData?.items)

      setLoading(false)
    }

    fetchResults();
  }, [id])

  // console.log(videos)

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 3%, rgba(56,56,163,1) 56%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '200px'
          }}
        />

        <ChannelCard info={channelDetail} marginTop='-115px' />
      </Box>

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

export default ChannelDetail