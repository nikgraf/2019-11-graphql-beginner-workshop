import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// const recipesQuery = gql`
//   {
//     recipes(vegetarian: true) {
//       id
//       title
//     }
//   }
// `;

const recipesQuery = gql`
  query HeroComparison($vegetarian: Boolean!) {
    recipes(vegetarian: $vegetarian) {
      id
      title
    }
  }
`;

function Recipes() {
  const Result = useQuery(recipesQuery, {variables: { vegetarian: true }});

  if (Result.loading) {
    return <div>Loading …</div>;
  }

  if (Result.error) {
    return <div>Something wrong.</div>;
  }

  return (
    <div>
      {Result.data.recipes.map(recipe => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  );
}

export default Recipes;
