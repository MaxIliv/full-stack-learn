import {  } from 'react';
type IngridientsFormData = {
  ingridient: string;
}
type IngridientsFormProps = {
  onAdd: (e: string) => void;
}

export function IngridientsForm({ onAdd }: IngridientsFormProps) {
  function addIngridient(formData: FormData) {
    const data = Object.fromEntries(formData) as IngridientsFormData;

    onAdd(data.ingridient);
  }
  return (
    <form action={addIngridient}>
      <input name="ingridient" placeholder="carrot" />
      <button>Add</button>
    </form>
  )
}