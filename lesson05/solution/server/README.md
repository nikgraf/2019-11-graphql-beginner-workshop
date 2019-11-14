## Install

In a terminal run

```sh
yarn
```

## Start

```sh
yarn start
```

This will start your app with nodemon, which reboots on every file change.

## Usage

Visit `http://localhost:4000/` to see a GraphiQL interface and query the data.

### Query

```graphql
{
  places {
    id
    name
    description
    email
    phone
    location {
      lat
      long
    }
    images {
      url
      banner
    }
  }
}
```

### Mutation

```graphql
mutation {
  createPlace(name: "Partybus", email: "party@example.com") {
    id
    name
    email
    phone
  }
}
```
