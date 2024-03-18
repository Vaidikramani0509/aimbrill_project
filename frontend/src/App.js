import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './components/HomeScreen';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Provider } from 'react-redux';
import store from './redux/store';
import CrudOperation from './components/CrudOperation';


function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <ApolloProvider client={client}>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/count" element={<CrudOperation />} />

            </Routes>
          </ApolloProvider>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
