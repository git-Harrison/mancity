import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store/store';
import LoadingScreenHandler from './components/templates/LoadingScreenHandler';
import ThemeProviderWrapper from './components/templates/ThemeProviderWrapper';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LoadingScreenHandler>
                    <ThemeProviderWrapper/>
                </LoadingScreenHandler>
            </PersistGate>
        </Provider>
    );
}

export default App;