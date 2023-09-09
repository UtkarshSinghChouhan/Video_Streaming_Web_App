import React from 'react'
import {Stack, Box, Card} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

const Loading = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >


      {[...Array(50)]?.map((_, idx) => (
        <Box key={idx}>
            <Card 
                sx={{width:{ xs: '100%', sm: '318px', md: '315px' }, height: 320, boxShadow:"none", borderRadius:0, backgroundColor: 'black'}}
            >
                <Skeleton variant="rectangular" animation='pulse' height={220} sx={{ borderRadius: 8, backgroundColor: '#303030', width:{ xs: '100%', sm: '318px', md: '315px' }}}/> <br />
                <Skeleton variant="rectangular" animation='pulse' height={20} sx={{ borderRadius: 15, backgroundColor: '#303030', width:{ xs: '100%', sm: '318px', md: '315px' }}}/> <br />
                <Skeleton variant="rectangular" animation='pulse' height={20} sx={{ borderRadius: 15, backgroundColor: '#303030', width:{ xs: '100%', sm: '318px', md: '315px' }}}/> <br />
            </Card> 
        </Box>
      ))}


    </Stack>
  )
}

export default Loading