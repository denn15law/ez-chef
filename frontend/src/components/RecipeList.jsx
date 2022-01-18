import { Typography, Box } from '@mui/material'
import React from 'react'

export default function RecipeList(props) {

  const {recipes} = props
  
  return (
    <>
      <Box display='flex' justifyContent='center' flexDirection='column'>
        <Typography variant='h4'>Recipe List</Typography>
        {recipes.map((recipe, index) => {
          console.log(recipe)
          return (
            <Typography id={recipe.id}>{recipe.title}</Typography>
          )
        })}
      </Box>
    </>
  )
}
