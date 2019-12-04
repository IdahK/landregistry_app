import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "./bootstrap.min.css";
import "./main.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';

// render(<App />, document.getElementById('root'));

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );

serviceWorker.unregister();
