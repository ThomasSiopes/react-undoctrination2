import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, newTheme, GlobalStyles } from "./assets/css/themes";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Main";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const StyledApp = styled.div``;

function App() {
  const [theme, setTheme] = useState("default");

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme === "default" ? defaultTheme : newTheme}>
          <GlobalStyles/>
          <NavBar/>
          <StyledApp className="mainBody">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </StyledApp>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
