import { useState } from 'react'
import './App.css'
import { IngridientsForm } from './IngridientsForm'
import Recipe, { type RecipeData } from './Recipe';
import SubmitToClaude from './SubmitToClaude';

function App() {
  const [recipe, setRecipe] = useState<RecipeData>();
  const [ingridients, setIngridients] = useState<string[]>([]);

  function handleIngridient(ingridient: string) {
    setIngridients((prev) => ([...prev, ingridient]));
  }

  const ingridientsItems = ingridients.map((i) => <li key={i}>{i}</li>)

  return (
    <>
      <IngridientsForm onAdd={handleIngridient} />
      <ul>{ingridientsItems}</ul>
      <SubmitToClaude ingridients={ingridients} onRecipe={setRecipe} />
      {recipe && <Recipe recipe={recipe} />}
    </>
  )
}

export default App
