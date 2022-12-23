import { useState } from "react"
import { AddCategory, GitGrid } from "./components";


export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory )  => {

    if ( categories.includes(newCategory) ) return;

    setCategories([ ...categories, newCategory]);
  }

  return (
    <>
        <h1>GitExpertApp</h1>

        <AddCategory 
          onNewCategory={ value => onAddCategory(value) }
        />

          { 
          categories.map( (category) => {
            return (
              <GitGrid key={ category } category={ category }/>
            )
          }) 
          }
    </>
  )
}
