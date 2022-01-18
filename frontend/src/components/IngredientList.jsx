import { Typography, Box } from '@mui/material'

export default function IngredientList(props) {

  const {ingredients} = props

  return (
    <div>
      <Box display='flex' justifyContent="center" flexDirection='column'>
        <Typography variant='h4'>Ingredient List</Typography>
        {/* {displayIngredients(ingredients)} */}
        {ingredients.map((ingredient, index) => {
          return (
            <Typography>{`${ingredient.quantity} ${ingredient.unit} of ${ingredient.name}`}</Typography>
          )
        })}
      </Box>
    </div>
  )
}
