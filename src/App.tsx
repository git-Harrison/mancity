import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import store, {persistor} from './store/store';
import LoadingScreenHandler from './components/templates/LoadingScreenHandler';
import ThemeProviderWrapper from './components/templates/ThemeProviderWrapper';
import * as Sentry from "@sentry/react";
import './App.css';

Sentry.init({
    dsn: "https://8aeb353d3ef73cf7a4e6715430f3f81c@o4508220889890816.ingest.us.sentry.io/4508220893560832",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: [/^https:\/\/mancityhub\.netlify\.app/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

function App() {
    const basename = process.env.REACT_APP_BASENAME || '/';

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename={basename}>
                    <LoadingScreenHandler>
                        <ThemeProviderWrapper/>
                    </LoadingScreenHandler>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;