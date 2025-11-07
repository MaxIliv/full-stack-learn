export type RecipeData = {
  id: number;
  title: string;
}

type RecipeProps = {
  recipe: RecipeData
}

export default function Recipe(props: RecipeProps) {
  return props.recipe.title;
}