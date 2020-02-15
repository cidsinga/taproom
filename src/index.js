import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import './fonts/Futurist.ttf';

ReactDOM.render(<HashRouter>
                  <App />
                </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
