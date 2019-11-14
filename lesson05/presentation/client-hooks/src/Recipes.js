import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const recipesQuery = gql`
  {
    recipes {
      title
    }
  }
`;

function Recipes() {
  const Result = useQuery(recipesQuery);

  if (Result.loading) {
    return <div>Loading …</div>;
  }

  if (Result.error) {
    return <div>Something wrong.</div>;
  }

  return (
    <div>
      {Result.data.recipes.map(recipe => (
        <div>{recipe.title}</div>
      ))}
    </div>
  );
}

export default Recipes;
