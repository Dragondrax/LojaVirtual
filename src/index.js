// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ItemProvider } from './context/Cart'
//
import App from './App';
import * as serviceWorker from './serviceWorker';

// ----------------------------------------------------------------------

ReactDOM.render(
  <ItemProvider>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </ItemProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
