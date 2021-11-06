import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from "styled-components";
import { petra, minimal, carbon, journal, GlobalStyles, gunmetal, brain, redbrain } from "./assets/css/themes";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import PlatformMain from "./components/Platform/main";
import PlatformSpecific from "./components/Platform/specific";

//Pages
import Home from "./pages/Main";
import Author from "./pages/Author";
import Topic from "./pages/Topic";
import TopicNavigation from "./pages/TopicNavigation";
import Quote from "./pages/Quote";
import Freethinkers from "./pages/Freethinkers";
import SearchResult from "./pages/SearchResult";

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

const findTheme = (theme) => {
  switch(theme) {
    case "petra": return petra;
    case "minimal": return minimal;
    case "carbon": return carbon;
    case "journal": return journal;
    case "gunmetal": return gunmetal;
    case "brain": return brain;
    case "redbrain": return redbrain;
    default: return journal;
  }
}

function App() {
  const [theme] = useState("gunmetal");

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={findTheme(theme)}>
          <GlobalStyles/>
          <NavBar/>
          <StyledApp className="mainBody">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/author/:authorId">
                <Author/>
              </Route>
              <Route exact path="/topic/:topicId">
                <Topic/>
              </Route>
              <Route exact path="/quote/:quoteId">
                <Quote/>
              </Route>
              <Route exact path="/thoughts">
                <TopicNavigation/>
              </Route>
              <Route exact path="/freethinkers">
                <Freethinkers/>
              </Route>
              <Route exact path="/platforms">
                <PlatformMain/>
              </Route>
              <Route exact path="/platforms/:type">
                <PlatformSpecific/>
              </Route>
              <Route exact path="/search/:query">
                <SearchResult/>
              </Route>
              <Route component={ErrorPage}/>
            </Switch>
          </StyledApp>
          <Footer/>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
