import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Places from "./Places";
import AddForm from "./AddForm";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import PlaceDetail from "./PlaceDetail";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeSwitcher />
          <Switch>
            <Route path="/place/:id">
              <PlaceDetail />
            </Route>
            <Route path="/">
              <h1>Places</h1>
              <Places />
              <AddForm />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </Router>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
