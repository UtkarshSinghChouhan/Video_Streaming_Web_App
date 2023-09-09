import { IconButton } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper, Button} from "@mui/material"
import {Search} from "@mui/icons-material";

const SearchBar = () => {

    const[search, setSearch] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(search){
            navigate(`/search/${search}`)

            setSearch("");
        }

    }

  return (
    <Paper
        component="form"
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: {sm : 5}
        }}
        onSubmit={handleSubmit}
    >
        <input 
            type="text"
            className='search-bar'
            placeholder='Search...'
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
        />
        <Button
            type='submit'
            sx={{p : '10px', color: 'red'}}
        >
            <Search />
        </Button>
    </Paper>
  )
}

export default SearchBar