// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";

if (process.env.NODE_ENV === "production") {
    Sentry.init({
        dsn: "https://8aeb353d3ef73cf7a4e6715430f3f81c@o4508220889890816.ingest.us.sentry.io/4508220893560832",
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
        ],
        // Tracing
        tracesSampleRate: 1.0, // 100% of the transactions in production
        tracePropagationTargets: ["localhost", /^https:\/\/mancityhub\.netlify\.app/],
        // Session Replay
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    });
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();