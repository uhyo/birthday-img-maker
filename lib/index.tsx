import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    App,
} from './components/app';
import {
    Store,
} from './store';

{
    const store = new Store();

    const app = <App store={store} />;

    const apparea = document.getElementById('app');

    ReactDOM.render(app, apparea);
}
