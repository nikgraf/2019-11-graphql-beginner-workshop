1. 

```graphql
query {
  allPeople {
    edges {
      node {
        name
      }
    }
  }
}
```

or

```graphql
{
  allPeople {
    people {
      name
    }
  }
}
```

```graphql
{
  person(id: "cGVvcGxlOjE=") {
    starshipConnection(first: 50) {
      starships {
        name
      }
    }
  }
}
```

```graphql
{
  allPlanets(first: 40) {
    planets {
      name
      id
    }
  }
  
  planet(id: "cGxhbmV0czo4") {
    population
    residentConnection(first: 100) {
      residents {
        name
      }
    }
  }
}
```

2.

```graphql
query { 
  viewer { 
    repositories(last: 10) {
      edges {
        node {
          name
          defaultBranchRef {
            name
          }
        }
      }
    }
  }
}
```
