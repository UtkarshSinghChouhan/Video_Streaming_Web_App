import React from 'react'
import {Stack} from "@mui/material"
import {categories} from "../utils/contants"


const SideBar = ({ selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
        sx={{
            overflowY: "auto",
            height: {sx: 'auto', md: '94%'},
            flexDirection: {xs : 'row', md : 'column'}
        }}
    >
       {
            categories.map((category) => (
                <button 
                    key={category.name}
                    className='category-btn'
                    style={{
                        background: category.name === selectedCategory && '#FC1503',
                        color: 'white'
                    }}
                    onClick={() => setSelectedCategory(category.name)}
                >
                    <span 
                        style={{
                            color: category.name === selectedCategory ? "white" : "red",
                            marginRight : '15px'
                        }}
                    >
                        { category.icon }
                    </span>

                    <span
                        style={{
                            opacity : category.name === selectedCategory ? '1' : '0.8'
                        }}
                    >
                        { category.name }
                    </span>
                </button>
            ))
       } 
    </Stack>
  )
}

export default SideBar