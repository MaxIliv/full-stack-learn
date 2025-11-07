import type { RecipeData } from './Recipe';

type ClaudeProps = {
  ingridients: string[];
  onRecipe: (e: RecipeData) => void;
}
export default function SubmitToClaude(props: ClaudeProps) {
  console.log(props.ingridients);
  return (
    <>
      <button>Get Recipe from Claude</button>
    </>
  )
}