import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './components/HomeScreen';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });
  return (
    <Router>
      <div className="App">
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </ApolloProvider>
      </div>
    </Router>
  );
}

export default App;
