import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Places from "./Places";
import AddForm from "./AddForm";
import data from "./data";
import ThemeContext from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import PlaceDetail from "./PlaceDetail";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const [places, setPlaces] = useState(data.places);
  const [theme, setTheme] = useState("light");

  const addPlace = place => {
    const newPlace = { ...place, id: uuidv4() };
    setPlaces([...places, newPlace]);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeSwitcher />
          <Switch>
            <Route path="/place/:id">
              <PlaceDetail places={places} />
            </Route>
            <Route path="/">
              <h1>Places</h1>
              <Places places={places} addPlace={addPlace} />
              <AddForm addPlace={addPlace} />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </Router>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
