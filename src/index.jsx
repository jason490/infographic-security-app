/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import { onMount } from 'solid-js';
import { initFlowbite } from 'flowbite';

import './index.css';
import App from './App';
import DataPage from './routes/data';
import LearnPage from './routes/learn';
import ProtectPage from './routes/protect';
import PhysicalPage from './routes/physical';
import TechnicalPage from './routes/technical';
import AdministrativePage from './routes/Administrative';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

const layout = (props) => {
    onMount(() => {
        initFlowbite();
    });
    return (
        <div class="">
            {props.children}
        </div>
    );
}
render(() => (
    <Router root={layout}>
        <Route path="/" component={App} />
        <Route path="/data" component={DataPage} />
        <Route path="/learn">
            <Route path="/" component={LearnPage} />
            <Route path="/physical" component={PhysicalPage} />
            <Route path="/technical" component={TechnicalPage} />
            <Route path="/administrative" component={AdministrativePage} />
        </Route>
        <Route path="/protect" component={ProtectPage} />
        <Route path="*" component={App} />
    </Router>), root);

