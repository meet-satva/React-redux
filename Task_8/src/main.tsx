import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.js';
import App from './App.jsx';


const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>
  );
}
