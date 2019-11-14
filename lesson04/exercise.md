# Exercise

When visiting the place/:id route use the route to fetch data for only the one specific route.

_Hint_: Fetch one place first with a hard coded ID to see if it works and then extend it to use GraphQL variables for the place id to always fetch the correct place.

_Hint_:

```jsx
const { loading, error, data } = useQuery(placeQuery, { variables: {}});
```

