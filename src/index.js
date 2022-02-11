import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClient,QueryClientProvider, } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()


ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);


