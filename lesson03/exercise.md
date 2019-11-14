# Exercise

Take your existing React application and instead of loading the places from a local file make sure to the data is fetched from the server.

_Hint_: 

- `npm install --save graphql`
- `npm install --save apollo-boost`
- `npm install --save react-apollo`

```js
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});
```

```jsx
<ApolloProvider client={client}></ApolloProvider>
```

```jsx
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const placesQuery = gql`
  TODO YOUR QUERY
`;

export default function Places(props) {
  const { loading, error, data } = useQuery(placesQuery);
  
  return null // TOOD render your component
}
```

