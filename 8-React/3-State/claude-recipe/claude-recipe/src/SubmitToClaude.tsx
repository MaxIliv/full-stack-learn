import { useState } from 'react';
import Markdown from 'react-markdown';
import type { RecipeData } from './Recipe';
import { getRecipeFromMistral } from './ai';
type ClaudeProps = {
  ingridients: string[];
  onRecipe: (e: RecipeData) => void;
};

type State = 'loading' | 'idle' | 'ready';

export default function SubmitToClaude(props: ClaudeProps) {
  const [state, setState] = useState<State>('idle');
  const [recipe, setRecipe] = useState<string>();

  async function getRecipe() {
    setState('loading');
    const res = await getRecipeFromMistral(props.ingridients);

    setState('ready');
    setRecipe(res);
  }
  return (
    <>
      {state === 'ready' && <h1>Heres AI suggestions:</h1>}
      {recipe && <Markdown>{recipe}</Markdown>}
      {state === 'loading' && <p>Cooking ...</p>}
      {state === 'idle' && (
        <button onClick={getRecipe}>Get Recipe from Claude</button>
      )}
    </>
  );
}
