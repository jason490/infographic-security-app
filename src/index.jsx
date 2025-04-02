/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';
import App from './App';
import DataPage from './routes/data';
import LearnPage from './routes/learn';
import ProtectPage from './routes/protect';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(() => (
    <Router>
        <Route path="/" component={App} />
        <Route path="/data" component={DataPage} />
        <Route path="/learn" component={LearnPage} />
        <Route path="/protect" component={ProtectPage} />
        <Route path="*" component={App} />
    </Router>), root);
